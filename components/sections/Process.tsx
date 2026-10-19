import { MessageSquare, FileCheck, Layers, LifeBuoy, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5592984337079?text=" +
  encodeURIComponent("Olá João! Quero conversar sobre um projeto.");

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: MessageSquare,
    title: "Conversa",
    description:
      "Uma reunião rápida (WhatsApp, chamada ou presencial em Manaus) pra entender o problema, o que já existe e o que precisa mudar. Sem custo.",
  },
  {
    icon: FileCheck,
    title: "Proposta fechada",
    description:
      "Você recebe por escrito o escopo, as etapas, o prazo e o valor. Só começo depois do seu ok — e o que não está na proposta é combinado antes, não cobrado depois.",
  },
  {
    icon: Layers,
    title: "Entrega em etapas",
    description:
      "O projeto é dividido em partes que você consegue testar conforme ficam prontas. Você acompanha o andamento e ajusta o rumo cedo, não no fim.",
  },
  {
    icon: LifeBuoy,
    title: "Publicação e suporte",
    description:
      "Coloco no ar e fico disponível pra ajustes. Se você comprou o sistema, recebe código, acessos e documentação; se assinou, eu hospedo, atualizo e cuido do servidor por uma mensalidade.",
  },
];

// Formatos de contratação. Para incluir valores de referência, adicione um
// campo `price: "a partir de R$ ..."` e mostre-o abaixo do título.
const formats = [
  {
    title: "Projeto fechado",
    description:
      "Escopo, prazo e valor definidos antes de começar; o sistema e o código ficam com você. Ideal para quem tem equipe pra operar.",
  },
  {
    title: "Assinatura mensal",
    description:
      "Você usa o sistema e eu hospedo, atualizo e dou suporte por uma mensalidade. Sem servidor, sem equipe técnica, sem dor de cabeça.",
  },
  {
    title: "Manutenção mensal",
    description:
      "Horas por mês para correções, melhorias e suporte em um sistema que já existe — seu ou feito por outra pessoa.",
  },
  {
    title: "Por hora",
    description:
      "Para tarefas pequenas, diagnósticos e consultorias pontuais em que não faz sentido fechar um projeto.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="atlas-section px-6 py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px]">
        <p className="atlas-kicker">03 / Como trabalho</p>
        <h2 className="atlas-display atlas-section-title mt-5">
          Sem surpresa
          <br />
          <span className="text-blue-500">no meio do caminho.</span>
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
          Os dois medos de quem contrata um desenvolvedor são &ldquo;vai
          sumir&rdquo; e &ldquo;vai custar o quê&rdquo;. Meu processo existe
          pra responder os dois antes de você gastar um real.
        </p>

        <ol className="mt-16 grid gap-px border border-blue-400/15 bg-blue-400/15 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="bg-[#030b14] p-8 transition hover:bg-[#071528]">
                <div className="flex items-start justify-between">
                  <Icon className="text-blue-400" size={28} aria-hidden="true" />
                  <span className="font-mono text-xs font-bold tracking-[0.2em] text-blue-400/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-10 text-lg font-black uppercase tracking-[-0.02em] text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-blue-400">
              Formatos de contratação
            </h3>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              O valor depende do tamanho do projeto, e eu só passo número
              depois de entender o que precisa ser feito. Mas o formato você
              escolhe desde o início.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="atlas-button-primary mt-8"
            >
              Marcar a conversa <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="grid gap-px border border-blue-400/15 bg-blue-400/15 sm:grid-cols-2">
            {formats.map((format) => (
              <div key={format.title} className="bg-[#030b14] p-7">
                <h4 className="font-black uppercase tracking-[-0.02em] text-white">
                  {format.title}
                </h4>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {format.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
