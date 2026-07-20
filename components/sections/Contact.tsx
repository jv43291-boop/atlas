import { Mail, Code, User, FileText, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-zinc-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <h2 className="text-4xl font-bold">
          Contato
        </h2>

        <p className="mt-4 max-w-3xl text-zinc-400">
          Estou sempre aberto a novas oportunidades, projetos e
          colaborações. Fique à vontade para entrar em contato.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-5">

          {/* E-mail */}
          <a
            href="mailto:jv43291@gmail.com"
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20"
          >
            <Mail className="mb-4 text-blue-400" size={32} />

            <h3 className="text-xl font-semibold">
              E-mail
            </h3>

            <p className="mt-2 break-all text-zinc-400">
              jv43291@gmail.com
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/jv43291-boop"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20"
          >
            <Code className="mb-4 text-blue-400" size={32} />

            <h3 className="text-xl font-semibold">
              GitHub
            </h3>

            <p className="mt-2 break-all text-zinc-400">
              github.com/jv43291-boop
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/joão-victor-pinheiro-magalhães-246060226"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20"
          >
            <User className="mb-4 text-blue-400" size={32} />

            <h3 className="text-xl font-semibold">
              LinkedIn
            </h3>

            <p className="mt-2 break-all text-zinc-400">
              linkedin.com/in/joão-victor-pinheiro-magalhães
            </p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/5592984337079?text=Olá%20João!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-xl hover:shadow-green-500/20"
          >
            <MessageCircle className="mb-4 text-green-400" size={32} />

            <h3 className="text-xl font-semibold">
              WhatsApp
            </h3>

            <p className="mt-2 text-zinc-400">
              Disponível para contato profissional
            </p>
          </a>

          {/* Currículo */}
          <a
            href="#"
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20"
          >
            <FileText className="mb-4 text-blue-400" size={32} />

            <h3 className="text-xl font-semibold">
              Currículo
            </h3>

            <p className="mt-2 text-zinc-400">
              Em breve disponível
            </p>
          </a>

        </div>

      </div>
    </section>
  );
}