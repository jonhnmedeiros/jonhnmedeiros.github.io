import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ScrollButton } from "@/components/ui/scroll-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/providers/theme-provider";

export default function Header() {
  const { setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed z-50 top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b shadow-sm">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Button variant="ghost" className="hover:bg-transparent p-0">
            <a href="/" className="flex items-center gap-1">
              <span className="text-foreground font-semibold text-xl md:text-2xl">
                jonhn
              </span>
              <span className="text-primary text-lg md:text-xl">.me</span>
            </a>
          </Button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
          <ScrollButton
            scrollTo="#about"
            variant="ghost"
            className="text-foreground hover:text-primary transition-colors"
          >
            About me
          </ScrollButton>
          <ScrollButton
            scrollTo="#projects"
            variant="ghost"
            className="text-foreground hover:text-primary transition-colors"
          >
            Experience
          </ScrollButton>
          <ScrollButton
            scrollTo="#contact"
            variant="ghost"
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </ScrollButton>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-accent">
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
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

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-accent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            <ScrollButton
              scrollTo="#about"
              variant="ghost"
              className="w-full justify-start text-foreground hover:text-primary hover:bg-accent"
              onNavigate={() => setMobileMenuOpen(false)}
            >
              About
            </ScrollButton>
            <ScrollButton
              scrollTo="#projects"
              variant="ghost"
              className="w-full justify-start text-foreground hover:text-primary hover:bg-accent"
              onNavigate={() => setMobileMenuOpen(false)}
            >
              Experience
            </ScrollButton>
            <ScrollButton
              scrollTo="#contact"
              variant="ghost"
              className="w-full justify-start text-foreground hover:text-primary hover:bg-accent"
              onNavigate={() => setMobileMenuOpen(false)}
            >
              Contact
            </ScrollButton>
          </nav>
        </div>
      )}
    </header>
  );
}
