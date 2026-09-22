import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "link";
  className?: string;
  icon?: boolean;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  icon = false,
}: CTAButtonProps) {
  const base = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark px-7 py-3.5 text-sm hover:shadow-glow hover:-translate-y-[1px]",
    secondary: "border border-line bg-white text-ink hover:border-primary hover:bg-tint px-7 py-3.5 text-sm",
    outline: "border border-line bg-transparent text-prose hover:text-primary hover:border-primary px-7 py-3.5 text-sm",
    link: "text-primary hover:text-primary-dark p-0 text-sm",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {icon && <ArrowRight className="ml-2 h-4 w-4" />}
    </Link>
  );
}
