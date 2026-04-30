import { ArrowLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Resume() {
  const [, navigate] = useLocation();

  const handleDownloadPDF = () => {
    // Defer print to avoid blocking the UI thread (fixes INP issue)
    setTimeout(() => window.print(), 100);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container max-w-4xl">
          {/* Header with Back Button */}
          <div className="no-print flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <h1 className="text-4xl font-bold text-foreground">Resume</h1>
            <div className="flex flex-wrap gap-2 md:gap-3">
              <Button
                onClick={handleDownloadPDF}
                className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Download className="w-4 h-4" />
                PDF
              </Button>
              <Button
                onClick={() => navigate("/")}
                variant="outline"
                className="flex items-center gap-2 border-border text-foreground hover:bg-card"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
            </div>
          </div>

          {/* Resume Content */}
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 space-y-8">
            {/* Header */}
            <div className="border-b border-border pb-6">
              <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
                <img
                  src="/images/profile.jpg"
                  alt="Chang Xiu Chen"
                  className="w-24 h-32 md:w-32 md:h-40 rounded-lg object-cover border-2 border-primary flex-shrink-0"
                />
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-2">Chang Xiu Chen</h2>
                  <p className="text-primary font-semibold mb-3">Full-Stack Developer & UI/UX Designer</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <a href="mailto:xiuchen.w@outlook.com" className="hover:text-primary transition-colors">📧 Email: xiuchen.w@outlook.com</a>
                    <span>📱 Phone: +65 8866 9245</span>
                    <a href="https://www.linkedin.com/in/chang-xiu-chen-3710011ba" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">🔗 LinkedIn: www.linkedin.com/in/chang-xiu-chen-3710011ba</a>
                    <a href="https://github.com/changxiuchen" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">💻 GitHub: github.com/changxiuchen</a>
                    <a href="https://xc-portfolio.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">🌐 Portfolio: xc-portfolio.vercel.app</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <section>
              <h3 className="text-2xl font-bold text-foreground mb-4">Professional Summary</h3>
              <p className="text-foreground leading-relaxed">
                Full-stack developer and UI/UX designer with a proven track record of building reliable, user-focused solutions.
                Experienced in web development (PHP, ASP.NET Core, HTML, CSS, Javascript), mobile app development (Flutter), and design tools
                (Photoshop, Illustrator, Canva). Demonstrated ability to lead projects, mentor team members, and solve complex
                problems systematically. Committed to delivering high-quality work with attention to detail and user experience.
              </p>
            </section>

            {/* Technical Skills */}
            <section>
              <h3 className="text-2xl font-bold text-foreground mb-5">Technical Skills</h3>
              <div className="space-y-5">
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Backend & Databases</h4>
                  <div className="flex flex-wrap gap-2">
                    {["PHP", "ASP.NET Core", "C#", "SQL Server", "MySQL", "jQuery", "JavaScript", "MVC Architecture"].map(skill => (
                      <span key={skill} className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Frontend & Design</h4>
                  <div className="flex flex-wrap gap-2">
                    {["HTML", "CSS", "JavaScript", "Figma", "Photoshop", "Illustrator", "Canva"].map(skill => (
                      <span key={skill} className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Mobile & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Flutter", "Dart", "Git", "Shopify", "Lightspeed X", "Meta Business Suite", "CapCut", "Responsive Design"].map(skill => (
                      <span key={skill} className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Soft Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Problem Solving", "Team Leadership", "Communication", "Mentoring", "Project Management", "Social Media Marketing", "Data Analysis", "System Optimization"].map(skill => (
                      <span key={skill} className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground border border-border font-medium">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Work Experience */}
            <section>
              <h3 className="text-2xl font-bold text-foreground mb-4">Work Experience</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="text-lg font-semibold text-foreground">Social Media Content Specialist</h4>
                  <p className="text-primary font-medium">The Brake Shop SG | January 2026 – Present</p>
                  <ul className="mt-2 space-y-1 text-muted-foreground list-disc list-inside">
                    <li>Develop and execute comprehensive social media strategies across Facebook and Instagram using Meta Business Suite.</li>
                    <li>Produce high-engagement visual content, including photography and short-form video reels edited with CapCut.</li>
                    <li>Design professional promotional posters and digital assets using Canva.</li>
                    <li>Manage targeted ad campaigns and conduct audience research to optimize reach, engagement, and click-through rates.</li>
                  </ul>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="text-lg font-semibold text-foreground">Project Leader (Intern) & IT Assistant</h4>
                  <p className="text-primary font-medium">Intertech Hardware | 2023 - Present</p>
                  <ul className="mt-2 space-y-1 text-muted-foreground list-disc list-inside">
                    <li>Manage Shopify e-commerce store with product updates and pricing optimization</li>
                    <li>Optimize Lazada seller platform for improved visibility and sales performance</li>
                    <li>Maintain and improve POS inventory system (Lightspeed X)</li>
                    <li>Train new part-timers on system operations and customer service best practices</li>
                  </ul>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="text-lg font-semibold text-foreground">Passenger Service Assistant (Wheelchair Assistance)</h4>
                  <p className="text-primary font-medium">Changi Airport (SATS) | 2022 - Present</p>
                  <ul className="mt-2 space-y-1 text-muted-foreground list-disc list-inside">
                    <li>Assist international passengers with language barriers using patience and clear guidance</li>
                    <li>Apply insights from accessibility needs to inform inclusive design decisions</li>
                    <li>Maintain strict punctuality and readiness adhering to tight airport schedules</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-2xl font-bold text-foreground mb-4">Education</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="text-lg font-semibold text-foreground">Diploma in Infocomm & Media Engineering</h4>
                  <p className="text-primary font-medium">Nanyang Polytechnic | Completing 2027</p>
                  <p className="text-muted-foreground text-sm">Full-stack web development, mobile app development, UI/UX design, database management</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="text-lg font-semibold text-foreground">Higher Nitec in IT Applications Development</h4>
                  <p className="text-primary font-medium">ITE College Central Singapore | 2024</p>
                  <p className="text-muted-foreground text-sm">24-month program covering web & mobile app development, UI/UX design, software testing, and digital economy skills. Practical training in industry-standard tools and frameworks.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="text-lg font-semibold text-foreground">Nitec in Web Applications</h4>
                  <p className="text-primary font-medium">ITE College Central Singapore | 2023</p>
                  <p className="text-muted-foreground text-sm">Web development fundamentals, database basics, user interface design</p>
                </div>
              </div>
            </section>

            {/* Key Projects */}
            <section>
              <h3 className="text-2xl font-bold text-foreground mb-4">Key Projects</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">Movie Reservation System</h4>
                  <p className="text-muted-foreground text-sm">Built a dynamic movie ticketing system using pure PHP and jQuery with custom MVC architecture. Features include real-time seat availability, user authentication, and full reservation management (view, edit, delete).</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Facility Management System</h4>
                  <p className="text-muted-foreground text-sm">Designed a responsive booking platform using ASP.NET Core MVC with advanced search filtering. Demonstrates understanding of enterprise-level architecture and complex database queries.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">UI/UX Design Portfolio</h4>
                  <p className="text-muted-foreground text-sm">Created professional designs for social media and marketing campaigns using Photoshop, Illustrator, and Canva, showcasing visual hierarchy and user engagement principles.</p>
                </div>
              </div>
            </section>

            {/* Awards & Achievements */}
            <section>
              <h3 className="text-2xl font-bold text-foreground mb-4">Awards & Achievements</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="text-lg font-semibold text-foreground">Director's List (Academic)</h4>
                  <p className="text-primary font-medium">NYP & ITE | Multiple Semesters (2022-2026)</p>
                  <p className="text-muted-foreground text-sm">Awarded to the Top 10-15% of the cohort for consistent academic excellence.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="text-lg font-semibold text-foreground">Edusave Merit Bursary</h4>
                  <p className="text-primary font-medium">Singapore Government | 2023 S2</p>
                  <p className="text-muted-foreground text-sm">Awarded to the Top 25% of the cohort for academic performance and good conduct.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="text-lg font-semibold text-foreground">EAGLES Award (Leadership)</h4>
                  <p className="text-primary font-medium">NYP | 2023 S2</p>
                  <p className="text-muted-foreground text-sm">Selected from the Top 10% for outstanding leadership and service to the community.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="text-lg font-semibold text-foreground">Youth Expedition Project (YEP) – Laos</h4>
                  <p className="text-primary font-medium">Nanyang Polytechnic / National Youth Council | March 2026</p>
                  <ul className="mt-2 space-y-1 text-muted-foreground list-disc list-inside">
                    <li>Participated in a two-week international service-learning expedition (March 15–28) focused on community development and cultural exchange.</li>
                    <li>Collaborated with a diverse team to implement sustainable community projects in rural Laos.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Professional Qualities */}
            <section className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">Core Professional Qualities</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <p className="font-semibold text-primary mb-1">Steadfast</p>
                  <p className="text-sm text-muted-foreground">Committed to excellence and delivering quality work consistently</p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-1">Reliable</p>
                  <p className="text-sm text-muted-foreground">Dependable team member who never misses commitments</p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-1">User-Focused</p>
                  <p className="text-sm text-muted-foreground">Creates solutions that prioritize user experience and accessibility</p>
                </div>
              </div>
            </section>
          </div>

          {/* Print Styles */}
          <style>{`
            @media print {
              /* ---- Page setup: tight margins for 2-page fit ---- */
              @page {
                margin: 10mm 12mm;
                size: A4;
              }

              /* ---- Hide UI chrome ---- */
              .no-print, nav, footer, header {
                display: none !important;
              }

              /* ---- Reset backgrounds ---- */
              *, body, html {
                background: #ffffff !important;
                color: #1a1a1a !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }

              /* ---- Base typography: smaller & tighter ---- */
              body { font-size: 9pt !important; line-height: 1.35 !important; }
              main { padding: 0 !important; }
              .container { max-width: 100% !important; padding: 0 !important; }

              /* ---- Card: strip all decoration ---- */
              .bg-card {
                background: #ffffff !important;
                border: none !important;
                border-radius: 0 !important;
                padding: 0 !important;
                box-shadow: none !important;
              }

              /* ---- KILL Tailwind spacing gaps (biggest page-count culprit) ---- */
              .space-y-8 > * + * { margin-top: 6pt !important; }
              .space-y-6 > * + * { margin-top: 5pt !important; }
              .space-y-5 > * + * { margin-top: 0 !important; }
              .space-y-4 > * + * { margin-top: 4pt !important; }
              .space-y-2 > * + * { margin-top: 2pt !important; }
              .space-y-1 > * + * { margin-top: 1pt !important; }

              /* ---- Kill margin/padding utilities ---- */
              .mb-6, .mb-8 { margin-bottom: 4pt !important; }
              .mb-5        { margin-bottom: 3pt !important; }
              .mb-4        { margin-bottom: 3pt !important; }
              .mb-3        { margin-bottom: 2pt !important; }
              .mb-2        { margin-bottom: 1pt !important; }
              .pb-6        { padding-bottom: 4pt !important; }
              .pt-32, .pt-24 { padding-top: 0 !important; }
              .pb-16       { padding-bottom: 0 !important; }
              .p-8, .p-12, .p-6 { padding: 0 !important; }
              .gap-6       { gap: 8pt !important; }
              .gap-4       { gap: 4pt !important; }
              .gap-2       { gap: 3pt !important; }

              /* ---- Header: profile photo shrunk, tight layout ---- */
              .border-b {
                border-bottom: 1.5px solid #1a1a1a !important;
                padding-bottom: 5pt !important;
                margin-bottom: 6pt !important;
              }
              img[alt="Chang Xiu Chen"] {
                width: 52px !important;
                height: 68px !important;
              }

              /* ---- Headings ---- */
              h2 { font-size: 17pt !important; margin-bottom: 1pt !important; line-height: 1.2 !important; }
              h3 {
                font-size: 9.5pt !important;
                font-weight: 700 !important;
                border-bottom: 1px solid #aaaaaa !important;
                padding-bottom: 2pt !important;
                margin-bottom: 4pt !important;
                text-transform: uppercase;
                letter-spacing: 0.06em;
              }
              h4 { font-size: 9pt !important; margin-bottom: 1pt !important; }

              /* ---- Sections: allow natural page breaks ---- */
              section { margin-bottom: 6pt !important; page-break-inside: auto; }

              /* ---- Skills: 2-column grid halves height ---- */
              .space-y-5 {
                display: grid !important;
                grid-template-columns: 1fr 1fr !important;
                gap: 4pt 12pt !important;
              }

              /* ---- Experience / Education items ---- */
              .border-l-4 {
                border-left: 2px solid #333333 !important;
                padding-left: 7pt !important;
                margin-bottom: 5pt !important;
                page-break-inside: avoid;
              }

              /* ---- Bullet lists ---- */
              ul { margin: 1pt 0 !important; padding-left: 11pt !important; }
              li { margin-bottom: 0.5pt !important; line-height: 1.3 !important; }
              .list-inside { padding-left: 0 !important; }

              /* ---- Skill badges ---- */
              span.rounded-full {
                display: inline-block !important;
                border: 1px solid #666666 !important;
                background: #f0f0f0 !important;
                color: #1a1a1a !important;
                padding: 0pt 5pt !important;
                border-radius: 999px !important;
                font-size: 7.5pt !important;
                line-height: 1.7 !important;
                margin: 1pt !important;
              }

              /* ---- Qualities block ---- */
              .bg-primary\/5 {
                background: #f5f5f5 !important;
                border: 1px solid #cccccc !important;
                border-radius: 3pt !important;
                padding: 4pt 6pt !important;
                page-break-inside: avoid;
              }
              .md\\:grid-cols-3 { grid-template-columns: 1fr 1fr 1fr !important; }

              /* ---- Text colours ---- */
              a { color: #1a1a1a !important; text-decoration: none !important; }
              .text-muted-foreground { color: #444444 !important; }
              .text-primary { color: #222222 !important; font-weight: 600 !important; }
              .text-sm { font-size: 8pt !important; }
              .text-xs { font-size: 7.5pt !important; }
            }
          `}</style>
        </div>
      </main>

      <Footer />
    </div>
  );
}
