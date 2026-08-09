import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 px-6 py-10 text-zinc-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} João Victor Magalhães. Desenvolvido com Next.js.</p>
        <nav aria-label="Links do rodapé" className="flex gap-5">
          <Link href="/#projects" className="transition hover:text-blue-400">Projetos</Link>
          <Link href="/#contact" className="transition hover:text-blue-400">Contato</Link>
          <a href="https://github.com/jv43291-boop" target="_blank" rel="noopener noreferrer" className="transition hover:text-blue-400">GitHub</a>
        </nav>
      </div>
    </footer>
  );
}
