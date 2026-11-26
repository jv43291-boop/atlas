import { Mail, Code, User, FileText, MessageCircle, MapPin } from "lucide-react";
import { withBasePath, GOOGLE_BUSINESS_URL } from "@/lib/site";

export default function Contact() {
  return (
    <section
      id="contact"
      className="atlas-section atlas-grid px-6 py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px]">
        <p className="atlas-kicker" data-reveal>06 / Contato</p>
        <h2 className="pf-title pf-title--xl" data-reveal>
          <span className="pf-line"><span>Vamos construir</span></span>{" "}
          <span className="pf-line pf-line--serif"><span>algo real.</span></span>
        </h2>

        <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <p className="pf-intro" data-reveal data-reveal-d="1">
            Me conta o que você precisa resolver. Respondo no WhatsApp e, se
            fizer sentido, marcamos uma conversa sem custo.
          </p>
          <div data-reveal data-reveal-d="2">
            <a
              href="https://wa.me/5592984337079?text=Olá%20João!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade."
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="whatsapp"
              data-umami-event-origem="contato-cta"
              data-magnetic
              className="pf-orb"
            >
              <span className="pf-orb__label">Chamar no<br />WhatsApp</span>
              <MessageCircle size={22} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="pf-stagger mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6" data-reveal>

          {/* E-mail */}
          <a
            href="mailto:jv43291@gmail.com"
            data-umami-event="email"
            className="pf-spot pf-card group p-7"
            data-spotlight
          >
            <Mail className="mb-10 text-blue-400" size={28} />

            <h3 className="pf-card__title">
              E-mail
            </h3>

            <p className="mt-3 break-all text-sm text-slate-500 group-hover:text-slate-300">
              jv43291@gmail.com
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/jv43291-boop"
            target="_blank"
            rel="noopener noreferrer"
            className="pf-spot pf-card group p-7"
            data-spotlight
          >
            <Code className="mb-10 text-blue-400" size={28} />

            <h3 className="pf-card__title">
              GitHub
            </h3>

            <p className="mt-3 break-all text-sm text-slate-500 group-hover:text-slate-300">
              github.com/jv43291-boop
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/joão-victor-pinheiro-magalhães-246060226"
            target="_blank"
            rel="noopener noreferrer"
            className="pf-spot pf-card group p-7"
            data-spotlight
          >
            <User className="mb-10 text-blue-400" size={28} />

            <h3 className="pf-card__title">
              LinkedIn
            </h3>

            <p className="mt-3 break-all text-sm text-slate-500 group-hover:text-slate-300">
              linkedin.com/in/joão-victor-pinheiro-magalhães
            </p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/5592984337079?text=Olá%20João!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade."
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="whatsapp"
            data-umami-event-origem="contato"
            className="pf-spot pf-card group p-7"
            data-spotlight
          >
            <MessageCircle className="mb-10 text-blue-400" size={28} />

            <h3 className="pf-card__title">
              WhatsApp
            </h3>

            <p className="mt-3 text-sm text-slate-500 group-hover:text-slate-300">
              Disponível para contato profissional
            </p>
          </a>

          {/* Google */}
          <a
            href={GOOGLE_BUSINESS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="google-perfil"
            className="pf-spot pf-card group p-7"
            data-spotlight
          >
            <MapPin className="mb-10 text-blue-400" size={28} />

            <h3 className="pf-card__title">
              Google
            </h3>

            <p className="mt-3 text-sm text-slate-500 group-hover:text-slate-300">
              Perfil e avaliações no Google
            </p>
          </a>

          {/* Currículo */}
<a
  href={withBasePath("/curriculo/Joao_Victor_Pinheiro_Magalhaes_CV.pdf")}
  data-umami-event="curriculo"
  download
  className="pf-spot pf-card group p-7"
            data-spotlight
>
  <FileText className="mb-10 text-blue-400" size={28} />

  <h3 className="pf-card__title">
    Currículo
  </h3>

  <p className="mt-3 text-sm text-slate-500 group-hover:text-slate-300">
    Clique para baixar o PDF
  </p>
</a>

        </div>

      </div>
    </section>
  );
}
