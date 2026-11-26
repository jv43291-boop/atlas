import { ArrowDown, ArrowUpRight } from "lucide-react";
import HeroField from "@/components/motion/HeroField";
import StatusCard from "@/components/motion/StatusCard";

// Cada letra entra com um pequeno atraso. O atraso cresce um pouco menos a
// cada letra, para a linha "chegar" como uma onda e não como um metrônomo.
function Letters({ text, start }: { text: string; start: number }) {
  return (
    <>
      {Array.from(text).map((ch, i) => (
        <span
          key={i}
          className="pf-char"
          aria-hidden="true"
          style={{ "--d": `${Math.round(start + i * 34 - i * i * 0.6)}ms` } as React.CSSProperties}
        >
          {ch === " " ? " " : ch}
        </span>
      ))}
    </>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="pf-hero">
      <HeroField />
      <div className="pf-hero__glow" aria-hidden="true" />

      <div className="pf-hero__inner">
        <div className="pf-hero__main">
          <p className="atlas-kicker pf-enter" style={{ "--d": "80ms" } as React.CSSProperties}>
            Desenvolvedor freelancer · Manaus, AM
          </p>

          <h1 className="pf-name" aria-label="João Victor Pinheiro Magalhães">
            <span className="pf-name__line"><Letters text="João Victor" start={160} /></span>
            <span className="pf-name__line pf-name__line--serif"><Letters text="Pinheiro" start={420} /></span>
            <span className="pf-name__line"><Letters text="Magalhães" start={620} /></span>
          </h1>

          <div className="pf-hero__rule pf-enter" style={{ "--d": "900ms" } as React.CSSProperties} aria-hidden="true" />

          <h2 className="pf-hero__sub pf-enter" style={{ "--d": "980ms" } as React.CSSProperties}>
            Sistemas, sites e automações para pequenas empresas
          </h2>
          <p className="pf-hero__lead pf-enter" style={{ "--d": "1040ms" } as React.CSSProperties}>
            Do orçamento à entrega, com uma pessoa só pra falar: eu desenho,
            construo, publico e mantenho — da tela ao banco de dados.
          </p>

          <div className="pf-hero__cta pf-enter" style={{ "--d": "1100ms" } as React.CSSProperties}>
            <a href="#services" className="atlas-button-primary" data-magnetic>
              Ver serviços <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a href="#projects" className="atlas-button-secondary" data-magnetic>
              Explorar projetos <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="pf-hero__side pf-enter" style={{ "--d": "760ms" } as React.CSSProperties}>
          <StatusCard />
        </div>
      </div>

      <a href="#about" className="pf-scrollcue" aria-label="Rolar para Sobre">
        <span>Role</span>
        <span className="pf-scrollcue__track" aria-hidden="true"><span /></span>
      </a>
    </section>
  );
}
