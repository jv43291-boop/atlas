import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-blue-400/15 bg-[#02070d] px-6 py-12 text-slate-500 lg:px-10">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-3 text-white"><span className="flex h-9 w-9 items-center justify-center bg-blue-600 font-black">A</span><span className="text-sm font-black tracking-[0.32em]">ATLAS</span></div>
          <p className="mt-4 text-xs uppercase tracking-[0.13em]">© {new Date().getFullYear()} João Victor Magalhães — Desenvolvido com Next.js</p>
        </div>
        <nav aria-label="Links do rodapé" className="flex gap-6 text-xs font-bold uppercase tracking-[0.14em]">
          <Link href="/#services" className="transition hover:text-blue-400">Serviços</Link>
          <Link href="/#projects" className="transition hover:text-blue-400">Projetos</Link>
          <Link href="/#contact" className="transition hover:text-blue-400">Contato</Link>
          <a href="https://github.com/jv43291-boop" target="_blank" rel="noopener noreferrer" className="transition hover:text-blue-400">GitHub</a>
        </nav>
      </div>
    </footer>
  );
}
