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
        <div className="grid md:grid-cols-2 gap-12 items-center">
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

          {/* Profile Picture */}
          <div className={`hidden md:flex justify-center transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{transitionDelay: '300ms'}}>
            <div className="relative w-80 h-80">
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-primary/50 to-primary blur-xl opacity-75 animate-pulse"></div>
              {/* Inner circle with border */}
              <div className="absolute inset-0 rounded-full border-4 border-primary/50 bg-gradient-to-br from-primary/10 to-transparent"></div>
              {/* Profile image */}
              <img
                src="/images/profile-hero.png"
                alt="Chang Xiu Chen"
                className="relative w-full h-full rounded-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
