import { Mail, Code, User, FileText, MessageCircle } from "lucide-react";
import { withBasePath } from "@/lib/site";

export default function Contact() {
  return (
    <section
      id="contact"
      className="atlas-section atlas-grid px-6 py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px]">
        <p className="atlas-kicker">06 / Contato</p>
        <h2 className="atlas-display atlas-section-title mt-5">Vamos construir<br/><span className="text-blue-500">algo real.</span></h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
          Estou sempre aberto a novas oportunidades, projetos e
          colaborações. Fique à vontade para entrar em contato.
        </p>

        <div className="mt-16 grid gap-px border border-blue-400/15 bg-blue-400/15 md:grid-cols-2 xl:grid-cols-5">

          {/* E-mail */}
          <a
            href="mailto:jv43291@gmail.com"
            className="group bg-[#030b14] p-7 transition hover:bg-[#071528]"
          >
            <Mail className="mb-10 text-blue-400" size={28} />

            <h3 className="font-black uppercase tracking-[-0.02em]">
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
            className="group bg-[#030b14] p-7 transition hover:bg-[#071528]"
          >
            <Code className="mb-10 text-blue-400" size={28} />

            <h3 className="font-black uppercase tracking-[-0.02em]">
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
            className="group bg-[#030b14] p-7 transition hover:bg-[#071528]"
          >
            <User className="mb-10 text-blue-400" size={28} />

            <h3 className="font-black uppercase tracking-[-0.02em]">
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
            className="group bg-[#030b14] p-7 transition hover:bg-[#071528]"
          >
            <MessageCircle className="mb-10 text-blue-400" size={28} />

            <h3 className="font-black uppercase tracking-[-0.02em]">
              WhatsApp
            </h3>

            <p className="mt-3 text-sm text-slate-500 group-hover:text-slate-300">
              Disponível para contato profissional
            </p>
          </a>

          {/* Currículo */}
<a
  href={withBasePath("/curriculo/Joao_Victor_Pinheiro_Magalhaes_CV.pdf")}
  download
  className="group bg-[#030b14] p-7 transition hover:bg-[#071528]"
>
  <FileText className="mb-10 text-blue-400" size={28} />

  <h3 className="font-black uppercase tracking-[-0.02em]">
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
