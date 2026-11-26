"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Motor de animações do site, sem biblioteca externa.
 *
 * Os componentes só marcam o HTML com atributos; este componente (montado uma
 * vez no layout) liga o comportamento:
 *
 *   data-reveal         entra uma vez quando aparece na tela (classe .is-in)
 *   data-magnetic       botão puxado de leve pelo cursor (só mouse)
 *   data-spotlight      foco de luz que segue o cursor + inclinação 3D (só mouse)
 *   data-parallax="0.1" desloca no eixo Y conforme a rolagem
 *   data-progress       linha que se preenche conforme a seção pai é rolada
 *
 * Tudo anima só transform/opacity, roda em requestAnimationFrame e respeita
 * prefers-reduced-motion. Sem JavaScript, o conteúdo aparece normalmente.
 */
export default function MotionRoot() {
  const pathname = usePathname();
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const cleanups: Array<() => void> = [];

    // 1) Entradas ao rolar --------------------------------------------------
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)"));
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.classList.add("is-in");
              io.unobserve(e.target);
            }
          }
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
      );
      revealEls.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    } else {
      revealEls.forEach((el) => el.classList.add("is-in"));
    }

    // 2) Rolagem: barra de progresso, parallax e linha do tempo -------------
    const parallaxEls = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    const progressEls = Array.from(document.querySelectorAll<HTMLElement>("[data-progress]"));
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const vh = window.innerHeight;
        const max = document.documentElement.scrollHeight - vh;
        if (barRef.current) {
          barRef.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
        }
        if (reduce) return;
        for (const el of parallaxEls) {
          const r = el.getBoundingClientRect();
          if (r.bottom < -200 || r.top > vh + 200) continue;
          const speed = Number(el.dataset.parallax) || 0.1;
          const center = r.top + r.height / 2 - vh / 2;
          el.style.transform = `translate3d(0, ${(-center * speed).toFixed(1)}px, 0)`;
        }
        for (const el of progressEls) {
          const host = el.parentElement;
          if (!host) continue;
          const r = host.getBoundingClientRect();
          const p = Math.min(1, Math.max(0, (vh * 0.6 - r.top) / r.height));
          el.style.transform = `scaleY(${p.toFixed(4)})`;
          host.querySelectorAll<HTMLElement>("[data-step]").forEach((step) => {
            const sr = step.getBoundingClientRect();
            step.classList.toggle("is-lit", sr.top < vh * 0.6);
          });
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    cleanups.push(() => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    });
    if (reduce) {
      progressEls.forEach((el) => {
        el.style.transform = "none";
        el.parentElement?.querySelectorAll("[data-step]").forEach((s) => s.classList.add("is-lit"));
      });
    }

    // 3) Botões magnéticos e cards com foco de luz (só com mouse) -----------
    if (finePointer && !reduce) {
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        const move = (ev: PointerEvent) => {
          const r = el.getBoundingClientRect();
          const x = ev.clientX - (r.left + r.width / 2);
          const y = ev.clientY - (r.top + r.height / 2);
          el.style.transition = "transform 120ms cubic-bezier(0.23, 1, 0.32, 1)";
          el.style.transform = `translate3d(${(x * 0.22).toFixed(1)}px, ${(y * 0.3).toFixed(1)}px, 0)`;
        };
        const leave = () => {
          el.style.transition = "transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1)";
          el.style.transform = "";
        };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", leave);
        });
      });

      document.querySelectorAll<HTMLElement>("[data-spotlight]").forEach((el) => {
        const tilt = el.dataset.spotlight !== "flat";
        const move = (ev: PointerEvent) => {
          const r = el.getBoundingClientRect();
          const px = (ev.clientX - r.left) / r.width;
          const py = (ev.clientY - r.top) / r.height;
          el.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
          el.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
          if (tilt) {
            el.style.transform = `perspective(900px) rotateX(${((0.5 - py) * 5).toFixed(2)}deg) rotateY(${((px - 0.5) * 6).toFixed(2)}deg)`;
          }
        };
        const leave = () => {
          el.style.transform = "";
        };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", leave);
        });
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return <div ref={barRef} className="pf-progress" aria-hidden="true" />;
}
