import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 px-6 text-white">
      {/* Efeito de luz ao fundo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <p className="text-lg text-zinc-400">
          Construindo meu futuro, uma linha de código por vez.
        </p>

        <h1 className="mt-6 bg-gradient-to-r from-white via-zinc-200 to-blue-400 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-7xl">
          João Victor Pinheiro Magalhães
        </h1>

        <h2 className="mt-8 text-xl font-medium text-zinc-300">
          Full Stack Developer • Mobile Developer
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Transformando aprendizado em soluções reais.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button>
            Explorar Projetos
          </Button>

          <Button variant="secondary">
            Minha Jornada
          </Button>
        </div>
      </div>
    </section>
  );
}