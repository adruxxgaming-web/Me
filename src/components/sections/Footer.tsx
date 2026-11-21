import type { Dictionary } from "@/content/types";
import { site } from "@/content/site";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-zinc-200 py-8 text-sm text-zinc-500 dark:border-zinc-800">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-6 sm:flex-row">
        <p>
          © {site.fullName}. {dict.footer.rights}
        </p>
        <p>{dict.footer.builtWith}</p>
      </div>
    </footer>
  );
}
