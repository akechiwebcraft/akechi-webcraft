interface PageShellProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function PageShell({ children, className = "", id }: PageShellProps) {
  return (
    <section id={id} className={`py-10 md:py-14 lg:py-16 px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {children}
      </div>
    </section>
  );
}
