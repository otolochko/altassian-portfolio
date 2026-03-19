import Link from "next/link";
import { Globe } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";

type Lang = "en" | "uk";

interface NavbarProps {
  nav: {
    about: string;
    challenges: string;
    expertise: string;
    services: string;
    projects: string;
    contact: string;
    cta: string;
  };
  lang: Lang;
  nextLang: Lang;
}

const Navbar = ({ nav, lang, nextLang }: NavbarProps) => {
  return (
    <nav className="fixed top-0 w-full glass z-50 shadow-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl md:text-2xl font-bold text-text tracking-tight">
            Oleksandr<span className="text-accent">.Tolochko</span>
          </div>

          <div className="hidden lg:flex items-center space-x-6 text-sm font-semibold">
            {[
              { href: "#about", label: nav.about },
              { href: "#challenges", label: nav.challenges },
              { href: "#areas", label: nav.expertise },
              { href: "#services", label: nav.services },
              { href: "#projects", label: nav.projects },
              { href: "#contact", label: nav.contact },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="relative text-muted hover:text-accent transition-colors group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href={{ pathname: "/", query: { lang: nextLang } }}
              className="flex items-center gap-1 text-muted hover:text-accent font-semibold transition px-2 py-1 rounded-lg hover:bg-surface-raised"
              aria-label="Switch language"
            >
              <Globe size={18} aria-hidden="true" /> <span className="uppercase text-sm">{lang}</span>
            </Link>
            <a
              href="#contact"
              className="hidden sm:block bg-gradient-to-r from-accent to-accent-hover text-white px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-accent/30 transition-all duration-200 hover:scale-[1.02]"
            >
              {nav.cta}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
