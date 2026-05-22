import { TRANSLATIONS, Lang, SearchParams } from "./i18n";
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Tech from "./components/sections/Tech";
import Challenges from "./components/sections/Challenges";
import Areas from "./components/sections/Areas";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/sections/Footer";

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<SearchParams> | SearchParams;
}) {
  const sp = (await Promise.resolve(searchParams ?? {})) as SearchParams;
  const rawLang = sp.lang;
  const lang: Lang = (Array.isArray(rawLang) ? rawLang[0] : rawLang) === "uk" ? "uk" : "en";
  const t = TRANSLATIONS[lang];
  const nextLang: Lang = lang === "en" ? "uk" : "en";

  return (
    <div className="min-h-screen bg-bg font-sans text-text">
      <Navbar nav={t.nav} lang={lang} nextLang={nextLang} />
      <main>
        <Hero hero={t.hero} cards={t.projects.items} />
        <About about={t.about} />
        <Tech tech={t.tech} />
        <Challenges challenges={t.challenges} />
        <Areas areas={t.areas} />
        <Services services={t.services} />
        <Projects projects={t.projects} />
        <ContactSection contact={t.contact} lang={lang} />
      </main>
      <Footer />
    </div>
  );
}
