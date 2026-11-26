type SectionTitleProps = {
  kicker: string;
  line1: string;
  line2: string;
  intro?: React.ReactNode;
};

/**
 * Título de seção: a primeira linha em sans pesada, a segunda em serifada
 * itálica. Cada linha sobe de dentro de uma máscara quando a seção aparece.
 */
export default function SectionTitle({ kicker, line1, line2, intro }: SectionTitleProps) {
  return (
    <header className="pf-head">
      <p className="atlas-kicker" data-reveal>
        {kicker}
      </p>
      <h2 className="pf-title" data-reveal>
        <span className="pf-line"><span>{line1}</span></span>
        <span className="pf-line pf-line--serif"><span>{line2}</span></span>
      </h2>
      {intro && (
        <p className="pf-intro" data-reveal data-reveal-d="2">
          {intro}
        </p>
      )}
    </header>
  );
}
