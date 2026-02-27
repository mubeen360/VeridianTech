import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useTheme } from "@/context/ThemeContext";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", target: "home", offset: 0 },
  { label: "About", target: "about", offset: -80 },
  { label: "Services", target: "services", offset: -80 },
  { label: "Portfolio", target: "portfolio", offset: -80 },
  { label: "Pricing", target: "pricing", offset: -80 },
  { label: "Contact", target: "contact", offset: -80 },
];

const sectionIds = navLinks.map((l) => l.target);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((target: string, offset: number) => {
    setMobileOpen(false);

    if (location.pathname !== "/") {
      navigate(`/#${target}`);
      return;
    }

    const el = document.getElementById(target);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: "smooth" });
      window.history.replaceState(null, "", `#${target}`);
    }
  }, [location.pathname, navigate]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      animate={{
        backdropFilter: scrolled ? "blur(20px)" : "blur(12px)",
      }}
    >
      <div className="border-b border-border dark:border-primary/20 bg-background/60 dark:bg-background/40 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
          {/* Logo */}
          <button onClick={() => scrollTo("home", 0)} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-heading font-bold text-primary-foreground text-lg">
              V
            </div>
            <span className="font-heading font-semibold text-lg text-foreground">
              Veridian<span className="text-veridian-glow">Tech</span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollTo(link.target, link.offset)}
                className={`relative text-sm font-medium transition-colors hover:text-foreground ${activeSection === link.target
                  ? "text-foreground"
                  : "text-muted-foreground"
                  }`}
              >
                {link.label}
                {activeSection === link.target && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-veridian-glow"
                    style={{ boxShadow: "0 0 8px hsl(155 100% 50% / 0.6)" }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Right side: theme toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="w-9 h-9 rounded-full"
                  aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {theme === "dark" ? (
                      <motion.div
                        key="sun"
                        initial={{ rotate: -90, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        exit={{ rotate: 90, scale: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Sun size={18} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="moon"
                        initial={{ rotate: 90, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        exit={{ rotate: -90, scale: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Moon size={18} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                Switch to {theme === "dark" ? "Light" : "Dark"} Mode
              </TooltipContent>
            </Tooltip>

            <Button
              onClick={() => scrollTo("contact", -80)}
              className="bg-primary hover:bg-veridian-light text-primary-foreground font-medium"
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile toggle */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            <button
              className="text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.target}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <button
                    onClick={() => scrollTo(link.target, link.offset)}
                    className={`block text-lg font-medium py-2 w-full text-left ${activeSection === link.target
                      ? "text-veridian-glow"
                      : "text-muted-foreground"
                      }`}
                  >
                    {link.label}
                  </button>
                </motion.div>
              ))}
              <Button
                onClick={() => scrollTo("contact", -80)}
                className="mt-2 bg-primary hover:bg-veridian-light text-primary-foreground w-full"
              >
                Get a Quote
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
