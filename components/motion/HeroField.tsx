"use client";

import { useEffect, useRef } from "react";

/**
 * Campo de pontos do hero: uma malha que respira devagar e se afasta do
 * cursor com física de mola. Decorativo (aria-hidden).
 *
 * - Pausa quando sai da tela ou a aba fica oculta.
 * - Com prefers-reduced-motion desenha uma vez e para.
 * - Densidade menor em telas pequenas; resolução limitada a 2x.
 */
export default function HeroField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let gap = 34;
    type Dot = { ox: number; oy: number; x: number; y: number; vx: number; vy: number };
    let dots: Dot[] = [];
    const pointer = { x: -9999, y: -9999, active: false };
    let raf = 0;
    let visible = true;
    let t0 = performance.now();

    const build = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      gap = w < 640 ? 30 : 36;
      dots = [];
      const cols = Math.ceil(w / gap) + 1;
      const rows = Math.ceil(h / gap) + 1;
      const offX = (w - (cols - 1) * gap) / 2;
      const offY = (h - (rows - 1) * gap) / 2;
      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const x = offX + i * gap;
          const y = offY + j * gap;
          dots.push({ ox: x, oy: y, x, y, vx: 0, vy: 0 });
        }
      }
    };

    const draw = (now: number) => {
      const t = (now - t0) / 1000;
      ctx.clearRect(0, 0, w, h);
      const radius = Math.min(220, Math.max(140, w * 0.14));
      const r2 = radius * radius;
      for (const d of dots) {
        // onda lenta: os pontos "respiram" em diagonal
        const wave = reduce ? 0 : Math.sin(d.ox * 0.012 + d.oy * 0.008 + t * 0.9) * 2.2;
        let tx = d.ox;
        let ty = d.oy + wave;
        let glow = 0;
        if (pointer.active) {
          const dx = d.ox - pointer.x;
          const dy = d.oy - pointer.y;
          const dist2 = dx * dx + dy * dy;
          if (dist2 < r2) {
            const dist = Math.sqrt(dist2) || 1;
            const f = 1 - dist / radius;
            const push = f * f * 38;
            tx += (dx / dist) * push;
            ty += (dy / dist) * push;
            glow = f;
          }
        }
        // mola: rigidez + amortecimento
        d.vx = (d.vx + (tx - d.x) * 0.09) * 0.78;
        d.vy = (d.vy + (ty - d.y) * 0.09) * 0.78;
        d.x += d.vx;
        d.y += d.vy;

        // some nas bordas e embaixo, para o texto ficar limpo
        const edge = Math.min(1, d.oy / (h * 0.15), (h - d.oy) / (h * 0.45), d.ox / (w * 0.05), (w - d.ox) / (w * 0.05));
        const a = Math.max(0, edge) * (0.24 + glow * 0.76);
        if (a <= 0.01) continue;
        const size = 1.1 + glow * 1.6;
        ctx.fillStyle = glow > 0.05 ? `rgba(120, 170, 255, ${a})` : `rgba(148, 178, 230, ${a})`;
        ctx.fillRect(d.x - size / 2, d.y - size / 2, size, size);
      }
    };

    const loop = (now: number) => {
      draw(now);
      if (visible && !reduce) raf = requestAnimationFrame(loop);
    };

    const start = () => {
      cancelAnimationFrame(raf);
      if (reduce) {
        draw(performance.now());
        return;
      }
      raf = requestAnimationFrame(loop);
    };

    build();
    start();

    const onResize = () => {
      build();
      if (reduce) draw(performance.now());
    };
    const host = canvas.parentElement ?? canvas;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const r = canvas.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
      pointer.active = true;
    };
    const onLeave = () => {
      pointer.active = false;
    };
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && document.visibilityState === "visible";
      if (visible) {
        t0 = performance.now() - 1000;
        start();
      } else cancelAnimationFrame(raf);
    });
    io.observe(canvas);
    const onVis = () => {
      visible = document.visibilityState === "visible";
      if (visible) start();
      else cancelAnimationFrame(raf);
    };

    window.addEventListener("resize", onResize, { passive: true });
    host.addEventListener("pointermove", onMove as EventListener, { passive: true });
    host.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", onResize);
      host.removeEventListener("pointermove", onMove as EventListener);
      host.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return <canvas ref={ref} className="pf-field" aria-hidden="true" />;
}
