interface AboutProps {
  about: {
    title: string;
    p1: string;
    p2: string;
    stat1: string;
    stat2: string;
  };
}

const About = ({ about }: AboutProps) => {
  return (
    <section id="about" className="py-16 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-text">{about.title}</h2>
          <p className="text-muted mb-4 text-lg leading-relaxed">{about.p1}</p>
          <p className="text-muted leading-relaxed">{about.p2}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative p-6 bg-surface-raised rounded-2xl border border-border text-center shadow-glass hover:shadow-glass-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden group backdrop-blur-xl">
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative text-5xl font-bold text-accent mb-2">8+</div>
            <div className="relative text-xs text-muted font-semibold uppercase tracking-wider">{about.stat1}</div>
          </div>
          <div className="relative p-6 bg-surface-raised rounded-2xl border border-border text-center shadow-glass hover:shadow-glass-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden group backdrop-blur-xl">
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative text-5xl font-bold text-accent mb-2">ACE</div>
            <div className="relative text-xs text-muted font-semibold uppercase tracking-wider">{about.stat2}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
