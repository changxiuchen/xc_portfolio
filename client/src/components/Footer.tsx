import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/chang-xiu-chen-3710011ba",
      icon: Linkedin,
    },
    {
      label: "GitHub",
      href: "https://github.com/changxiuchen",
      icon: Github,
    },
    {
      label: "Email",
      href: "mailto:xiuchen.w@outlook.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-card border-t border-border py-12 md:py-16">
      <div className="container">
        <div className="max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">&lt; XC /&gt;</h3>
              <p className="text-muted-foreground">
                Full-stack developer & UI/UX designer building reliable solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-bold text-foreground mb-4">Connect</h4>
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-background rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary transition-smooth"
                      aria-label={link.label}
                      title={link.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border my-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Chang Xiu Chen. All rights reserved.
            </p>
            <p className="text-primary font-semibold text-sm">
              Steadfast. Reliable. User-Focused.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
