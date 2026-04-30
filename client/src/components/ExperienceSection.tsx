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
      title: "Social Media Content Specialist",
      company: "The Brake Shop SG",
      period: "January 2026 – Present",
      description: "Developing and executing social media strategies across Facebook and Instagram, producing high-engagement visual content, and managing targeted ad campaigns to drive reach and engagement.",
      highlights: [
        "Develop and execute comprehensive social media strategies using Meta Business Suite",
        "Produce high-engagement visual content including photography and short-form video reels edited with CapCut",
        "Design professional promotional posters and digital assets using Canva",
        "Manage targeted ad campaigns and conduct audience research to optimize reach, engagement, and click-through rates",
      ],
    },
    {
      title: "Project Leader (Intern) & IT Assistant",
      company: "Intertech Hardware",
      period: "2023 – Present",
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
      period: "2022 – Present",
      description: "Provided reliable support to international passengers, learning the importance of dependability, communication, and understanding real-world accessibility needs.",
      highlights: [
        "Assist international passengers with language barriers using patience and clear guidance",
        "Apply insights from accessibility needs to inform inclusive design decisions",
        "Maintain strict punctuality and readiness adhering to tight airport schedules",
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
        <div className="max-w-4xl mx-auto px-4 md:px-8">
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
          <div className={`mt-16 p-8 bg-card border border-border rounded-lg transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
            style={{ transitionDelay: "300ms" }}
          >
            <h3 className="heading-subsection mb-8 text-foreground">Technical Skills</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-foreground mb-4">Backend & Databases</h4>
                <div className="flex flex-wrap gap-2">
                  {["PHP", "ASP.NET Core", "C#", "SQL Server", "MySQL", "jQuery", "JavaScript"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/20 text-foreground rounded-full text-sm hover:bg-primary/30 transition-colors duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-4">Frontend & Design</h4>
                <div className="flex flex-wrap gap-2">
                  {["HTML", "CSS", "JavaScript", "Figma", "Photoshop", "Illustrator"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/20 text-foreground rounded-full text-sm hover:bg-primary/30 transition-colors duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-4">Mobile & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {["Flutter", "Dart", "Git", "Shopify", "Lightspeed X", "Meta Business Suite", "CapCut", "Responsive Design", "Canva", "MVC Architecture"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/20 text-foreground rounded-full text-sm hover:bg-primary/30 transition-colors duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-4">Soft Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {["Problem Solving", "Team Leadership", "Communication", "Mentoring", "Project Management", "Social Media Marketing", "Data Analysis", "System Optimization"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/20 text-foreground rounded-full text-sm hover:bg-primary/30 transition-colors duration-300">
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
