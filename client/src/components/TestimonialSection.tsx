import { useEffect, useState } from "react";
import { FileText } from "lucide-react";

export default function TestimonialSection() {
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

    const section = document.getElementById("testimonials");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className={`py-20 md:py-32 bg-primary/5 border-y border-primary/20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          {/* Section Title */}
          <h2 className="heading-section mb-4 text-foreground text-center">What Others Say</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12"></div>

          {/* Testimonial Card */}
          <div className={`bg-card border border-border rounded-lg p-8 md:p-12 shadow-lg transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '200ms'}}>
            {/* Quote */}
            <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic border-l-4 border-primary pl-6">
              "Having Xiu Chen on our Intertech Team has been an absolute pleasure and he will certainly be a true asset in his pursuit. His dedication, attitude and potential capability will only get better given more leadership opportunities. I wholeheartedly recommend Xiu Chen as a valuable asset to any institution or organisation to any opportunities he seeks."
            </blockquote>

            {/* Full Testimonial Body */}
            <div className="prose prose-invert max-w-none mb-8 text-muted-foreground leading-relaxed space-y-4">
              <p>
                Xiu Chen came to our shop to learn to be part of our front and back end team and by the time he finished his internship with us, he was a strong team player and had learnt nearly all the ropes of what our experienced staff are capable of. Besides, he was part of a team that helped build a robust plan for our Ecommerce and social media road map.
              </p>
              <p>
                Xiu Chen's motivation to learn and contribute is commendable to his entire internship duration. He seized opportunities to learn to expand his knowledge and skill set. He contributed where his strengths in IT and Social Media outreach were, resulting in a stronger marketing outreach for Intertech. His contribution had definitely led to the success of our continued team projects. On top of that, he became extremely competent at handling all the front end work despite his short tenure.
              </p>
              <p>
                Xiu Chen was also extremely teachable and responsible. His commitment to excellence also meant that he delivered work that displayed attention to details which he committed to with a strong work ethic. He did not miss a session of work and would often stay back to complete work or to provide assistance when the need arose. What he did not know, he invested time and energy to learn them well which he then displayed at his work.
              </p>
              <p>
                Lastly, I also had the pleasure to witness Xiu Chen's growth as a leader. Through his proactive approach and initiative, he has overcome his personal barrier of being on the backend to lead and provide guidance to other interns, becoming a project leader and inspiring others. He had exhibited poise, confidence and a keen sense of responsibility that won him positive comments from co-workers and interns alike. His ability to be a strong team player also meant that he was always included in projects and that added on to building his leadership capabilities.
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-4 pt-6 border-t border-border mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                JG
              </div>
              <div>
                <p className="font-bold text-foreground">Jasmine Goh-Chew</p>
                <p className="text-primary font-semibold">Director of Intertech Hardware</p>
                <p className="text-sm text-muted-foreground">February 2024</p>
              </div>
            </div>

            {/* View Full Testimonial Button */}
            <a
              href="/testimonials/ChangXiuChen'sTestimonial.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-smooth"
            >
              <FileText className="w-4 h-4" />
              View Full Testimonial (PDF)
            </a>
          </div>

          {/* Context */}
          <div className={`mt-12 text-center text-muted-foreground max-w-2xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '400ms'}}>
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
