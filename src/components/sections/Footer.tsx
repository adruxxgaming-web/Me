import type { Dictionary } from "@/content/types";
import { site } from "@/content/site";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-line py-8">
      <div className="label mx-auto flex max-w-[1400px] flex-col justify-between gap-2 px-6 text-mute md:px-10 sm:flex-row">
        <p>
          © {site.fullName}. {dict.footer.rights}
        </p>
        <p>{dict.footer.builtWith}</p>
      </div>
    </footer>
  );
}
