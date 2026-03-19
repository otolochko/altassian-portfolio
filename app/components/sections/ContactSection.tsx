import { Linkedin, CircleUser } from "lucide-react";
import ContactFormClient from "../ContactFormClient";
import { Lang } from "../../i18n";

interface ContactSectionProps {
  contact: {
    title: string;
    desc: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
      success: string;
      error: string;
    };
  };
  lang: Lang;
}

const ContactSection = ({ contact, lang }: ContactSectionProps) => {
  return (
    <section id="contact" className="py-24 px-4 bg-bg">
      <div className="max-w-5xl mx-auto bg-card backdrop-blur-xl rounded-3xl shadow-glass-lg overflow-hidden flex flex-col md:flex-row border border-border">
        <div className="relative bg-gradient-to-br from-accent to-accent-hover p-10 md:w-2/5 text-white flex flex-col justify-between overflow-hidden">
          {/* Decorative dots pattern */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }}
          />
          <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-white/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative">
            <h3 className="text-2xl font-bold mb-6">{contact.title}</h3>
            <p className="text-white/80 mb-8 text-sm leading-relaxed">{contact.desc}</p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/15 backdrop-blur-sm rounded-lg border border-white/20">
                  <CircleUser className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[10px] text-white/60 uppercase font-semibold tracking-wider">Community</p>
                  <a
                    className="text-sm font-medium hover:text-white/80 transition-colors"
                    href="https://community.atlassian.com/user/profile/af784eda-dcd2-4fba-8282-d1cd8548b328"
                    target="_blank"
                  >
                    Atlassian Community Profile
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/15 backdrop-blur-sm rounded-lg border border-white/20">
                  <Linkedin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[10px] text-white/60 uppercase font-semibold tracking-wider">Social</p>
                  <a
                    className="text-sm font-medium hover:text-white/80 transition-colors"
                    href="https://www.linkedin.com/in/oleksandrtolochko/"
                    target="_blank"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-10 md:w-3/5">
          <ContactFormClient lang={lang} labels={contact.form} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
