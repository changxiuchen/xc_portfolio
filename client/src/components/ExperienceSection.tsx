import { Briefcase } from "lucide-react";
import { useEffect, useState } from "react";

export default function ExperienceSection() {
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

    const section = document.getElementById("experience");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Project Leader (Intern) & IT Assistant",
      company: "Intertech Hardware",
      period: "2023 - Present",
      description: "Managing e-commerce platforms (Shopify, Lazada), optimizing POS inventory systems (Lightspeed X), and mentoring new team members on system operations and best practices.",
      highlights: [
        "Manage Shopify store with product updates and pricing optimization",
        "Optimize Lazada seller platform for better visibility and sales",
        "Maintain and improve POS inventory system (Lightspeed X)",
        "Train new part-timers on system operations and customer service",
      ],
    },
    {
      title: "Passenger Service Assistant (Wheelchair Assistance)",
      company: "Changi Airport (SATS)",
      period: "2022 - Present",
      description: "Provided reliable support to international passengers, learning the importance of dependability, communication, and understanding real-world accessibility needs.",
      highlights: [
        "Assisted international passengers with language barriers using patience and clear guidance",
        "Applied insights from assisting elderly passengers to design accessible interfaces",
        "Maintained strict punctuality and readiness, adhering to tight airport schedules",
      ],
    },
  ];

  return (
    <section 
      id="experience" 
      className={`py-20 md:py-32 bg-background transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container">
        <div className="max-w-4xl">
          {/* Section Title */}
          <h2 className="heading-section mb-4 text-foreground">Work Experience</h2>
          <div className="w-16 h-1 bg-primary mb-12"></div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div 
                key={idx} 
                className={`relative pl-8 border-l-2 border-primary transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-4 top-0 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>

                {/* Content */}
                <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors duration-300">
                  <div className="flex items-start gap-3 mb-2">
                    <Briefcase className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      {exp.company && (
                        <p className="text-primary font-semibold">{exp.company}</p>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                  <p className="text-foreground mb-4">{exp.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className={`mt-16 pt-16 border-t border-border transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
            style={{ transitionDelay: "300ms" }}
          >
            <h3 className="heading-subsection mb-8 text-foreground">Technical Skills</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-foreground mb-4">Backend & Databases</h4>
                <div className="flex flex-wrap gap-2">
                  {["PHP", "ASP.NET Core", "C#", "SQL Server", "MySQL", "Node.js"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-4">Frontend & Design</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "Tailwind CSS", "Figma", "Photoshop", "Illustrator"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-4">Mobile & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {["Flutter", "Git", "MVC Architecture", "Responsive Design", "Canva"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-4">Soft Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {["Problem Solving", "Team Leadership", "Communication", "Mentoring", "System Optimization"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
