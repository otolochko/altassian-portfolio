import { Server, Code, Briefcase, Users, Lock, Layout } from "lucide-react";

const iconMap = {
  Server: <Server aria-hidden="true" />,
  Code: <Code aria-hidden="true" />,
  Briefcase: <Briefcase aria-hidden="true" />,
  Users: <Users aria-hidden="true" />,
  Lock: <Lock aria-hidden="true" />,
  Layout: <Layout aria-hidden="true" />,
};

interface AreasProps {
  areas: {
    title: string;
    desc: string;
    items: readonly {
      title: string;
      list: readonly string[];
      icon: string;
    }[];
  };
}

const Areas = ({ areas }: AreasProps) => {
  return (
    <section id="areas" className="py-20 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text mb-4">{areas.title}</h2>
          <p className="text-muted max-w-2xl mx-auto">{areas.desc}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.items.map((area, idx) => (
            <div
              key={idx}
              className="bg-surface-raised backdrop-blur-xl p-6 rounded-2xl border border-border shadow-glass hover:shadow-glass-lg hover:-translate-y-1 hover:border-accent/30 transition-[transform,box-shadow,border-color] duration-200 ease-out group"
            >
              <div className="w-10 h-10 bg-accent text-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm shadow-accent/30">
                {iconMap[area.icon as keyof typeof iconMap]}
              </div>
              <h3 className="text-base font-bold text-text mb-4">{area.title}</h3>
              <ul className="space-y-2">
                {area.list.map((li, lIdx) => (
                  <li key={lIdx} className="flex items-start gap-2 text-sm text-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Areas;
