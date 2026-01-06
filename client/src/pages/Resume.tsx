import { Button } from "@/components/ui/button";
import { Download, Printer } from "lucide-react";
import { useRef } from "react";

export default function ResumePage() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    if (resumeRef.current) {
      const printWindow = window.open("", "", "height=800,width=900");
      if (printWindow) {
        printWindow.document.write(resumeRef.current.innerHTML);
        printWindow.document.close();
        printWindow.print();
      }
    }
  };

  const handleDownloadPDF = () => {
    // This would require a PDF library like jsPDF
    // For now, we'll use the browser's print-to-PDF feature
    handlePrint();
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="container max-w-4xl">
        {/* Header with Actions */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">My Resume</h1>
            <p className="text-muted-foreground">Full-Stack Developer & UI/UX Designer</p>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={handlePrint}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Printer className="w-4 h-4" />
              Print / Save PDF
            </Button>
            <Button
              onClick={handleDownloadPDF}
              className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download
            </Button>
          </div>
        </div>

        {/* Resume Content */}
        <div
          ref={resumeRef}
          className="bg-card border border-border rounded-lg p-8 md:p-12 space-y-8 print:border-0 print:rounded-0 print:p-0"
        >
          {/* Header */}
          <div className="border-b border-border pb-8">
            <h2 className="text-4xl font-bold text-foreground">Chang Xiu Chen</h2>
            <p className="text-xl text-primary font-semibold mt-1">Full Stack Developer & UI/UX Designer</p>
            <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
              <span>📧 xiuchen.w@outlook.com</span>
              <span>📱 +65 88669245</span>
              <span>📍 Yishun, Singapore</span>
              <span>🔗 github.com/changxiuchen</span>
            </div>
          </div>

          {/* Profile */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-3">PROFILE</h3>
            <p className="text-foreground leading-relaxed">
              Steadfast Full Stack Developer with 3+ years of cumulative training (Nitec to Diploma). 
              Proficient in PHP, MySQL, and Flutter. Proven ability to assess business needs and optimize 
              workflows. Experienced in e-commerce management, system optimization, and team mentoring. 
              Eager to bring technical competence, leadership, and user-focused design to every project.
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">WORK EXPERIENCE</h3>
            <div className="space-y-6">
              {/* Intertech Hardware */}
              <div className="border-l-2 border-primary pl-4">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-foreground">Project Leader (Intern) & IT Assistant</h4>
                  <span className="text-sm text-muted-foreground">2023 - Present</span>
                </div>
                <p className="text-primary font-semibold mb-3">Intertech Hardware Singapore</p>
                <ul className="space-y-2 text-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Leadership:</strong> Recognized by Director for leading team; trained new interns and ensured timely project completion</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>E-Commerce:</strong> Managed Shopify and Lazada stores; improved website layouts and product listings to boost sales visibility</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Tech Skills:</strong> Utilized PHP and MySQL to sync physical inventory with online stores, maintaining accurate stock levels</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>POS Systems:</strong> Improved and optimized Lightspeed X inventory system; trained part-timers on operations</span>
                  </li>
                </ul>
              </div>

              {/* Wheelchair Assistance */}
              <div className="border-l-2 border-primary pl-4">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-foreground">Passenger Service Assistant (Wheelchair Assistance)</h4>
                  <span className="text-sm text-muted-foreground">2022 - Present</span>
                </div>
                <p className="text-primary font-semibold mb-3">Changi Airport (SATS)</p>
                <ul className="space-y-2 text-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Communication:</strong> Assisted international passengers with language barriers using patience and clear guidance</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>UX Insights:</strong> Applied insights from assisting elderly passengers to design accessible, easy-to-read interfaces</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Reliability:</strong> Maintained strict punctuality and readiness, adhering to tight airport schedules</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">EDUCATION</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-foreground">Diploma in Infocomm & Media Engineering</h4>
                  <span className="text-sm text-muted-foreground">Completing 2027</span>
                </div>
                <p className="text-primary font-semibold">Nanyang Polytechnic</p>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-foreground">Higher Nitec in IT Applications Development</h4>
                  <span className="text-sm text-muted-foreground">2024</span>
                </div>
                <p className="text-primary font-semibold">ITE College Central Singapore</p>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-foreground">Nitec in Web Applications</h4>
                  <span className="text-sm text-muted-foreground">2023</span>
                </div>
                <p className="text-primary font-semibold">ITE College Central Singapore</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">TECHNICAL SKILLS</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Backend & Databases</h4>
                <p className="text-foreground">PHP, MySQL, phpMyAdmin, ASP.NET Core, C#, SQL Server</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Frontend & Design</h4>
                <p className="text-foreground">HTML5, CSS3, JavaScript, React, TypeScript, Tailwind CSS</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Mobile & Tools</h4>
                <p className="text-foreground">Flutter & Dart, Git, VS Code, Shopify, Lazada Operations</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Design & Soft Skills</h4>
                <p className="text-foreground">UI/UX Design, Photoshop, Illustrator, Canva, Leadership, Problem-Solving</p>
              </div>
            </div>
          </div>

          {/* Awards */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">AWARDS & RECOGNITION</h3>
            <ul className="space-y-2 text-foreground">
              <li className="flex gap-2">
                <span className="text-primary">🏆</span>
                <span><strong>Director's List (Academic):</strong> Awarded to Top 10-15% of cohort for consistent academic excellence (2025 & 2024)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">🏆</span>
                <span><strong>Edusave Merit Bursary:</strong> Awarded to Top 25% of cohort for academic performance and good conduct (2025 & 2024)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">🏆</span>
                <span><strong>EAGLES Award (Leadership):</strong> Selected from Top 10% for outstanding leadership and service to community (2023)</span>
              </li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-3">LANGUAGES</h3>
            <p className="text-foreground">English (Fluent - Spoken/Written) • Mandarin (Fluent - Spoken/Written)</p>
          </div>

          {/* References */}
          <div className="border-t border-border pt-6">
            <h3 className="text-lg font-bold text-foreground mb-3">REFERENCES</h3>
            <div className="bg-background p-4 rounded-lg">
              <p className="font-semibold text-foreground">Jasmine Goh-Chew</p>
              <p className="text-muted-foreground">Intertech Hardware Director / Current Supervisor</p>
              <p className="text-muted-foreground">Phone: 9695 6634 | Email: teams.intertech@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
