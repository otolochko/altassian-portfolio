import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

interface HeroProps {
  hero: {
    badge: string;
    titleTop: string;
    titleHighlight: string;
    desc: string;
    btnPrimary: string;
    btnSecondary: string;
  };
}

const Hero = ({ hero }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-bg">
      {/* Decorative blur orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--brand-2)]/10 rounded-full blur-3xl animate-float delay-300 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6 border border-accent/20">
          <span className="w-2 h-2 rounded-full bg-accent inline-block animate-pulse-slow" />
          {hero.badge}
        </div>

        <h1 className="animate-fade-in-up delay-100 text-6xl md:text-7xl font-bold text-text leading-[1.1] tracking-tight mb-6">
          {hero.titleTop}
          <br />
          <span className="text-accent">{hero.titleHighlight}</span>
        </h1>

        <p className="animate-fade-in-up delay-200 text-lg text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
          {hero.desc}
        </p>

        <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#about">
            <Button type="button">
              {hero.btnPrimary} <ArrowRight size={18} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <a href="#contact">
            <Button type="button" variant="outline">
              {hero.btnSecondary}
            </Button>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="animate-fade-in-up delay-500 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-accent transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs font-semibold uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-current flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-current animate-bounce" />
        </div>
      </a>
    </section>
  );
};

export default Hero;
