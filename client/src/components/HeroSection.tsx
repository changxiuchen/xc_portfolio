import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-background">
      <div className="container">
        <div className="max-w-3xl">
          {/* Main Headline */}
          <h1 className="heading-hero mb-6 text-foreground">
            Building reliable solutions,{" "}
            <span className="text-primary">one line at a time</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            I'm a full-stack developer and UI/UX designer who believes in solving problems systematically. 
            With a background in web development, mobile apps, and design, I create solutions that are 
            steadfast, reliable, and focused on the user experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => handleScroll("#projects")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2"
              size="lg"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              onClick={() => handleScroll("#contact")}
              variant="outline"
              size="lg"
              className="border-border text-foreground hover:bg-card"
            >
              Get in Touch
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 pt-16 border-t border-border grid grid-cols-3 gap-8">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-primary">4+</p>
              <p className="text-sm text-muted-foreground mt-2">Projects Completed</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-primary">3+</p>
              <p className="text-sm text-muted-foreground mt-2">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground mt-2">Committed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
