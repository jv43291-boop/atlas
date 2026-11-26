"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "/#hero", id: "hero", label: "Home" },
  { href: "/#about", id: "about", label: "Sobre" },
  { href: "/#services", id: "services", label: "Serviços" },
  { href: "/#process", id: "process", label: "Como trabalho" },
  { href: "/#projects", id: "projects", label: "Projetos" },
  { href: "/#stack", id: "stack", label: "Stack" },
  { href: "/#contact", id: "contact", label: "Contato" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentId, setCurrent] = useState<string | null>(null);
  const current = pathname === "/" ? currentId : null;

  // Some ao descer, volta ao subir (nunca some com o menu aberto).
  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const y = window.scrollY;
        setScrolled(y > 12);
        if (Math.abs(y - last) > 6) {
          setHidden(y > last && y > 240);
          last = y;
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Destaca a seção visível.
  useEffect(() => {
    if (pathname !== "/") return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setCurrent(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={`pf-nav fixed left-0 top-0 z-50 w-full ${scrolled || menuOpen ? "is-scrolled" : ""} ${hidden && !menuOpen ? "is-hidden" : ""}`}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-10">

        <Link
          href="/"
          aria-label="Atlas — página inicial"
          className="pf-logo flex items-center gap-3 text-white"
        >
          <span className="pf-logo__mark flex h-10 w-10 items-center justify-center bg-blue-600 text-lg font-black">A</span>
          <span className="text-sm font-black tracking-[0.34em]">ATLAS</span>
        </Link>

        <nav aria-label="Navegação principal">
          <ul className="pf-nav__links hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  className={`pf-nav__link ${current === link.id ? "is-current" : ""}`}
                  aria-current={current === link.id ? "true" : undefined}
                  href={link.href}
                >
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
          className="pf-burger border border-blue-400/20 p-2 text-slate-200 md:hidden"
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

      </div>
      <nav
        id="menu-mobile"
        aria-label="Navegação mobile"
        className={`pf-mobile md:hidden ${menuOpen ? "is-open" : ""}`}
        inert={!menuOpen}
      >
        <ul className="mx-auto max-w-7xl px-6 py-4">
          {links.map((link, i) => (
            <li key={link.href} className="pf-mobile__item" style={{ "--i": i } as React.CSSProperties}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-baseline justify-between border-b border-blue-400/10 px-1 py-4"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-blue-400/70">{String(i + 1).padStart(2, "0")}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
