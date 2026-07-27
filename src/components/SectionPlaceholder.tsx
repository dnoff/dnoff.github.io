type SectionPlaceholderProps = {
  id: string;
  title: string;
  description: string;
};

export function SectionPlaceholder({ id, title, description }: SectionPlaceholderProps) {
  return (
    <section id={id} className="section-padding scroll-mt-24" aria-labelledby={`${id}-heading`}>
      <div className="container-site">
        <div className="glass-panel p-8 sm:p-10">
          <p className="badge mb-4">Coming next</p>
          <h2 id={`${id}-heading`} className="heading-section">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-text-muted">{description}</p>
        </div>
      </div>
    </section>
  );
}
