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
      title: "Portfolio App",
      description: "Project Web to show my jobs",
      image: "/projects/plann_er.jpeg",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      codeLink: " ",
      liveLink: " ",
    },
    {
      title: "Portfolio App",
      description: "Project Web to show my jobs",
      image: "/projects/plann_er.jpeg",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      codeLink: " ",
      liveLink: " ",
    },
    {
      title: "Portfolio App",
      description: "Project Web to show my jobs",
      image: "/public/projects/plann_er.jpeg",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      codeLink: " ",
      liveLink: " ",
    },
    {
      title: "Portfolio App",
      description: "Project Web to show my jobs",
      image: "/public/projects/plann_er.jpeg",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      codeLink: " ",
      liveLink: " ",
    },
    {
      title: "Portfolio App",
      description: "Project Web to show my jobs",
      image: "/public/projects/plann_er.jpeg",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      codeLink: " ",
      liveLink: " ",
    },
  ];


  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />

      <section id="about" className="h-screen flex items-center justify-center">
        <div className="max-w-3xl w-full px-6 text-center space-y-10">
          <h1 className="text-3xl font-bold">About me</h1>
          <p>Hi! I'm Jonathan, I'm passionate about technology and creating solutions. In the last few years I've been specializing as a front end developer and transforming prototypes into reliable, intuitive, dynamic and secure web applications.</p>

        </div>
      </section>
      <section id="projects" className="h-screen flex items-center justify-center">
        <div className="max-w-5xl w-full px-6 text-center space-y-10">
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
            <Button className="min-w-32" variant="outline"><a href="https://www.instagram.com/jonhnmedeiros/" target="_blank" className="flex flex-row gap-2"><InstagramLogoIcon className="h-[1.2rem] w-[1.2rem]" />Instagram</a></Button>
          </div>

        </div>
      </section>
    </ThemeProvider>
  )
}
