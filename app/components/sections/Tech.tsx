import { ShieldCheck } from "lucide-react";

interface TechProps {
  tech: {
    title: string;
    certsTitle: string;
    certs: readonly (
      | string
      | {
          text: string;
          link?: string;
          icon?: string;
        }
    )[];
    stack: readonly {
      category: string;
      items: string;
    }[];
  };
}

const Tech = ({ tech }: TechProps) => {
  return (
    <section className="py-20 bg-section-dark text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">{tech.title}</h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="glass-dark p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
              <ShieldCheck className="text-accent" aria-hidden="true" /> {tech.certsTitle}
            </h3>
            <div className="grid gap-3">
              {tech.certs.map((cert, i) => {
                const isObject = typeof cert === "object";
                const text = isObject ? cert.text : cert;
                const link = isObject ? cert.link : undefined;
                const icon = isObject ? cert.icon : undefined;

                const content = (
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-accent/15 border border-white/5 hover:border-accent/30 transition-[background-color,border-color] duration-150 ease-out group">
                    {icon ? (
                      <img
                        src={icon}
                        alt=""
                        className="w-7 h-7 object-contain shrink-0 bg-white p-0.5 rounded-full border border-white/20 group-hover:scale-110 transition-transform"
                      />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-success shrink-0" />
                    )}
                    <span className="font-medium text-white/80 text-sm group-hover:text-accent transition-colors">
                      {text}
                    </span>
                  </div>
                );

                if (link) {
                  return (
                    <a
                      key={i}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block focus:outline-none"
                    >
                      {content}
                    </a>
                  );
                }

                return <div key={i}>{content}</div>;
              })}
            </div>
          </div>

          <div className="grid gap-6">
            {tech.stack.map((item, i) => (
              <div key={i}>
                <h4 className="text-accent font-bold mb-2 uppercase text-xs tracking-wider">{item.category}</h4>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10 flex flex-wrap gap-2">
                  {item.items.split(",").map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 bg-accent/15 border border-accent/20 rounded text-accent/90 text-xs font-mono hover:bg-accent/25 transition-colors"
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
