import { Briefcase, BookOpen } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      type: "work",
      title: "Part-time Developer & Operations",
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
      type: "work",
      title: "Wheelchair Assistance",
      period: "2022 - 2023",
      description: "Provided reliable support to passengers, learning the importance of dependability, communication, and understanding real-world problems.",
      highlights: [
        "Delivered consistent, high-quality service to passengers",
        "Developed strong communication and problem-solving skills",
        "Learned to approach challenges with calm and systematic thinking",
      ],
    },
    {
      type: "education",
      title: "Diploma in Software Engineering",
      company: "Singapore Polytechnic",
      period: "In Progress",
      description: "Comprehensive training in full-stack web development, mobile app development, UI/UX design, and database management.",
      highlights: [
        "Full-stack web development (PHP, ASP.NET Core, React)",
        "Mobile app development (Flutter)",
        "UI/UX design and prototyping",
        "Database design and management",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-4xl">
          {/* Section Title */}
          <h2 className="heading-section mb-4 text-foreground">Experience & Education</h2>
          <div className="w-16 h-1 bg-primary mb-12"></div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-primary">
                {/* Timeline dot */}
                <div className="absolute -left-4 top-0 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>

                {/* Content */}
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-start gap-3 mb-2">
                    {exp.type === "work" ? (
                      <Briefcase className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    ) : (
                      <BookOpen className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    )}
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
          <div className="mt-16 pt-16 border-t border-border">
            <h3 className="heading-subsection mb-8 text-foreground">Technical Skills</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-foreground mb-4">Backend & Full-Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {["PHP", "ASP.NET Core", "C#", "SQL Server", "MySQL", "Node.js"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-4">Frontend & Design</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "Tailwind CSS", "Figma", "Photoshop", "Illustrator"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-4">Mobile & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {["Flutter", "Git", "MVC Architecture", "Responsive Design", "Canva"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-4">Soft Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {["Problem Solving", "Team Leadership", "Communication", "Mentoring", "System Optimization"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
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
