import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const qualities = [
    {
      title: "Steadfast",
      description: "Unwavering commitment to excellence and delivering quality work, no matter the challenge.",
    },
    {
      title: "Reliable",
      description: "Consistent performer who builds trust through dependability and never misses a commitment.",
    },
    {
      title: "User-Focused",
      description: "Every solution is designed with the end user in mind, prioritizing their experience.",
    },
  ];

  return (
    <section id="about" className={`py-20 md:py-32 bg-card/50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container">
        <div className="max-w-4xl">
          {/* Section Title */}
          <h2 className="heading-section mb-4 text-foreground">Who I Am</h2>
          <div className="w-16 h-1 bg-primary mb-12"></div>

          {/* Main Bio */}
          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              I'm a software engineer who approaches every problem with a clear methodology: 
              stay calm, break it into smaller parts, and solve systematically. This philosophy 
              has shaped how I work—whether building web applications, designing user interfaces, 
              or managing complex systems.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              My journey spans from wheelchair assistance work, where I learned the importance 
              of reliability and human connection, to tech roles where I've honed my problem-solving 
              skills. At Intertech Hardware, I manage e-commerce platforms, optimize inventory systems, 
              and mentor new team members—constantly learning and growing.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              I believe that great software is built on three foundations: technical excellence, 
              thoughtful design, and genuine care for the user. That's what drives me every day.
            </p>
          </div>

          {/* Three Qualities */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {qualities.map((quality, idx) => (
              <div key={quality.title} className={`bg-background p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${idx * 150}ms`}}>
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-bold text-foreground">{quality.title}</h3>
                </div>
                <p className="text-muted-foreground">{quality.description}</p>
              </div>
            ))}
          </div>

          {/* Personal Touch */}
          <div className={`mt-16 p-8 bg-primary/10 border border-primary/20 rounded-lg transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '450ms'}}>
            <p className="text-foreground">
              When I'm not coding or designing, I stay active through gym workouts (3x weekly), 
              basketball, volleyball, and bouldering with friends. I believe a balanced life 
              leads to better problem-solving and creativity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
