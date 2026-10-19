import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="atlas-grid relative min-h-screen overflow-hidden bg-[#02070d] px-6 pb-16 pt-32 text-white lg:px-10 lg:pt-40"
    >
      <div className="atlas-grid-fade absolute inset-0" />
      <div className="relative z-10 mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[1fr_0.62fr] lg:items-end">
        <div>
          <p className="atlas-kicker">Portfólio / 2026 — Full Stack & Mobile</p>
          <h1 className="atlas-display mt-8 max-w-[980px] text-[clamp(3.8rem,9vw,9.2rem)]">
            João Victor
            <span className="block text-blue-500">Pinheiro</span>
            Magalhães
          </h1>
          <div className="mt-10 h-1 w-36 bg-blue-600" />
          <h2 className="mt-7 font-mono text-sm font-bold uppercase tracking-[0.22em] text-slate-300 sm:text-base">
            Full Stack & Mobile Developer
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            Transformo estudo, lógica e organização em aplicações reais — da interface ao banco de dados.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#services"
            className="atlas-button-primary"
          >
            Ver serviços <ArrowDown size={16} aria-hidden="true" />
          </a>
          <a
            href="#projects"
            className="atlas-button-secondary"
          >
            Explorar projetos <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        </div>

        <aside className="atlas-panel relative hidden min-h-[470px] overflow-hidden p-8 lg:block" aria-label="Resumo profissional">
          <div className="absolute -right-16 top-24 h-64 w-64 rounded-full bg-blue-600/30 blur-3xl" />
          <div className="relative flex h-full flex-col justify-between">
            <div className="flex items-center justify-between border-b border-blue-400/20 pb-5 font-mono text-xs text-blue-300">
              <span>ATLAS.SYSTEM</span><span>STATUS: ONLINE</span>
            </div>
            <div className="py-14">
              <span className="text-[10rem] font-black leading-none tracking-[-0.1em] text-blue-600/90">A</span>
              <p className="-mt-3 text-xs font-bold uppercase tracking-[0.34em] text-slate-400">Código que vira solução</p>
            </div>
            <div className="grid grid-cols-2 border-t border-blue-400/20 pt-5 font-mono text-xs uppercase tracking-wider text-slate-500">
              <span>Next.js / React</span><span className="text-right">PHP / MySQL</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
