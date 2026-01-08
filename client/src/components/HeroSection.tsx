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
            {/* Greeting */}
            <p className={`text-primary font-mono text-lg mb-4 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              &lt;hello&gt;
            </p>

            {/* Main Headline with Name */}
            <h1 className={`heading-hero mb-2 text-foreground transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '100ms'}}>
              I'm <span className="text-primary">Chang Xiu Chen</span>
            </h1>

            {/* Current Role */}
            <h2 className={`text-2xl md:text-3xl font-semibold text-muted-foreground mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '150ms'}}>
              Diploma student at Nanyang Polytechnic
            </h2>

            {/* Specialization */}
            <p className={`text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '200ms'}}>
              Studying Diploma in Infocomm Media and Engineering, specializing in Software Application Development. 
              Passionate about building reliable, user-focused solutions through web development, mobile apps, and UI/UX design.
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
