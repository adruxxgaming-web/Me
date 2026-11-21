"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Single place to register GSAP plugins. Import gsap/ScrollTrigger from here
// (never directly) so plugins are always registered exactly once.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
