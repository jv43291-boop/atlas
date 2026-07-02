export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-blue-400">▲</span>

          <h1 className="text-lg font-bold tracking-wide text-white">
            ATLAS
          </h1>
        </div>

        <ul className="flex items-center gap-8 text-sm text-zinc-300">
          <li>
            <a className="transition hover:text-white" href="#">
              Sobre
            </a>
          </li>

          <li>
            <a className="transition hover:text-white" href="#">
              Projetos
            </a>
          </li>

          <li>
            <a className="transition hover:text-white" href="#">
              Stack
            </a>
          </li>

          <li>
            <a className="transition hover:text-white" href="#">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}