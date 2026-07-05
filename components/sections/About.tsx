import Image from "next/image";
import InfoCard from "@/components/ui/InfoCard";

export default function About() {
  return (
    <section
      id="about"
      className="bg-zinc-900 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold">
          Sobre Mim
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:items-center">
          <div className="flex justify-center">
            <div className="overflow-hidden rounded-3xl border border-zinc-700 shadow-xl shadow-blue-500/10 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/30">
              <Image
                src="/images/profile.jpg"
                alt="Foto de João Victor"
                width={320}
                height={320}
                priority
                className="h-80 w-80 object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-lg leading-8 text-zinc-300">
              Olá! Meu nome é{" "}
              <span className="font-semibold text-blue-400">
                João Victor Pinheiro Magalhães
              </span>.
            </p>

            <p className="mt-6 leading-8 text-zinc-400">
              Encontrei na programação um ambiente onde lógica,
              organização e clareza transformam ideias em soluções.
              Foi nessa combinação que descobri uma profissão com a qual realmente me identifiquei.
            </p>

            <p className="mt-6 leading-8 text-zinc-400">
              Atualmente estudo Desenvolvimento Full Stack e Mobile,
              buscando evoluir continuamente através de projetos reais,
              aprendizado constante e dedicação diária.
            </p>

            <p className="mt-6 leading-8 text-zinc-400">
              O Projeto Atlas representa minha evolução como desenvolvedor
              e meu compromisso em criar aplicações modernas, organizadas
              e com foco na melhor experiência para o usuário.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <InfoCard
            icon="💻"
            title="Projetos"
            description="Construindo aplicações reais para desenvolver experiência prática."
          />

          <InfoCard
            icon="📚"
            title="Aprendizado"
            description="Evoluindo continuamente em tecnologias Full Stack e Mobile."
          />

          <InfoCard
            icon="🚀"
            title="Objetivo"
            description="Atuar como Desenvolvedor Full Stack criando soluções modernas."
          />

          <InfoCard
            icon="🎯"
            title="Compromisso"
            description="Código limpo, organização e evolução constante todos os dias."
          />
        </div>
      </div>
    </section>
  );
}