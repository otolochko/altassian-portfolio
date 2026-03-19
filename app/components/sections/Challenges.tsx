"use client";

import { useEffect, useState } from "react";
import { AlertCircle, CheckCircle } from "lucide-react";

interface ChallengesProps {
  challenges: {
    title: string;
    desc: string;
    items: readonly {
      problem: string;
      solution: string;
    }[];
  };
}

const Challenges = ({ challenges }: ChallengesProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section id="challenges" className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text mb-4">{challenges.title}</h2>
            <p className="text-muted max-w-2xl mx-auto">{challenges.desc}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.items.map((_, idx) => (
              <div
                key={idx}
                className="bg-card rounded-2xl border border-border min-h-[200px] animate-pulse overflow-hidden"
              >
                <div className="h-1 bg-border" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="challenges" className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text mb-4">{challenges.title}</h2>
          <p className="text-muted max-w-2xl mx-auto">{challenges.desc}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-glass hover:shadow-glass-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="h-1 bg-gradient-to-r from-danger to-warning group-hover:from-warning group-hover:to-danger transition-all duration-300" />
              <div className="p-6">
                <div className="mb-4 pb-4 border-b border-border">
                  <div className="flex items-center gap-2 mb-2 text-danger font-bold text-xs uppercase tracking-wider">
                    <AlertCircle size={14} aria-hidden="true" /> Problem
                  </div>
                  <h4 className="font-semibold text-text">{item.problem}</h4>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2 text-accent font-bold text-xs uppercase tracking-wider">
                    <CheckCircle size={14} aria-hidden="true" /> Solution
                  </div>
                  <p className="text-muted text-sm leading-relaxed">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
