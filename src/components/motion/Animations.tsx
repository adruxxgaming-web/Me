"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { SKIP_INTRO_ID } from "@/components/ui/LanguageSwitch";

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
    // Set by <LanguageSwitch>: the view transition already animates the
    // change, so show the new page as-is instead of replaying the intro.
    const skipStyle = document.getElementById(SKIP_INTRO_ID);
    const skipIntro = skipStyle !== null;

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      if (skipIntro) {
        // Pin the final state inline; the override <style> is dropped below.
        gsap.set("[data-line] > span", { yPercent: 0, y: 0 });
        gsap.set("[data-hero-fade]", { opacity: 1, y: 0 });
      } else {
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
      }

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

    // Drop the override a moment later rather than right away: effects can
    // run twice (Strict Mode) and the second run must still see it.
    const clearSkip = skipIntro
      ? window.setTimeout(() => skipStyle.remove(), 800)
      : undefined;

    // Layout can shift once fonts/images settle.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    // Opening/closing a <details> case study moves everything below it.
    // `toggle` does not bubble, so listen in the capture phase.
    document.addEventListener("toggle", refresh, true);

    return () => {
      window.clearTimeout(clearSkip);
      window.removeEventListener("load", refresh);
      document.removeEventListener("toggle", refresh, true);
      mm.revert();
    };
  }, [pathname]);

  return null;
}
