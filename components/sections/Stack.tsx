import SectionTitle from "@/components/ui/SectionTitle";

const frontend = ["Next.js", "React", "Vue 3", "TypeScript", "Tailwind CSS", "Bootstrap 5"];
const backend = ["PHP 8", "MySQL", "APIs REST", "GraphQL", "Docker"];
const ferramentas = [
  "Git / GitHub",
  "GitHub Actions (CI)",
  "Testes automatizados",
  "n8n",
  "Integrações (WhatsApp, Pix, CRM)",
];

const groups = [
  { title: "01 — Front-end", items: frontend },
  { title: "02 — Back-end", items: backend },
  { title: "03 — Entrega e integrações", items: ferramentas },
];

// Faixa infinita: a lista é desenhada duas vezes e anda metade da largura,
// então o laço não tem emenda. A cópia é escondida de leitores de tela.
function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const row = (hidden: boolean) => (
    <ul className="pf-marquee__row" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item}>
          <span>{item}</span>
          <span className="pf-marquee__sep" aria-hidden="true">✳</span>
        </li>
      ))}
    </ul>
  );
  return (
    <div className={`pf-marquee ${reverse ? "pf-marquee--rev" : ""}`}>
      <div className="pf-marquee__track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

export default function Stack() {
  return (
    <section id="stack" className="atlas-section atlas-grid py-28 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <SectionTitle
          kicker="04 / Stack"
          line1="O que eu uso"
          line2="pra entregar."
          intro={
            <>
              Tecnologias atuais, com manutenção fácil e sem prender você a um
              fornecedor. Se o seu sistema já existe em outra stack, eu avalio
              antes de propor qualquer troca.
            </>
          }
        />
      </div>

      <div className="pf-marquees mt-16" data-reveal>
        <Marquee items={[...frontend, ...backend]} />
        <Marquee items={ferramentas} reverse />
      </div>

      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="pf-stagger mt-16 grid gap-4 md:grid-cols-3" data-reveal>
          {groups.map((g) => (
            <div key={g.title} className="pf-spot pf-card p-8" data-spotlight="flat">
              <h3 className="mb-8 font-mono text-xs font-bold uppercase tracking-[0.22em] text-blue-400">
                {g.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((tech) => (
                  <span key={tech} className="pf-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
