"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { href: "/#hero", label: "Home" },
    { href: "/#about", label: "Sobre" },
    { href: "/#services", label: "Serviços" },
    { href: "/#projects", label: "Projetos" },
    { href: "/#stack", label: "Stack" },
    { href: "/#contact", label: "Contato" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-blue-400/15 bg-[#02070d]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-10">

        <Link
          href="/"
          aria-label="Atlas — página inicial"
          className="flex items-center gap-3 text-white transition hover:text-blue-300"
        >
          <span className="flex h-10 w-10 items-center justify-center border border-blue-500/40 bg-blue-600 text-lg font-black">A</span>
          <span className="text-sm font-black tracking-[0.34em]">ATLAS</span>
        </Link>

        <nav aria-label="Navegação principal">
          <ul className="hidden items-center gap-9 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link className="transition hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((open) => !open)}
          className="border border-blue-400/20 p-2 text-slate-200 transition hover:border-blue-400 hover:text-blue-300 md:hidden"
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

      </div>
      {menuOpen && (
        <nav id="menu-mobile" aria-label="Navegação mobile" className="border-t border-blue-400/15 bg-[#02070d] md:hidden">
          <ul className="mx-auto max-w-7xl px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-slate-300">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-blue-400/10 px-1 py-4 transition hover:text-blue-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
