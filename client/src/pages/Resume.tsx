import { ArrowLeft, Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Resume() {
  const [, navigate] = useLocation();

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    // Create a simple PDF download using the browser's print functionality
    const printWindow = window.open("", "", "width=800,height=600");
    if (printWindow) {
      printWindow.document.write(document.documentElement.innerHTML);
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container max-w-4xl">
          {/* Header with Back Button */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold text-foreground">Resume</h1>
            <div className="flex gap-3">
              <Button
                onClick={handlePrint}
                variant="outline"
                className="flex items-center gap-2 border-border text-foreground hover:bg-card"
              >
                <Printer className="w-4 h-4" />
                Print
              </Button>
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
              <div className="flex items-start gap-6 mb-6">
                <img
                  src="/images/profile.jpg"
                  alt="Chang Xiu Chen"
                  className="w-32 h-40 rounded-lg object-cover border-2 border-primary"
                />
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-2">Chang Xiu Chen</h2>
              <p className="text-primary font-semibold mb-3">Full-Stack Developer & UI/UX Designer</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <a href="mailto:xiuchen.w@outlook.com" className="hover:text-primary transition-colors">📧 Email: xiuchen.w@outlook.com</a>
                    <span>📱 Phone: +65 8866 9245</span>
                    <a href="https://www.linkedin.com/in/chang-xiu-chen-3710011ba" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">🔗 LinkedIn: www.linkedin.com/in/chang-xiu-chen-3710011ba</a>
                    <a href="https://github.com/changxiuchen" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">💻 GitHub: github.com/changxiuchen</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <section>
              <h3 className="text-2xl font-bold text-foreground mb-4">Professional Summary</h3>
              <p className="text-foreground leading-relaxed">
                Full-stack developer and UI/UX designer with a proven track record of building reliable, user-focused solutions. 
                Experienced in web development (PHP, ASP.NET Core, React), mobile app development (Flutter), and design tools 
                (Photoshop, Illustrator, Canva). Demonstrated ability to lead projects, mentor team members, and solve complex 
                problems systematically. Committed to delivering high-quality work with attention to detail and user experience.
              </p>
            </section>

            {/* Technical Skills */}
            <section>
              <h3 className="text-2xl font-bold text-foreground mb-4">Technical Skills</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Backend & Databases</h4>
                  <p className="text-muted-foreground">PHP, ASP.NET Core, C#, SQL Server, MySQL, Node.js, MVC Architecture</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Frontend & Design</h4>
                  <p className="text-muted-foreground">React, TypeScript, Tailwind CSS, HTML5, CSS3, JavaScript, jQuery, Figma, Photoshop, Illustrator</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Mobile & Tools</h4>
                  <p className="text-muted-foreground">Flutter, Dart, Git, Responsive Design, Canva, Lightspeed X, Shopify</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Soft Skills</h4>
                  <p className="text-muted-foreground">Problem Solving, Team Leadership, Communication, Mentoring, System Optimization, Project Management</p>
                </div>
              </div>
            </section>

            {/* Work Experience */}
            <section>
              <h3 className="text-2xl font-bold text-foreground mb-4">Work Experience</h3>
              <div className="space-y-6">
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
              body {
                background: white;
              }
              .no-print {
                display: none;
              }
              .container {
                max-width: 100%;
              }
            }
          `}</style>
        </div>
      </main>

      <Footer />
    </div>
  );
}
