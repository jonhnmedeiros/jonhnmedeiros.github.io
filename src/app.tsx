import { LinkedInLogoIcon, GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";

import Header from "./components/layouts/header";
import { Button } from "./components/ui/button";
import { ThemeProvider } from "./providers/theme-provider";
import { ProjectCard } from "./components/project-card";
import { ScrollArea } from "./components/ui/scroll-area";
import { ScrollBar } from "./components/ui/scroll-area";

export function App() {
  const projects = [
    {
      title: "Login Page",
      description: "A Fullstack project for a login page with authentication and database.",
      image: "/projects/login_page.png",
      tags: [ "Angular", "TypeScript", "Node.js", "Java" ],
      codeLink: "https://github.com/jonhnmedeiros/login-page",
      liveLink: "https://login-page-bay-one.vercel.app/login",
    },
    {
      title: "Region Select",
      description: "A Fullstack project for a test to a company. Region select with a list of cities and states.",
      image: "/projects/region_select.png",
      tags: [ "Angular", "TypeScript", "Node.js" ],
      codeLink: "https://github.com/jonhnmedeiros/region_select",
      liveLink: "https://region-select-alpha.vercel.app/",
    },
    {
      title: "To-do List Coopers",
      description: "Manage your tasks, landing page with forms to contact, authentication and database.",
      image: "/projects/coopers-todo.png",
      tags: [ "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB" ],
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

      <section id="about" className="h-screen flex items-center justify-center">
        <div className="max-w-3xl w-full px-6 text-center space-y-10">
          <h1 className="text-3xl font-bold">About me</h1>
          <p>I’m a Software Analyst and Frontend Developer at NHS, passionate about building scalable web applications with Vue, Nuxt, and Clean Architecture.
With an MBA in Software Engineering, I combine technical expertise, UX focus, and AI-assisted coding to create innovative and efficient digital solutions.
Always driven by clean code, performance, and user experience.

⸻

Currently, I design and develop modern applications using Vue, Nuxt, Docker, and AWS, applying Clean Architecture principles to ensure scalability, maintainability, and high performance.

At Serpro Brazil, I contributed to the FGTS Digital project, a platform of national importance, where I implemented a reusable Angular component library and automated monitoring, improving workflow efficiency and system reliability.

As Technology Manager at CWB Tecnologia, I led Help Desk and Service Desk teams for nearly five years, optimizing IT infrastructure, managing cloud migrations (AWS, Azure, and Google Cloud), and improving user satisfaction through a customer-focused approach.

I’m passionate about clean code, UX, documentation, and AI-driven development, creating guides and FAQs that promote knowledge sharing and long-term maintainability.
With experience in virtualized and containerized environments, I work collaboratively with cross-functional teams to deliver innovative, reliable, and user-centered solutions.</p>

        </div>
      </section>
      <section id="projects" className="h-screen flex items-center justify-center">
        <div className="max-w-6xl w-full px-6 text-center space-y-10">
          <h1 className="text-3xl font-bold">Projects</h1>

          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex w-max space-x-2 p-2">
              {projects.map((project) => {
                return (<ProjectCard {...project} />)
              })}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

        </div>
      </section>
      <section id="contact" className="h-screen flex items-center justify-center">
        <div className="max-w-3xl w-full px-6 text-center space-y-10">
          <h1 className="text-3xl font-bold">Contact me!</h1>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="min-w-32" variant="outline"><a href="https://www.linkedin.com/in/jonathanmedeiros/" target="_blank" className="flex flex-row gap-2"><LinkedInLogoIcon className="h-[1.2rem] w-[1.2rem]" />LinkedIn</a></Button>
            <Button className="min-w-32" variant="outline"><a href="https://github.com/jonhnmedeiros" target="_blank" className="flex flex-row gap-2" ><GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />GitHub</a></Button>
            <Button className="min-w-32" variant="outline"><a href="https://www.instagram.com/jonhn.me/" target="_blank" className="flex flex-row gap-2"><InstagramLogoIcon className="h-[1.2rem] w-[1.2rem]" />Instagram</a></Button>
          </div>

        </div>
      </section>
    </ThemeProvider>
  )
}
