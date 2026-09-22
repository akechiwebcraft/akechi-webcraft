import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = false }: CardProps) {
  const hoverStyles = hover
    ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-float hover:border-[rgba(0,120,212,0.3)]"
    : "";

  return (
    <div
      className={`rounded-2xl border border-line bg-white shadow-card ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
