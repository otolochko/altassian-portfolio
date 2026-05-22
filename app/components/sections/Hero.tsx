import { ArrowRight, CheckCircle2 } from "lucide-react";
import Button from "../ui/Button";
import HeroAurora from "./HeroAurora";
import CardSwap, { Card } from "../ui/CardSwap";

interface ProjectCard {
  category: string;
  title: string;
  outcomes: readonly string[];
  tags: readonly string[];
}

interface HeroProps {
  hero: {
    badge: string;
    titleTop: string;
    titleHighlight: string;
    desc: string;
    btnPrimary: string;
    btnSecondary: string;
  };
  cards: readonly ProjectCard[];
}

const tagColors: Record<string, string> = {
  Security: "bg-danger/10 text-danger",
  Compliance: "bg-warning/10 text-warning",
  Permissions: "bg-danger/10 text-danger",
  JSM: "bg-accent/10 text-accent",
  SLA: "bg-accent/10 text-accent",
  "On-call": "bg-accent/10 text-accent",
  "Multi-tenancy": "bg-accent/10 text-accent",
  Governance: "bg-warning/10 text-warning",
  Tempo: "bg-muted/10 text-muted",
  Migration: "bg-accent/10 text-accent",
  "Data Center": "bg-danger/10 text-danger",
};

const Hero = ({ hero, cards }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex flex-col xl:flex-row items-center justify-center px-6 md:px-12 overflow-hidden bg-bg gap-12 xl:gap-0">
      <HeroAurora />

      {/* ── Text side (60%) ─────────────────────────────── */}
      <div className="relative w-full xl:w-[60%] flex flex-col items-center xl:items-start text-center xl:text-left xl:pl-16">
        <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6 border border-accent/20">
          <span className="w-2 h-2 rounded-full bg-accent inline-block animate-pulse-slow" />
          {hero.badge}
        </div>

        <h1 className="animate-fade-in-up delay-100 text-5xl md:text-6xl xl:text-7xl font-bold text-text leading-[1.1] tracking-tight mb-6">
          {hero.titleTop}
          <br />
          <span className="text-accent">{hero.titleHighlight}</span>
        </h1>

        <p className="animate-fade-in-up delay-200 text-lg text-muted mb-10 max-w-xl leading-relaxed">
          {hero.desc}
        </p>

        <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4">
          <a href="#about">
            <Button type="button">
              {hero.btnPrimary}{" "}
              <ArrowRight size={18} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <a href="#contact">
            <Button type="button" variant="outline">
              {hero.btnSecondary}
            </Button>
          </a>
        </div>
      </div>

      {/* ── CardSwap side (40%) ─────────────────────────── */}
      <div className="animate-fade-in-up delay-400 relative w-full xl:w-[40%] h-[420px] hidden xl:block">
        <CardSwap
          width={400}
          height={280}
          cardDistance={55}
          verticalDistance={65}
          delay={4000}
          pauseOnHover
          skewAmount={5}
        >
          {cards.map((card, i) => (
            <Card key={i}>
              <div className="flex flex-col h-full p-6 gap-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent font-mono">
                  {card.category}
                </span>
                <h3 className="text-base font-bold text-text leading-snug">
                  {card.title}
                </h3>
                <ul className="flex flex-col gap-1.5 flex-1">
                  {card.outcomes.map((o, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted">
                      <CheckCircle2 size={14} className="text-success mt-0.5 shrink-0" />
                      {o}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-border">
                  {card.tags.map((tag, k) => (
                    <span
                      key={k}
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${tagColors[tag] ?? "bg-surface-overlay text-muted"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </CardSwap>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="animate-fade-in-up delay-500 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-accent transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs font-semibold uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-current flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-current animate-scroll-dot" />
        </div>
      </a>
    </section>
  );
};

export default Hero;
