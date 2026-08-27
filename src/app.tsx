import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";
import { useEffect } from "react";

import Header from "./components/layouts/header";
import { ProjectCard } from "./components/project-card";
import { Button } from "./components/ui/button";
import { ScrollButton } from "./components/ui/scroll-button";
import { LanguageProvider, useLanguage } from "./providers/language-provider";
import { ThemeProvider } from "./providers/theme-provider";

function AppContent() {
  const { language, t } = useLanguage();

  const cvHref =
    language === "pt"
      ? "/Jonathan_Medeiros_CV_PT.pdf"
      : "/Jonathan_Medeiros_CV.pdf";
  const cvFilename =
    language === "pt"
      ? "Jonathan_Medeiros_CV_PT.pdf"
      : "Jonathan_Medeiros_CV.pdf";

  const personalProjects = [
    {
      title: "Reaper Strike Co.",
      description: t.experience.personal.projects.reaperStrike,
      image: "/projects/reaper-strike-co.jpg",
      tags: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS v4",
        "Mercado Pago",
      ],
      liveLink: "https://reaper-strike-co.vercel.app/",
    },
    {
      title: "FinTrack",
      description: t.experience.personal.projects.finTrack,
      image: "/projects/fintrack.jpg",
      tags: [
        "TanStack Start",
        "TanStack Router/Query",
        "Prisma",
        "PostgreSQL",
        "NextAuth",
      ],
      liveLink: "https://fintrack-beta-liard.vercel.app/",
    },
  ];

  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
      <Header />
      <section className="min-h-screen flex items-center justify-center pt-20 pb-10">
        <div className="max-w-3xl w-full px-6 text-center space-y-8 animate-in fade-in duration-700">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent animate-in slide-in-from-bottom-4 duration-700">
            {t.hero.greeting}
          </h1>
          <h2 className="text-xl md:text-3xl font-semibold text-muted-foreground animate-in slide-in-from-bottom-4 duration-700 delay-150">
            {t.hero.role}
          </h2>
          <p className="text-base md:text-lg leading-relaxed animate-in slide-in-from-bottom-4 duration-700 delay-300">
            {t.hero.description}
          </p>
          <div className="flex gap-4 justify-center flex-wrap animate-in slide-in-from-bottom-4 duration-700 delay-500">
            <ScrollButton
              scrollTo="#contact"
              variant="default"
              size="lg"
              className="min-w-[150px] shadow-lg hover:shadow-xl transition-all"
            >
              {t.hero.ctaContact}
            </ScrollButton>
            <ScrollButton
              scrollTo="#projects"
              variant="outline"
              size="lg"
              className="min-w-[150px] hover:bg-accent transition-all"
            >
              {t.hero.ctaProjects}
            </ScrollButton>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20 scroll-mt-20"
      >
        <div className="max-w-4xl w-full px-6 space-y-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            {t.about.title}
          </h1>
          <div className="space-y-6">
            <p className="text-base md:text-lg leading-relaxed text-center md:text-left">
              {t.about.p1Prefix}{" "}
              <span className="font-semibold text-primary">
                {t.about.yearsBold}
              </span>{" "}
              {t.about.p1Suffix}
            </p>
            <p className="text-base md:text-lg leading-relaxed text-center md:text-left">
              {t.about.p2}
            </p>
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center py-20 scroll-mt-20"
      >
        <div className="max-w-6xl w-full px-6 space-y-12">
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold">
                {t.experience.title}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                {t.experience.subtitle}
              </p>
            </div>
            <Button
              variant="default"
              size="lg"
              className="shadow-md hover:shadow-lg transition-all"
            >
              <a
                href={cvHref}
                download={cvFilename}
                className="flex items-center gap-2"
              >
                {t.experience.downloadCV}
              </a>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-all">
              <h3 className="font-semibold text-lg mb-2 text-primary">
                {t.experience.nhs.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t.experience.nhs.desc}
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-all">
              <h3 className="font-semibold text-lg mb-2 text-primary">
                {t.experience.axon.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t.experience.axon.desc}
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-all">
              <h3 className="font-semibold text-lg mb-2 text-primary">
                {t.experience.serpro.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t.experience.serpro.desc}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">
              {t.experience.skills.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-lg bg-muted">
                <h3 className="font-semibold mb-2">
                  {t.experience.skills.frontend.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t.experience.skills.frontend.desc}
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted">
                <h3 className="font-semibold mb-2">
                  {t.experience.skills.devops.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t.experience.skills.devops.desc}
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted">
                <h3 className="font-semibold mb-2">
                  {t.experience.skills.soft.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t.experience.skills.soft.desc}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">
              {t.experience.keyProjects.title}
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">
                  {t.experience.keyProjects.fgts.title}
                </strong>{" "}
                {t.experience.keyProjects.fgts.desc}
              </p>
              <p>
                <strong className="text-foreground">
                  {t.experience.keyProjects.energiview.title}
                </strong>{" "}
                {t.experience.keyProjects.energiview.desc}
              </p>
              <p>
                <strong className="text-foreground">
                  {t.experience.keyProjects.axon.title}
                </strong>{" "}
                {t.experience.keyProjects.axon.desc}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">
              {t.experience.personal.title}
            </h2>
            <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto">
              {t.experience.personal.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {personalProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                  visitLabel={t.experience.personal.visit}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center py-20 scroll-mt-20"
      >
        <div className="max-w-3xl w-full px-6 text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">
              {t.contact.title}
            </h1>
            <p className="text-muted-foreground">{t.contact.subtitle}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <ScrollButton
              href="https://www.linkedin.com/in/jonathanmedeiros/"
              variant="outline"
              size="lg"
              className="min-w-[140px] shadow-md hover:shadow-lg transition-all"
            >
              <LinkedInLogoIcon className="h-5 w-5 mr-1" />
              LinkedIn
            </ScrollButton>
            <ScrollButton
              href="https://github.com/jonhnmedeiros"
              variant="outline"
              size="lg"
              className="min-w-[140px] shadow-md hover:shadow-lg transition-all"
            >
              <GitHubLogoIcon className="h-5 w-5 mr-1" />
              GitHub
            </ScrollButton>
            <ScrollButton
              href="https://www.instagram.com/jonathan.f.medeiros/"
              variant="outline"
              size="lg"
              className="min-w-[140px] shadow-md hover:shadow-lg transition-all"
            >
              <InstagramLogoIcon className="h-5 w-5 mr-1" />
              Instagram
            </ScrollButton>
          </div>
          <div className="pt-8 text-sm text-muted-foreground border-t">
            <p>{t.contact.footer}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
