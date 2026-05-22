import { CheckCircle } from "lucide-react";

interface ServicesProps {
  services: {
    title: string;
    desc: string;
    items: readonly {
      title: string;
      desc: string;
      features: readonly string[];
    }[];
  };
}

const Services = ({ services }: ServicesProps) => {
  return (
    <section id="services" className="py-20 px-4 bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text mb-4">{services.title}</h2>
          <p className="text-muted max-w-2xl mx-auto">{services.desc}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.items.map((service, idx) => (
            <div
              key={idx}
              className="relative bg-card backdrop-blur-xl p-8 rounded-2xl border border-border shadow-glass hover:shadow-glass-lg hover:-translate-y-1 hover:border-accent/30 transition-[transform,box-shadow,border-color] duration-200 ease-out overflow-hidden group"
            >
              <div className="absolute top-4 right-6 text-6xl font-black text-surface-overlay select-none leading-none pointer-events-none group-hover:text-accent/10 transition-colors">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <div className="relative">
                <h3 className="text-lg font-bold text-text mb-3">{service.title}</h3>
                <p className="text-muted mb-6 min-h-[48px] text-sm leading-relaxed">{service.desc}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-muted group/item">
                      <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-sm font-medium group-hover/item:text-text transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
