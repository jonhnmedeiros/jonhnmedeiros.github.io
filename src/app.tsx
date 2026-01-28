import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";
import { useEffect } from "react";

import Header from "./components/layouts/header";
import { Button } from "./components/ui/button";
import { ThemeProvider } from "./providers/theme-provider";
import { ProjectCard } from "./components/project-card";
import { ScrollArea } from "./components/ui/scroll-area";
import { ScrollBar } from "./components/ui/scroll-area";

export function App() {
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const projects = [
    {
      title: "Login Page",
      description:
        "A Fullstack project for a login page with authentication and database.",
      image: "/projects/login_page.png",
      tags: ["Angular", "TypeScript", "Node.js", "Java"],
      codeLink: "https://github.com/jonhnmedeiros/login-page",
      liveLink: "https://login-page-bay-one.vercel.app/login",
    },
    {
      title: "Region Select",
      description:
        "A Fullstack project for a test to a company. Region select with a list of cities and states.",
      image: "/projects/region_select.png",
      tags: ["Angular", "TypeScript", "Node.js"],
      codeLink: "https://github.com/jonhnmedeiros/region_select",
      liveLink: "https://region-select-alpha.vercel.app/",
    },
    {
      title: "To-do List Coopers",
      description:
        "Manage your tasks, landing page with forms to contact, authentication and database.",
      image: "/projects/coopers-todo.png",
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
      ],
      codeLink: "https://github.com/jonhnmedeiros/to-do-coopers",
      liveLink: "https://to-do-coopers.vercel.app",
    },
    {
      title: "Plann.er",
      description: "Plann.er helps you to organize and share your trips.",
      image: "/projects/plann_er.png",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Node.js"],
      codeLink: "https://github.com/jonhnmedeiros/plann.er",
      liveLink: "",
    },
    {
      title: "Portfolio",
      description: "Project to show my skills and projects.",
      image: "/projects/jonathanmedeiros_dev.jpeg",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      codeLink: "https://github.com/jonhnmedeiros/jonhnmedeiros.github.io",
      liveLink: "https://jonhnmedeiros.github.io/",
    },
    {
      title: "Test API's",
      description: "A Project to test and implements API's",
      image: "/projects/test_api.png",
      tags: ["Angular", "TypeScript", "NG-ZORRO"],
      codeLink: "https://github.com/jonhnmedeiros/test_api",
      liveLink: "https://test-api-seven-beta.vercel.app",
    },
    {
      title: "DevLinks",
      description: "A landing page to show links and social networks.",
      image: "/projects/devlinks.png",
      tags: ["HTML", "CSS", "JavaScript"],
      codeLink: "https://github.com/jonhnmedeiros/devlinks",
      liveLink: "https://jonhn.dev",
    },
  ];

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
            <Button
              variant="default"
              size="lg"
              className="min-w-[150px] shadow-lg hover:shadow-xl transition-all"
            >
              <a href="#contact">Get in touch</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="min-w-[150px] hover:bg-accent transition-all"
            >
              <a href="#projects">View my experiences</a>
            </Button>
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
                Over the years, I've had the privilege to work on diverse
                projects that have honed my skills and expanded my expertise.
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
                Leading frontend initiatives with Vue 3 and Nuxt, optimizing
                workflows through AI-driven development.
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
            <h2 className="text-2xl font-semibold text-center">
              Featured Projects
            </h2>
            <ScrollArea className="w-full whitespace-nowrap rounded-lg">
              <div className="flex w-max space-x-4 p-4">
                {projects.map((project, index) => {
                  return <ProjectCard key={index} {...project} />;
                })}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
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
            <Button
              className="min-w-[140px] shadow-md hover:shadow-lg transition-all"
              variant="outline"
              size="lg"
            >
              <a
                href="https://www.linkedin.com/in/jonathanmedeiros/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row gap-2 items-center"
              >
                <LinkedInLogoIcon className="h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button
              className="min-w-[140px] shadow-md hover:shadow-lg transition-all"
              variant="outline"
              size="lg"
            >
              <a
                href="https://github.com/jonhnmedeiros"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row gap-2 items-center"
              >
                <GitHubLogoIcon className="h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button
              className="min-w-[140px] shadow-md hover:shadow-lg transition-all"
              variant="outline"
              size="lg"
            >
              <a
                href="https://www.instagram.com/jonathan.f.medeiros/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row gap-2 items-center"
              >
                <InstagramLogoIcon className="h-5 w-5" />
                Instagram
              </a>
            </Button>
          </div>
          <div className="pt-8 text-sm text-muted-foreground border-t">
            <p>© 2026 Jonathan Medeiros. Built with React & Tailwind CSS</p>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}
