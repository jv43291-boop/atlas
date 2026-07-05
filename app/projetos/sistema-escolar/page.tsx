import Link from "next/link";
import ProjectHero from "@/components/project/ProjectHero";

export default function SistemaEscolarPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      <ProjectHero
        badge="🟢 Primeiro Projeto"
        title="Sistema Escolar"
        subtitle="Sistema de gerenciamento escolar desenvolvido utilizando PHP seguindo a arquitetura MVC. O projeto permite gerenciar alunos, professores, disciplinas e notas através de um CRUD completo integrado ao MySQL."
        image="/images/projects/escolar/dashboard.png"
      />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">

          <h2 className="text-3xl font-bold">
            Sobre o Projeto
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-zinc-400">
            Este foi o primeiro sistema completo que desenvolvi utilizando
            arquitetura MVC. Durante sua construção aprendi conceitos como
            separação de responsabilidades, comunicação com banco de dados
            utilizando PDO e organização de aplicações web em PHP.
          </p>

        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">

          <Link
            href="/"
            className="inline-flex rounded-xl border border-zinc-700 px-6 py-3 transition hover:border-blue-500 hover:text-blue-400"
          >
            ← Voltar ao Atlas
          </Link>

        </div>
      </section>

    </main>
  );
}