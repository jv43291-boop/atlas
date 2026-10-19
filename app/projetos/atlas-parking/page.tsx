import type { Metadata } from "next";
import Link from "next/link";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectTechnologies from "@/components/project/ProjectTechnologies";
import ProjectFeatures from "@/components/project/ProjectFeatures";
import ProjectGallery from "@/components/project/ProjectGallery";

export const metadata: Metadata = {
  title: "Atlas Parking — Plataforma SaaS de Gestão de Estacionamentos",
  description:
    "Conheça o Atlas Parking: plataforma SaaS multiempresa para estacionamentos, com leitura de placas (LPR), mensalistas, cobrança com Pix automático, várias unidades, auditoria, LGPD e 2FA.",
  alternates: { canonical: "/projetos/atlas-parking" },
  openGraph: {
    title: "Atlas Parking | João Victor Magalhães",
    description:
      "Plataforma SaaS multiempresa em PHP e MySQL para gestão de estacionamentos, com LPR, cobrança, Pix automático e auditoria.",
    url: "/projetos/atlas-parking",
    images: ["/images/projects/atlas-parking/painel.png"],
  },
};

const highlights = [
  {
    title: "Operação de portaria",
    description:
      "Entrada e saída manual ou automática pela leitura de placas, vagas por bloco e setor, convites de visitante com janela de horário, reserva de vaga por data e placas monitoradas com bloqueio e alerta.",
  },
  {
    title: "Financeiro",
    description:
      "Tabelas de preço por unidade, pagamento na saída, isenções, caixa e faturamento. Mensalistas com contrato, mensalidade, avisos por e-mail, portal sem login e Pix com QR code e baixa automática via Asaas.",
  },
  {
    title: "Multiempresa e multiunidade",
    description:
      "Cada empresa tem seus dados isolados e pode ter várias unidades (estacionamentos) com vagas, setores, câmeras e painel próprios. Painel da plataforma para criar, suspender e dar suporte a empresas.",
  },
  {
    title: "Segurança e conformidade",
    description:
      "Autenticação com verificação em duas etapas (TOTP), perfis com permissões granulares, sessões revogáveis, trilha de auditoria append-only e ferramentas de LGPD: máscara de dados, exportação e anonimização de titulares.",
  },
];

export default function AtlasParkingPage() {
  return (
    <main id="conteudo" className="project-page min-h-screen">
      <ProjectHero
        badge="⭐ Projeto em destaque · v2.2"
        title="Atlas Parking"
        subtitle="Plataforma SaaS multiempresa para gestão de estacionamentos: portaria integrada a câmeras de leitura de placas, mensalistas e cobrança com Pix automático, várias unidades por empresa, indicadores, auditoria e LGPD — tudo em containers, com testes e deploy automatizados."
        image="/images/projects/atlas-parking/painel.png"
      />

      <section className="px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="text-4xl text-white">Sobre o Projeto</h2>
          <p className="mt-6 max-w-4xl leading-8 text-slate-400">
            O Atlas Parking nasceu como um sistema de controle de acesso e
            cresceu até virar uma plataforma comercial. Hoje ele centraliza a
            operação completa de um estacionamento — portaria, vagas, pessoas,
            veículos, cobrança e relatórios — e serve várias empresas ao mesmo
            tempo, cada uma com suas unidades e seus dados isolados. A
            integração com câmeras LPR é feita por uma API própria, assinada e
            independente do fornecedor, e tarefas como avisos, resumos
            semanais e relatórios mensais rodam num agendador em container.
          </p>
          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            É o projeto em que mais apliquei engenharia de verdade: arquitetura
            em camadas, migrations, testes unitários e de integração, testes de
            navegador no CI, análise estática, versionamento semântico com
            changelog e documentação de instalação, backup, restauração e
            segurança.
          </p>

          <div className="mt-12 grid gap-px border border-blue-400/15 bg-blue-400/15 md:grid-cols-2">
            {highlights.map((item, index) => (
              <div key={item.title} className="bg-[#030b14] p-8">
                <span className="font-mono text-xs font-bold tracking-[0.2em] text-blue-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-lg font-black uppercase tracking-[-0.02em] text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectTechnologies
        title="Tecnologias Utilizadas"
        technologies={[
          "PHP 8.2",
          "MVC próprio",
          "Service Layer",
          "Repository Pattern",
          "MySQL 8.4",
          "Bootstrap 5",
          "JavaScript",
          "API REST (OpenAPI)",
          "Docker",
          "Nginx",
          "Asaas (Pix)",
          "PHPUnit",
          "Playwright",
          "PHPStan",
          "GitHub Actions",
        ]}
      />

      <ProjectFeatures
        title="Principais Funcionalidades"
        features={[
          "Painel com ocupação, fluxo do dia e permanência média",
          "Entrada e saída manual ou automática por leitura de placa (LPR)",
          "Vagas por bloco e setor, reservas por data e convites de visitante",
          "Placas monitoradas com bloqueio e alerta",
          "Cobrança: tabela de preços por unidade, pagamento na saída e caixa",
          "Mensalistas: contratos, mensalidades, avisos por e-mail e portal sem login",
          "Pix com QR code e baixa automática via Asaas",
          "Várias unidades por empresa, cada uma com câmeras e painel próprios",
          "Indicadores, resumo semanal e relatório financeiro mensal (PDF, Excel e e-mail)",
          "Webhooks assinados para integrar outros sistemas",
          "Perfis e permissões granulares, 2FA e sessões revogáveis",
          "Auditoria append-only com estado anterior e novo de cada alteração",
          "LGPD: máscara de dados, exportação e anonimização de titulares",
          "Painel da plataforma para administrar as empresas do SaaS",
          "Agendador em container para tarefas recorrentes",
          "Testes unitários, de integração e de navegador rodando no CI",
        ]}
      />

      <ProjectGallery
        title="Galeria do Projeto"
        items={[
          {
            title: "Painel",
            description: "Ocupação em tempo real, entradas e saídas dos últimos dias e permanência média por setor.",
            image: "/images/projects/atlas-parking/painel.png",
          },
          {
            title: "Registro de entrada",
            description: "Portaria: veículo, dono, vaga livre do tipo certo e setor de destino.",
            image: "/images/projects/atlas-parking/entrada.png",
          },
          {
            title: "Indicadores",
            description: "Fluxo por período, ocupação por bloco e tempo de permanência por setor.",
            image: "/images/projects/atlas-parking/indicadores.png",
          },
          {
            title: "Auditoria",
            description: "Trilha de eventos com responsável, data, IP e os campos que realmente mudaram.",
            image: "/images/projects/atlas-parking/auditoria.png",
          },
          {
            title: "Perfis e permissões",
            description: "Matriz de permissões por perfil, aplicada na hora para quem já está usando o sistema.",
            image: "/images/projects/atlas-parking/perfis.png",
          },
          {
            title: "Integrações LPR",
            description: "Modo automático, credenciais por sistema de câmeras e eventos recebidos de cada câmera.",
            image: "/images/projects/atlas-parking/integracoes.png",
          },
        ]}
      />

      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto flex max-w-[1440px] flex-wrap gap-3">
          <a
            href="https://github.com/jv43291-boop/Atlas-Parking"
            target="_blank"
            rel="noopener noreferrer"
            className="atlas-button-primary"
          >
            Ver código no GitHub
          </a>
          <Link href="/#projects" className="atlas-button-secondary">
            ← Voltar aos projetos
          </Link>
        </div>
      </section>
    </main>
  );
}
