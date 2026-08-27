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
import { ThemeProvider } from "./providers/theme-provider";

const personalProjects = [
  {
    title: "Reaper Strike Co.",
    description:
      "E-commerce artesanal de molhos de pimenta ultra-picantes, com catálogo, carrinho e checkout via Mercado Pago.",
    image: "/projects/reaper-strike-co.jpg",
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Mercado Pago"],
    liveLink: "https://reaper-strike-co.vercel.app/",
  },
  {
    title: "FinTrack",
    description:
      "Controle financeiro pessoal com módulo de investimentos (ações, FIIs, cripto) e suporte multi-usuário.",
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

export function App() {
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <section className="min-h-screen flex items-center justify-center pt-20 pb-10">
        <div className="max-w-3xl w-full px-6 text-center space-y-8 animate-in fade-in duration-700">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent animate-in slide-in-from-bottom-4 duration-700">
            Hi, I'm Jonathan Medeiros
          </h1>
          <h2 className="text-xl md:text-3xl font-semibold text-muted-foreground animate-in slide-in-from-bottom-4 duration-700 delay-150">
            Senior Software Engineer & Frontend Specialist
          </h2>
          <p className="text-base md:text-lg leading-relaxed animate-in slide-in-from-bottom-4 duration-700 delay-300">
            Specializing in high-performance frontend ecosystems (Vue, Nuxt,
            Svelte) and currently expanding into React/Next.js. Proven
            experience in national-scale platforms and asynchronous,
            remote-first environments.
          </p>
          <div className="flex gap-4 justify-center flex-wrap animate-in slide-in-from-bottom-4 duration-700 delay-500">
            <ScrollButton
              scrollTo="#contact"
              variant="default"
              size="lg"
              className="min-w-[150px] shadow-lg hover:shadow-xl transition-all"
            >
              Get in touch
            </ScrollButton>
            <ScrollButton
              scrollTo="#projects"
              variant="outline"
              size="lg"
              className="min-w-[150px] hover:bg-accent transition-all"
            >
              View my experiences
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
            About me
          </h1>
          <div className="space-y-6">
            <p className="text-base md:text-lg leading-relaxed text-center md:text-left">
              With over{" "}
              <span className="font-semibold text-primary">
                8 years of experience
              </span>{" "}
              in the tech industry, I've transitioned from Technology Management
              to high-level Software Engineering. My expertise lies in the
              Vue/Nuxt ecosystem and TypeScript, with a solid foundation in
              building national-scale platforms like FGTS Digital.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-center md:text-left">
              I am a firm believer in asynchronous work, continuous learning,
              and the power of clean, maintainable code.
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
                Experience & Projects
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                Professional experience across national-scale platforms, plus
                personal products I'm building and shipping on my own.
              </p>
            </div>
            <Button
              variant="default"
              size="lg"
              className="shadow-md hover:shadow-lg transition-all"
            >
              <a
                href="/Jonathan_Medeiros_CV.pdf"
                download="Jonathan_Medeiros_CV.pdf"
                className="flex items-center gap-2"
              >
                📄 Download CV
              </a>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-all">
              <h3 className="font-semibold text-lg mb-2 text-primary">
                NHS (Present)
              </h3>
              <p className="text-sm text-muted-foreground">
                Leading frontend across the EnergiView ecosystem for NHS
                Energia: a Quasar/Capacitor mobile app for inverter and
                nobreak monitoring, a React admin dashboard, and a Nuxt 4
                landing page — architecture decisions and AI-assisted
                delivery included.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-all">
              <h3 className="font-semibold text-lg mb-2 text-primary">
                Axon Technology
              </h3>
              <p className="text-sm text-muted-foreground">
                Architected responsive interfaces with Svelte, achieving a 50%
                boost in user engagement.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-all">
              <h3 className="font-semibold text-lg mb-2 text-primary">
                Serpro (FGTS Digital)
              </h3>
              <p className="text-sm text-muted-foreground">
                Contributed to a high-impact national platform, developing a
                reusable component library used by millions of Brazilian
                citizens.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">Skills</h2>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-lg bg-muted">
                <h3 className="font-semibold mb-2">Frontend</h3>
                <p className="text-sm text-muted-foreground">
                  Vue, Nuxt, React, TypeScript, Svelte
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted">
                <h3 className="font-semibold mb-2">DevOps</h3>
                <p className="text-sm text-muted-foreground">
                  Docker, AWS, CI/CD
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted">
                <h3 className="font-semibold mb-2">Soft Skills</h3>
                <p className="text-sm text-muted-foreground">
                  Async Communication, Self-guided work, Technical Leadership
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">Key Projects</h2>
            <div className="space-y-4 max-w-3xl mx-auto text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">
                  Enterprise Financial Platform (FGTS Digital):
                </strong>{" "}
                Scalable Angular architecture serving millions of users
                nationwide. Focused on accessibility and high-performance design
                systems.
              </p>
              <p>
                <strong className="text-foreground">
                  EnergiView Ecosystem (NHS Energia):
                </strong>{" "}
                Frontend architecture and development across four
                interconnected products: a Quasar/Capacitor mobile app
                (Android/iOS) for real-time monitoring of solar inverters and
                nobreaks; a React 19 + TanStack Query admin dashboard with
                Leaflet-based device mapping; a Quasar admin panel for
                managing devices, users and organizations, covered by
                Playwright E2E tests; and a Nuxt 4 marketing landing page
                deployed on AWS Lambda. AI-assisted workflows used throughout
                to optimize delivery and maintainability.
              </p>
              <p>
                <strong className="text-foreground">
                  High-Performance Interfaces (Axon):
                </strong>{" "}
                Architecture of Svelte-based applications with a 50% increase in
                user engagement through UX optimization.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">
              Personal Projects
            </h2>
            <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto">
              Side projects I build and maintain on my own time to explore new
              stacks end-to-end, from database to UI.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {personalProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
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
            <h1 className="text-3xl md:text-4xl font-bold">Let's Connect!</h1>
            <p className="text-muted-foreground">
              Feel free to reach out on any of these platforms
            </p>
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
            <p>© 2026 Jonathan Medeiros. Built with React & Tailwind CSS</p>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}
