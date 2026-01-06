import { BookOpen } from "lucide-react";
import { useEffect, useState } from "react";

export default function EducationSection() {
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

    const section = document.getElementById("education");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      title: "Diploma in Infocomm & Media Engineering",
      company: "Nanyang Polytechnic",
      period: "Completing 2027",
      description: "Comprehensive training in full-stack web development, mobile app development, UI/UX design, and database management.",
      highlights: [
        "Full-stack web development (PHP, ASP.NET Core, React)",
        "Mobile app development (Flutter & Dart)",
        "UI/UX design and prototyping",
        "Database design and management with SQL Server",
      ],
    },
    {
      title: "Higher Nitec in IT Applications Development",
      company: "ITE College Central Singapore",
      period: "2024",
      description: "Advanced training in web applications and IT systems development covering 24 months of intensive study.",
      highlights: [
        "Web application development",
        "Mobile app development",
        "UI/UX design and software testing",
        "IT systems and infrastructure",
      ],
    },
    {
      title: "Nitec in Web Applications",
      company: "ITE College Central Singapore",
      period: "2023",
      description: "Foundational training in web application development and design.",
      highlights: [
        "Web development fundamentals",
        "Database basics",
        "User interface design",
        "Front-end technologies",
      ],
    },
  ];

  return (
    <section 
      id="education" 
      className={`py-20 md:py-32 bg-card/50 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container">
        <div className="max-w-4xl">
          {/* Section Title */}
          <h2 className="heading-section mb-4 text-foreground">Education</h2>
          <div className="w-16 h-1 bg-primary mb-12"></div>

          {/* Timeline */}
          <div className="space-y-8">
            {education.map((edu, idx) => (
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
                <div className="bg-background p-6 rounded-lg border border-border hover:border-primary/50 transition-colors duration-300">
                  <div className="flex items-start gap-3 mb-2">
                    <BookOpen className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{edu.title}</h3>
                      {edu.company && (
                        <p className="text-primary font-semibold">{edu.company}</p>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3">{edu.period}</p>
                  <p className="text-foreground mb-4">{edu.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, i) => (
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
        </div>
      </div>
    </section>
  );
}
