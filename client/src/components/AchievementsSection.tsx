import { Award, Trophy } from "lucide-react";

export default function AchievementsSection() {
  const achievements = [
    {
      title: "Director's List (Academic)",
      issuer: "NYP & ITE",
      period: "Multiple Semesters (2022-2025)",
      description: "Awarded to the Top 10-15% of the cohort for consistent academic excellence.",
      icon: Trophy,
    },
    {
      title: "Edusave Merit Bursary",
      issuer: "Singapore Government",
      period: "2023-2025",
      description: "Awarded to the Top 25% of the cohort for academic performance and good conduct.",
      icon: Award,
    },
    {
      title: "EAGLES Award (Leadership)",
      issuer: "ITE",
      period: "2023 S2",
      description: "Selected from the Top 10% for outstanding leadership and service to the community.",
      icon: Trophy,
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Achievements & Awards</h2>
          <p className="text-lg text-muted-foreground">Recognition for academic excellence and leadership</p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, idx) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={idx}
                className="group relative bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2 text-foreground">{achievement.title}</h3>
                <p className="text-sm text-primary font-semibold mb-2">{achievement.issuer}</p>
                <p className="text-xs text-muted-foreground mb-3">{achievement.period}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>

                {/* Decorative bottom border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
