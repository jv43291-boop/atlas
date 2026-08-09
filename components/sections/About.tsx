import Image from "next/image";
import InfoCard from "@/components/ui/InfoCard";

export default function About() {
  return (
    <section
      id="about"
      className="atlas-section px-6 py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px]">
        <p className="atlas-kicker">01 / Sobre</p>
        <h2 className="atlas-display atlas-section-title mt-5">Lógica, clareza<br/><span className="text-blue-500">e evolução.</span></h2>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.7fr_1fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-5 -top-5 h-24 w-24 border-l border-t border-blue-500/70" />
            <div className="relative aspect-[4/5] overflow-hidden border border-blue-400/25 bg-[#06101d]">
              <Image
                src="/images/profile.jpg"
                alt="Foto de João Victor"
                fill
                sizes="(min-width: 1024px) 420px, 90vw"
                className="object-cover grayscale-[20%]"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 border border-blue-400/20 bg-[#02070d] px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-blue-300">Full Stack / Mobile</div>
          </div>

          <div className="max-w-2xl">
            <p className="text-xl leading-9 text-slate-200">
              Olá! Meu nome é{" "}
              <span className="font-bold text-white">
                João Victor Pinheiro Magalhães
              </span>.
            </p>

            <p className="mt-7 leading-8 text-slate-400">
              Encontrei na programação um ambiente onde lógica,
              organização e clareza transformam ideias em soluções.
              Foi nessa combinação que descobri uma profissão com a qual realmente me identifiquei.
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              Atualmente estudo Desenvolvimento Full Stack e Mobile,
              buscando evoluir continuamente através de projetos reais,
              aprendizado constante e dedicação diária.
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              O Projeto Atlas representa minha evolução como desenvolvedor
              e meu compromisso em criar aplicações modernas, organizadas
              e com foco na melhor experiência para o usuário.
            </p>
          </div>
        </div>

        <div className="mt-24 grid border-l border-t border-blue-400/15 md:grid-cols-2 lg:grid-cols-4">
          <InfoCard
            icon="01"
            title="Projetos"
            description="Construindo aplicações reais para desenvolver experiência prática."
          />

          <InfoCard
            icon="02"
            title="Aprendizado"
            description="Evoluindo continuamente em tecnologias Full Stack e Mobile."
          />

          <InfoCard
            icon="03"
            title="Objetivo"
            description="Atuar como Desenvolvedor Full Stack criando soluções modernas."
          />

          <InfoCard
            icon="04"
            title="Compromisso"
            description="Código limpo, organização e evolução constante todos os dias."
          />
        </div>
      </div>
    </section>
  );
}
