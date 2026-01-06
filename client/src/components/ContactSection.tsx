import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "xiuchen.w@outlook.com",
      href: "mailto:xiuchen.w@outlook.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+65 88669245",
      href: "tel:+6588669245",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/changxiuchen",
      href: "https://github.com/changxiuchen",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-3xl">
          {/* Section Title */}
          <h2 className="heading-section mb-4 text-foreground">Let's Connect</h2>
          <div className="w-16 h-1 bg-primary mb-12"></div>

          {/* Main Message */}
          <p className="text-lg text-foreground mb-12 leading-relaxed">
            I'm always interested in new opportunities, collaborations, and conversations about 
            technology, design, and problem-solving. Whether you have a project in mind, want to 
            discuss ideas, or just want to say hello—feel free to reach out. I'll get back to you 
            as soon as possible.
          </p>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group"
                >
                  <div className="bg-card border border-border p-6 rounded-lg hover:border-primary transition-smooth">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">{method.label}</h3>
                        <p className="text-muted-foreground mt-1 group-hover:text-primary transition-smooth">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Primary CTA */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to work together?</h3>
            <p className="text-foreground mb-6">
              Send me an email or give me a call. I'm excited to hear about your project!
            </p>
            <a href="mailto:xiuchen.w@outlook.com">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                Send me an Email
              </Button>
            </a>
          </div>

          {/* Response Time */}
          <p className="text-center text-muted-foreground mt-8">
            I typically respond within 24-48 hours. Looking forward to connecting with you!
          </p>
        </div>
      </div>
    </section>
  );
}
