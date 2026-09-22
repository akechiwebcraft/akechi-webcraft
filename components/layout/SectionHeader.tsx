interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({ eyebrow, title, description, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="text-sm font-bold uppercase tracking-wide text-primary mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg leading-8 text-subtle">
          {description}
        </p>
      )}
    </div>
  );
}
