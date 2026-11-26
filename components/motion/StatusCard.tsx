"use client";

import { useEffect, useState } from "react";

const WORDS = ["sistemas web", "sites", "aplicativos", "automações"];

function horaManaus() {
  return new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Manaus",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());
}

/**
 * Cartão do hero: disponibilidade, hora local de Manaus (relógio real) e
 * uma palavra que troca devagar. A troca usa transition (interrompível),
 * e com prefers-reduced-motion vira só um fade.
 */
export default function StatusCard() {
  const [i, setI] = useState(0);
  const [hora, setHora] = useState<string | null>(null);

  useEffect(() => {
    const primeira = window.setTimeout(() => setHora(horaManaus()), 0);
    const relogio = window.setInterval(() => setHora(horaManaus()), 15_000);
    const troca = window.setInterval(() => setI((n) => (n + 1) % WORDS.length), 2600);
    return () => {
      window.clearTimeout(primeira);
      window.clearInterval(relogio);
      window.clearInterval(troca);
    };
  }, []);

  return (
    <aside className="pf-status" aria-label="Resumo profissional" data-spotlight="flat">
      <div className="pf-status__top">
        <span className="pf-status__live">
          <span className="pf-pulse" aria-hidden="true" />
          Aberto a novos projetos
        </span>
        <span className="pf-status__time" aria-label="Hora em Manaus">
          MAO {hora ?? "--:--"}
        </span>
      </div>

      <div className="pf-status__body">
        <p className="pf-status__label">Agora construindo</p>
        <p className="pf-rotator" aria-live="off">
          <span className="sr-only">{WORDS.join(", ")}</span>
          {WORDS.map((w, n) => (
            <span
              key={w}
              aria-hidden="true"
              className={`pf-rotator__word ${n === i ? "is-on" : n === (i - 1 + WORDS.length) % WORDS.length ? "is-off" : ""}`}
            >
              {w}
            </span>
          ))}
        </p>
        <p className="pf-status__hint">Problema que vira sistema.</p>
      </div>

      <dl className="pf-status__grid">
        <div><dt>Base</dt><dd>Manaus, AM</dd></div>
        <div><dt>Atende</dt><dd>Presencial e remoto</dd></div>
        <div><dt>Frentes</dt><dd>Web · Mobile</dd></div>
        <div><dt>Também</dt><dd>Sistemas · Automações</dd></div>
      </dl>
    </aside>
  );
}
