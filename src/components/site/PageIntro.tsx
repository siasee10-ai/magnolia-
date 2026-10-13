export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-3xl px-5 pb-12 pt-20 text-center fade-up">
      <p className="eyebrow-pink">{eyebrow}</p>
      <h1 className="mt-4 text-5xl font-serif text-gate-blue md:text-6xl">{title}</h1>
      <div className="gate-rule mx-auto mt-6 max-w-[10rem]"><span className="text-bougainvillea text-sm">🌸</span></div>
      {children && <div className="mt-6 text-lg leading-relaxed text-muted-foreground">{children}</div>}
    </section>
  );
}
