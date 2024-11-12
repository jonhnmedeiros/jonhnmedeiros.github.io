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
          <p>Hi! I'm Jonathan, I'm passionate about technology and creating solutions. In the last few years I've been specializing as a front end developer and transforming prototypes into reliable, intuitive, dynamic and secure web applications.</p>

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
            <Button className="min-w-32" variant="outline"><a href="https://www.instagram.com/jonhnmedeiros/" target="_blank" className="flex flex-row gap-2"><InstagramLogoIcon className="h-[1.2rem] w-[1.2rem]" />Instagram</a></Button>
          </div>

        </div>
      </section>
    </ThemeProvider>
  )
}
