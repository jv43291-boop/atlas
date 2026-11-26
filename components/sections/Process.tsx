import { MessageSquare, FileCheck, Layers, LifeBuoy, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

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
        <SectionTitle
          kicker="03 / Como trabalho"
          line1="Sem surpresa"
          line2="no meio do caminho."
          intro={
            <>
              Os dois medos de quem contrata um desenvolvedor são &ldquo;vai
              sumir&rdquo; e &ldquo;vai custar o quê&rdquo;. Meu processo existe
              pra responder os dois antes de você gastar um real.
            </>
          }
        />

        {/* Linha do tempo: o fio se preenche conforme a rolagem e cada etapa acende ao ser alcançada. */}
        <ol className="pf-timeline mt-20">
          <span className="pf-timeline__rail" aria-hidden="true" />
          <span className="pf-timeline__fill" data-progress aria-hidden="true" />
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="pf-timeline__step" data-step>
                <span className="pf-timeline__node" aria-hidden="true">
                  <Icon size={18} />
                </span>
                <span className="pf-timeline__n">{String(index + 1).padStart(2, "0")}</span>
                <div className="pf-timeline__body">
                  <h3 className="pf-card__title text-white">{step.title}</h3>
                  <p className="mt-3 max-w-xl leading-7 text-slate-400">{step.description}</p>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mt-24 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div data-reveal>
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
              data-umami-event="whatsapp"
              data-umami-event-origem="como-trabalho"
              className="atlas-button-primary mt-8"
              data-magnetic
            >
              Marcar a conversa <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="pf-stagger grid gap-4 sm:grid-cols-2" data-reveal>
            {formats.map((format) => (
              <div key={format.title} className="pf-spot pf-card p-7" data-spotlight="flat">
                <h4 className="pf-card__title text-white">
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
