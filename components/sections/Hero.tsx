export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-6 text-white">
      {/* Efeito de luz ao fundo */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <p className="text-lg text-zinc-400">
          Construindo meu futuro, uma linha de código por vez.
        </p>

        <h1 className="mt-6 bg-gradient-to-r from-white via-zinc-200 to-blue-400 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-7xl">
          João Victor Pinheiro Magalhães
        </h1>

        <h2 className="mt-8 text-xl font-medium text-zinc-300">
          Full Stack Developer & Mobile Developer
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Transformando aprendizado em soluções reais.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 hover:shadow-blue-400/50"
          >
            Explorar Projetos
          </a>

          <a
            href="#about"
            className="rounded-xl border border-zinc-700 px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-blue-500 hover:text-blue-400"
          >
            Minha Jornada
          </a>
        </div>
      </div>
    </section>
  );
}