
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



  return (
    <section id="about" className={`py-20 md:py-32 bg-card/50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
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
