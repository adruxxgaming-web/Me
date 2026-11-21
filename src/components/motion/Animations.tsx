"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Declarative page animations driven by data attributes, so sections can stay
 * Server Components:
 *
 *   [data-line] > span   hero/display lines sliding up out of a mask
 *   [data-hero-fade]     staggered fade-up right after the hero lines
 *   [data-reveal]        fade-up when scrolled into view
 *   [data-count]         number counting up when scrolled into view
 *
 * Initial hidden states live in globals.css and only apply when the user has
 * not asked for reduced motion.
 */
export function Animations() {
  const pathname = usePathname();

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // fromTo (with explicit y) so GSAP never inherits the CSS starting
      // transform as a pixel offset.
      gsap.fromTo(
        "[data-line] > span",
        { yPercent: 110, y: 0 },
        {
          yPercent: 0,
          y: 0,
          duration: 1.1,
          ease: "power4.out",
          stagger: 0.12,
          delay: 0.1,
        },
      );

      gsap.fromTo(
        "[data-hero-fade]",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
          delay: 0.55,
        },
      );

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = Number(el.dataset.count);
        if (Number.isNaN(target)) return;
        const counter = { value: 0 };
        el.textContent = "0";
        gsap.to(counter, {
          value: target,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = String(Math.round(counter.value));
          },
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
      });
    });

    // Layout can shift once fonts/images settle.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      mm.revert();
    };
  }, [pathname]);

  return null;
}
