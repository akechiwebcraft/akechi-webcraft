export interface NavItem {
  label: string;
  href: string;
  /** Optional dropdown. Navbar renders a keyboard-accessible menu when present. */
  children?: { label: string; href: string }[];
}

export const NAVIGATION: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  // Services links straight to the index, which lists every practice as a card.
  // The individual services also stay listed in the footer.
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Resources", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
