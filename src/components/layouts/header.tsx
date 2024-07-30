import { Moon, Sun } from "lucide-react"
import { Link } from "react-router-dom";

import { Button, buttonVariants } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/providers/theme-provider"

export default function Header() {
    const { setTheme } = useTheme()

    return (
        <header className="fixed z-[50] top-0 left-0 right-0 bg-transparent backdrop-blur-[6px]">
            <div className="w-full h-auto bg-gray-50 shadow-sm dark:bg-transparent min-h-[4.5rem] flex items-center px-[5%]">

                <div className="w-full grid items-center grid-cols-8 md:grid-cols-12">
                    <div className="col-span-4">
                        <Button variant="link">
                            <a href="/" className="text-end">
                                <span className="text-black dark:text-white font-thin text-xl">jonathanmedeiros</span><span className="text-primary text-lg">.dev</span>
                            </a>
                        </Button>
                    </div>
                    <div className="col-span-4 hidden md:block m-auto">
                        <div className="flex gap-[3rem] items-center">
                            <Button variant="link" className="text-black dark:text-white"><a href="#about">About</a></Button>
                            <Button variant="link" className="text-black dark:text-white"><a href="#projects">Projects</a></Button>
                            <Button variant="link" className="text-black dark:text-white"><a href="#contact">Contact</a></Button>
                        </div>
                    </div>
                    <div className="col-span-4 flex items-center justify-end gap-2 md:gap-10">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => setTheme("light")}>
                                    Light
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("dark")}>
                                    Dark
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("system")}>
                                    System
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>



















            </div>

        </header>
    )
}
