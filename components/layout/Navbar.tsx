export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-blue-400">▲</span>

          <h1 className="text-lg font-bold tracking-wide text-white">
            ATLAS
          </h1>
        </div>

        <ul className="flex items-center gap-8 text-sm text-zinc-300">
          <li>
            <a href="#about" className="transition hover:text-white">
              Sobre
            </a>
          </li>

          <li>
            <a href="#projects" className="transition hover:text-white">
              Projetos
            </a>
          </li>

          <li>
            <a href="#stack" className="transition hover:text-white">
              Stack
            </a>
          </li>

          <li>
            <a href="#contact" className="transition hover:text-white">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}