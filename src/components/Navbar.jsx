import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Achievements", href: "#achievements" },
  { name: "Certifications", href: "#certifications" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        "py-3 bg-background/80 backdrop-blur-md shadow-sm border-b border-border/50"
      )}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:mx-auto xl:max-w-6xl flex items-center justify-between">
        <a
          className="text-lg sm:text-xl font-bold flex items-center"
          href="#home"
        >
          <span className="relative z-10">
            <span className="text-rainbow">TanMai</span> Portfolio
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* mobile nav toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-foreground/80 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* mobile menu overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg animate-fade-in">
          <div className="flex flex-col py-4 px-6 space-y-4">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors duration-300 py-2 border-b border-border/10 last:border-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
