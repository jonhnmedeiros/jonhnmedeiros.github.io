import Header from "./components/layouts/header";
import { Button } from "./components/ui/button";
import { ThemeProvider } from "./providers/theme-provider";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />

      <div id="about" className="h-screen flex items-center justify-center slide-in-from-top-1">
        <div className="max-w-3xl w-full px-6 text-center space-y-10">
          <h1 className="text-3xl font-bold">About me</h1>
          <p>Hi! I'm Jonathan, I'm passionate about technology and creating solutions. In the last few years I've been specializing as a front end developer and transforming prototypes into reliable, intuitive, dynamic and secure web applications.</p>

        </div>
      </div>
      <div id="projects" className="h-screen flex items-center justify-center">
        <div className="max-w-3xl w-full px-6 text-center space-y-10">
          <h1 className="text-3xl font-bold">Projects</h1>
          <h1>Hello Worlds</h1>
          <h1>Hello Worlds</h1>
        </div>
      </div>
      <div id="contact" className="h-screen flex items-center justify-center">
        <div className="max-w-3xl w-full px-6 text-center space-y-10">
          <h1 className="text-3xl font-bold">Contact me!</h1>
          <div className="flex flex-row justify-center space-x-10">
            <Button variant="outline"><a href="https://www.linkedin.com/in/jonathanmedeiros/" target="_blank">Linkedin</a></Button>
            <Button variant="outline"><a href="https://github.com/jonhnmedeiros" target="_blank">GitHub</a></Button>
            <Button variant="outline"><a href="https://www.instagram.com/jonhnmedeiros/" target="_blank">Instagram</a></Button>
          </div>

        </div>
      </div>
    </ThemeProvider>
  )
}
