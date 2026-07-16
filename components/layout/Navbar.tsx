"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Link
          href="/"
          className="text-2xl font-bold text-white transition hover:text-blue-400"
        >
          Atlas
        </Link>

        <nav>
          <ul className="flex items-center gap-8 text-sm font-medium text-zinc-300">

            <li>
              <a
                href="#hero"
                className="transition hover:text-blue-400"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="transition hover:text-blue-400"
              >
                Sobre
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="transition hover:text-blue-400"
              >
                Projetos
              </a>
            </li>

            <li>
              <a
                href="#stack"
                className="transition hover:text-blue-400"
              >
                Stack
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="transition hover:text-blue-400"
              >
                Contato
              </a>
            </li>

          </ul>
        </nav>

      </div>
    </header>
  );
}