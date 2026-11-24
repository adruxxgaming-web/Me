/**
 * Round "+" toggle for <details> disclosures. Drawn as SVG (not a text "+")
 * so it stays optically centred regardless of font metrics or letter-spacing.
 * Turns into "×" while the closest `.group` <details> is open.
 */
export function ToggleIcon() {
  return (
    <span
      aria-hidden
      className="flex size-8 shrink-0 items-center justify-center rounded-full border border-crimson text-crimson-bright transition-transform duration-300 group-open:rotate-45"
    >
      <svg viewBox="0 0 12 12" className="size-3" fill="none">
        <path
          d="M6 1v10M1 6h10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
