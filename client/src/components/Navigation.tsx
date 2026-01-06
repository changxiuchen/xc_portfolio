import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location, navigate] = useLocation();

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith("/")) {
      // External route
      navigate(href);
      setIsOpen(false);
    } else {
      // Anchor link
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <button
          onClick={() => {
            navigate("/");
            setIsOpen(false);
          }}
          className="text-2xl font-bold text-primary hover:text-primary/80 transition-smooth"
        >
          &lt; XC /&gt;
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-foreground hover:text-primary transition-smooth"
            >
              {link.label}
            </button>
          ))}
          <ThemeToggle />
          <Button
            onClick={() => handleNavClick("#contact")}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Get in Touch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick("#contact")}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
