import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
          <h1 className={`heading-hero mb-6 text-foreground transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Building reliable solutions,{" "}
            <span className="text-primary">one line at a time</span>
          </h1>

          {/* Subheading */}
          <p className={`text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '200ms'}}>
            I'm a full-stack developer and UI/UX designer who believes in solving problems systematically. 
            With a background in web development, mobile apps, and design, I create solutions that are 
            steadfast, reliable, and focused on the user experience.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '400ms'}}>
            <Button
              onClick={() => handleScroll("#projects")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg flex items-center gap-2 transition-all duration-300"
              size="lg"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              onClick={() => handleScroll("#contact")}
              variant="outline"
              size="lg"
              className="border-border text-foreground hover:bg-card hover:border-primary/50 transition-all duration-300"
            >
              Get in Touch
            </Button>
          </div>


        </div>
      </div>
    </section>
  );
}
