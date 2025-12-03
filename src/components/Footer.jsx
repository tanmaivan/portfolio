import {
  ArrowUp,
  Github,
  Linkedin,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Code,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-0 sm:px-4 bg-card relative border-t border-border mt-12 pt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-3 text-left">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a
                  href="mailto:hello@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  tan.maivande@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a
                  href="tel:+84976041145"
                  className="hover:text-primary transition-colors"
                >
                  +84 976 041 145
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span>Ho Chi Minh City, Vietnam</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3 md:justify-self-end text-center md:text-right">
            <div className="flex items-center gap-4 justify-center md:justify-end">
              <a
                href="https://linkedin.com/in/tanmaivan"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-110 group"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-black/80 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-0 pointer-events-none z-50">
                  LinkedIn
                </span>
              </a>
              <a
                href="https://github.com/tanmaivan"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-110 group"
                aria-label="GitHub"
              >
                <Github size={20} />
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-black/80 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-0 pointer-events-none z-50">
                  GitHub
                </span>
              </a>
              <a
                href="https://facebook.com/mvntnde"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-110 group"
                aria-label="Facebook"
              >
                <Facebook size={20} />
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-black/80 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-0 pointer-events-none z-50">
                  Facebook
                </span>
              </a>
              {/* <a
                href="https://leetcode.com/u/tanmaivan/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-110 group"
                aria-label="LeetCode"
              >
                <Code size={20} />
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-black/80 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-0 pointer-events-none z-50">
                  LeetCode
                </span>
              </a> */}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            &copy; {new Date().getFullYear()} Tan Mai Van
          </p>
          <a
            href="#home"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
