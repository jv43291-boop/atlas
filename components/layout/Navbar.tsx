"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { href: "/#hero", label: "Home" },
    { href: "/#about", label: "Sobre" },
    { href: "/#projects", label: "Projetos" },
    { href: "/#stack", label: "Stack" },
    { href: "/#contact", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Link
          href="/"
          className="text-2xl font-bold text-white transition hover:text-blue-400"
        >
          Atlas
        </Link>

        <nav aria-label="Navegação principal">
          <ul className="hidden items-center gap-8 text-sm font-medium text-zinc-300 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link className="transition hover:text-blue-400" href={link.href}>
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
          className="rounded-lg p-2 text-zinc-200 transition hover:bg-zinc-800 hover:text-blue-400 md:hidden"
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

      </div>
      {menuOpen && (
        <nav id="menu-mobile" aria-label="Navegação mobile" className="border-t border-zinc-800 bg-zinc-950 md:hidden">
          <ul className="mx-auto max-w-7xl px-6 py-3 text-zinc-200">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-3 transition hover:bg-zinc-900 hover:text-blue-400"
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
