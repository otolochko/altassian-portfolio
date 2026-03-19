interface ProjectsProps {
  projects: {
    title: string;
    desc: string;
    items: readonly {
      category: string;
      title: string;
      desc: string;
      outcomes: readonly string[];
      tags: readonly string[];
    }[];
  };
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section id="projects" className="py-20 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text mb-4">{projects.title}</h2>
          <p className="text-muted max-w-2xl mx-auto">{projects.desc}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.items.map((project, idx) => (
            <div
              key={idx}
              className="bg-surface-raised backdrop-blur-xl rounded-2xl overflow-hidden border border-border shadow-glass hover:shadow-glass-lg hover:-translate-y-1 hover:border-accent/30 transition-all duration-300 flex flex-col"
            >
              <div className="p-8 flex-1">
                <div className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-semibold uppercase tracking-wider mb-3 bg-accent/10 text-accent border border-accent/20">
                  {project.category}
                </div>
                <h3 className="text-base font-bold text-text mb-3">{project.title}</h3>
                <p className="text-muted mb-5 leading-relaxed text-sm">{project.desc}</p>

                <ul className="space-y-2 mb-6">
                  {project.outcomes.map((o, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      {o}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 bg-surface-overlay text-muted text-xs font-medium rounded-lg border border-border hover:bg-accent/10 hover:text-accent hover:border-accent/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
