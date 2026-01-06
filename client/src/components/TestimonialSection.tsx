import { Star } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="py-20 md:py-32 bg-primary/5 border-y border-primary/20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="heading-section mb-4 text-foreground text-center">What Others Say</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12"></div>

          {/* Testimonial Card */}
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-lg">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic border-l-4 border-primary pl-6">
              "Having Xiu Chen on our Intertech Team has been an absolute pleasure and he will certainly be a true asset in his pursuit. His dedication, attitude and potential capability will only get better given more leadership opportunities. I wholeheartedly recommend Xiu Chen as a valuable asset to any institution or organisation to any opportunities he seeks."
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                JG
              </div>
              <div>
                <p className="font-bold text-foreground">Jasmine Goh-Chew</p>
                <p className="text-primary font-semibold">Director of Intertech Hardware</p>
                <p className="text-sm text-muted-foreground">February 2024</p>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="font-bold text-foreground mb-4">Recognized for:</h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {[
                  "Strong team player with excellent collaboration skills",
                  "Commendable motivation to learn and contribute",
                  "Extremely teachable and responsible",
                  "Demonstrated leadership and project management",
                  "Commitment to excellence and attention to detail",
                  "Ability to overcome personal barriers and lead others",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Context */}
          <div className="mt-12 text-center text-muted-foreground max-w-2xl mx-auto">
            <p>
              This testimonial is from my internship at Intertech Hardware (September 2023 - February 2024), 
              where I worked as a project leader and IT assistant, managing e-commerce platforms and mentoring team members.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
