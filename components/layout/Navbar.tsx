"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAVIGATION } from "@/data/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // A nav item is "current" for its own route and anything nested beneath it.
  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  // Close the drawer when the viewport crosses into the desktop layout or on Escape
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => { if (mq.matches) setMobileMenuOpen(false); };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMobileMenuOpen(false);
      setOpenDropdown((current) => {
        // Return focus to the trigger so keyboard users don't lose their place
        if (current) dropdownRefs.current[current]?.querySelector("button")?.focus();
        return null;
      });
    };
    mq.addEventListener("change", onChange);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      mq.removeEventListener("change", onChange);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  // Dismiss an open desktop dropdown on outside click
  useEffect(() => {
    if (!openDropdown) return;
    const onPointerDown = (e: PointerEvent) => {
      const container = dropdownRefs.current[openDropdown];
      if (container && !container.contains(e.target as Node)) setOpenDropdown(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [openDropdown]);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setOpenSubmenu(null);
    setOpenDropdown(null);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? "bg-white/92 backdrop-blur-xl border-b border-line shadow-hairline"
            : "bg-white/80 backdrop-blur-md border-b border-transparent"
        }`}
      >
        <nav className="container-wide h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 relative z-10" onClick={closeMenu}>
            <Image
              src="/akechi-logo.png"
              alt="Akechi Webcraft"
              width={156}
              height={38}
              priority
              className="h-9 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAVIGATION.map((item) => {
              const current = isCurrent(item.href);
              const expanded = openDropdown === item.label;

              return (
                <div
                  key={item.label}
                  ref={(el) => { dropdownRefs.current[item.label] = el; }}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => item.children && setOpenDropdown(null)}
                >
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      aria-current={current ? "page" : undefined}
                      onClick={() => setOpenDropdown(null)}
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-tint ${
                        current
                          ? "text-primary font-semibold"
                          : "text-prose hover:text-primary"
                      } ${item.children ? "pr-1" : ""}`}
                    >
                      {item.label}
                    </Link>

                    {item.children && (
                      <button
                        type="button"
                        aria-expanded={expanded}
                        aria-haspopup="true"
                        aria-label={`${expanded ? "Hide" : "Show"} ${item.label} menu`}
                        onClick={() => setOpenDropdown(expanded ? null : item.label)}
                        className="p-2 rounded-lg text-prose hover:text-primary hover:bg-tint transition-colors"
                      >
                        <ChevronDown
                          size={12}
                          className={`opacity-60 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                        />
                      </button>
                    )}
                  </div>

                  {item.children && expanded && (
                    <div className="absolute top-full left-0 pt-2">
                      <ul className="w-[240px] bg-white border border-line rounded-xl shadow-lifted p-2 list-none m-0">
                        {item.children.map((subitem) => (
                          <li key={subitem.label}>
                            <Link
                              href={subitem.href}
                              aria-current={pathname === subitem.href ? "page" : undefined}
                              onClick={() => setOpenDropdown(null)}
                              className={`block px-3 py-2.5 text-note font-medium hover:bg-tint rounded-lg transition-all duration-150 ${
                                pathname === subitem.href
                                  ? "text-primary font-semibold bg-tint"
                                  : "text-prose hover:text-primary"
                              }`}
                            >
                              {subitem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/search"
              aria-label="Search the site"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-prose transition-colors hover:bg-tint hover:text-primary"
            >
              <Search size={17} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-note font-medium bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-200 hover:shadow-glow"
            >
              Get in touch
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden relative z-10 -mr-2 p-2.5 text-ink"
            onClick={() => (mobileMenuOpen ? closeMenu() : setMobileMenuOpen(true))}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile Nav — must live outside <header>: its backdrop-filter makes the
          header the containing block for fixed descendants, which trapped the
          overlay inside the 72px bar. */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-0 h-dvh bg-white z-40 lg:hidden"
          >
            <div className="h-full flex flex-col px-6 pt-24 pb-8 overflow-y-auto">
              <nav className="flex flex-col flex-1">
                {NAVIGATION.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="border-b border-accent-soft"
                  >
                    {item.children ? (
                      <>
                        <div className="flex items-center justify-between">
                          <Link
                            href={item.href}
                            aria-current={isCurrent(item.href) ? "page" : undefined}
                            className={`flex-1 py-3 px-2 text-xl font-semibold tracking-tight ${
                              isCurrent(item.href) ? "text-primary" : "text-ink"
                            }`}
                            onClick={closeMenu}
                          >
                            {item.label}
                          </Link>
                          <button
                            className="p-3 -mr-2 text-subtle"
                            onClick={() => setOpenSubmenu(openSubmenu === item.label ? null : item.label)}
                            aria-label={`${openSubmenu === item.label ? "Collapse" : "Expand"} ${item.label}`}
                            aria-expanded={openSubmenu === item.label}
                          >
                            <ChevronDown
                              size={20}
                              className={`transition-transform duration-200 ${openSubmenu === item.label ? "rotate-180" : ""}`}
                            />
                          </button>
                        </div>
                        <AnimatePresence initial={false}>
                          {openSubmenu === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 pb-3 flex flex-col">
                                {item.children.map((subitem) => (
                                  <Link
                                    key={subitem.label}
                                    href={subitem.href}
                                    aria-current={pathname === subitem.href ? "page" : undefined}
                                    className={`block py-2.5 text-sm hover:text-primary ${
                                      pathname === subitem.href
                                        ? "font-semibold text-primary"
                                        : "text-muted"
                                    }`}
                                    onClick={closeMenu}
                                  >
                                    {subitem.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        aria-current={isCurrent(item.href) ? "page" : undefined}
                        className={`block py-3 px-2 text-xl font-semibold tracking-tight ${
                          isCurrent(item.href) ? "text-primary" : "text-ink"
                        }`}
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>
              <div className="pt-6 border-t border-line flex flex-col gap-3">
                <Link
                  href="/search"
                  onClick={closeMenu}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-line py-3.5 text-sm font-medium text-prose transition-colors hover:border-primary hover:text-primary"
                >
                  <Search size={16} aria-hidden="true" />
                  Search
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block w-full text-center py-3.5 bg-primary text-white rounded-xl font-medium text-sm hover:bg-primary-dark transition-colors"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
