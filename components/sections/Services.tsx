import {
  Globe,
  LayoutDashboard,
  Smartphone,
  Workflow,
  Wrench,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const WHATSAPP_NUMBER = "5592984337079";

type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  deliverables: string[];
  idealFor: string;
};

// Para editar os serviços, basta mexer neste array — o layout se adapta.
const services: Service[] = [
  {
    id: "sites",
    icon: Globe,
    title: "Sites e landing pages",
    description:
      "Páginas rápidas, responsivas e pensadas para converter: apresentação de empresa, serviço ou produto com formulário e WhatsApp integrados.",
    deliverables: ["Design responsivo", "SEO básico", "Domínio e publicação"],
    idealFor: "Profissionais liberais, lojas e pequenas empresas",
  },
  {
    id: "sistemas",
    icon: LayoutDashboard,
    title: "Sistemas web sob medida",
    description:
      "Painéis administrativos, cadastros, controle de acesso e relatórios feitos para o fluxo real do seu negócio — sem depender de planilha.",
    deliverables: ["Login e permissões", "Dashboards e relatórios", "Banco de dados"],
    idealFor: "Empresas que precisam organizar uma operação",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Aplicativos mobile",
    description:
      "Apps para Android e iOS que conversam com o seu sistema, para equipe de campo, atendimento ou clientes.",
    deliverables: ["Android e iOS", "Integração com API", "Publicação nas lojas"],
    idealFor: "Negócios com equipe externa ou atendimento móvel",
  },
  {
    id: "automacoes",
    icon: Workflow,
    title: "Automações e integrações",
    description:
      "Conecto CRM, WhatsApp, planilhas, e-mail e sistemas internos para que tarefas repetitivas aconteçam sozinhas.",
    deliverables: ["n8n e webhooks", "Integração com CRM", "Alertas e relatórios automáticos"],
    idealFor: "Equipes que perdem tempo com retrabalho manual",
  },
  {
    id: "manutencao",
    icon: Wrench,
    title: "Manutenção e evolução",
    description:
      "Correção de bugs, novas funcionalidades e melhorias de desempenho em sistemas que já existem — inclusive os que outra pessoa fez.",
    deliverables: ["Diagnóstico técnico", "Novas funcionalidades", "Atualizações de segurança"],
    idealFor: "Quem já tem um sistema e precisa de suporte",
  },
];

function whatsappLink(service: string) {
  const text = `Olá João! Vi seu site e tenho interesse em: ${service}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function Services() {
  return (
    <section
      id="services"
      className="atlas-section atlas-grid px-6 py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px]">
        <p className="atlas-kicker">02 / Serviços</p>
        <h2 className="atlas-display atlas-section-title mt-5">
          Serviços para
          <br />
          <span className="text-blue-500">tirar do papel.</span>
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
          Trabalho como desenvolvedor freelancer em Manaus, atendendo
          presencialmente ou remoto. Cada serviço começa com uma conversa
          rápida para entender o problema — o orçamento vem depois, sem
          compromisso.
        </p>

        <div className="mt-16 grid gap-px border border-blue-400/15 bg-blue-400/15 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                className="group flex flex-col bg-[#030b14] p-8 transition hover:bg-[#071528]"
              >
                <div className="flex items-start justify-between">
                  <Icon className="text-blue-400" size={28} aria-hidden="true" />
                  <span className="font-mono text-xs font-bold tracking-[0.2em] text-blue-400/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-10 text-lg font-black uppercase tracking-[-0.02em] text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {service.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="border border-blue-400/15 bg-blue-950/20 px-3 py-1.5 text-xs text-slate-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                  Ideal para: <span className="text-slate-400">{service.idealFor}</span>
                </p>

                <a
                  href={whatsappLink(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 pt-8 text-xs font-bold uppercase tracking-[0.14em] text-blue-300 transition group-hover:text-white"
                >
                  Pedir orçamento <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </article>
            );
          })}

          <div className="flex flex-col justify-between bg-blue-600 p-8 text-white">
            <div>
              <MessageCircle size={28} aria-hidden="true" />
              <h3 className="mt-10 text-lg font-black uppercase tracking-[-0.02em]">
                Não achou o seu caso?
              </h3>
              <p className="mt-3 text-sm leading-6 text-blue-100">
                Me conta o que você precisa resolver. Se eu não for a pessoa
                certa, eu te digo — e indico um caminho.
              </p>
            </div>
            <a
              href={whatsappLink("um projeto diferente")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 border border-white/40 px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] transition hover:bg-white hover:text-blue-700"
            >
              Chamar no WhatsApp <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
