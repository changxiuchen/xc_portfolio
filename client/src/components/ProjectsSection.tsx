import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Movie Reservation System",
      description:
        "Built a dynamic movie ticketing system using pure PHP and jQuery, designing a custom MVC architecture to manage seat availability and user authentication without relying on frameworks. The system provides an intuitive interface for users to browse movies, select dates and times, choose seats, and manage their reservations.",
      technologies: ["PHP", "HTML5", "CSS3", "JavaScript", "MySQL", "jQuery"],
      image: "/images/Desktop_Home.jpg",
      features: [
        "Movie listing with filtering and search",
        "Interactive date and time selection",
        "Real-time seat availability visualization",
        "Reservation management (view, edit, delete)",
        "User authentication and profile management",
        "Fully responsive design",
      ],
      status: "completed" as const,
      links: {
        github: "https://github.com/changxiuchen",
      },
    },
    {
      title: "Facility Management System",
      description:
        "Designed a responsive booking platform using ASP.NET Core MVC to help teams manage facility reservations efficiently. The system features advanced search filtering, relational database design, and a clean, intuitive interface for managing facilities, bookings, and team coordination.",
      technologies: ["ASP.NET Core", "C#", "SQL Server", "MVC", "Responsive Design"],
      image: "/images/Desktop_MoviesDetails.jpg",
      features: [
        "Facility CRUD operations (Create, Read, Update, Delete)",
        "Advanced search and filtering capabilities",
        "Facility type management",
        "Responsive design for all devices",
        "Relational database architecture",
        "User-friendly booking interface",
      ],
      status: "in-progress" as const,
    },
    {
      title: "UI/UX Design Portfolio",
      description:
        "Created a series of designs for social media and marketing campaigns using Canva and Photoshop, focusing on visual hierarchy and user engagement. These designs showcase my understanding of design principles, brand consistency, and the ability to communicate ideas visually.",
      technologies: ["Photoshop", "Illustrator", "Canva", "Figma"],
      image: "/images/L2_02_Chang_Xiu_Chen_244584Q_ESSPoster.jpg",
      features: [
        "Portfolio webpage design with responsive mockups",
        "Social media promotional posters",
        "Brand identity and visual consistency",
        "User-centered design approach",
        "Professional color palettes and typography",
        "Multi-device mockups and presentations",
      ],
      status: "completed" as const,
    },
    {
      title: "WorkHub - Task Management App",
      description:
        "Designed a comprehensive mobile task management app proposal with detailed use cases, UI/UX flows, and feature roadmap. This project demonstrates systematic problem-solving, user research, and the ability to plan complex applications before development.",
      technologies: ["Flutter", "Shared Preferences", "UI/UX Design", "Wireframing"],
      features: [
        "8 mandatory features for core functionality",
        "4 bonus features for enhanced user experience",
        "1 challenging feature (data persistence with Shared Preferences)",
        "Detailed use case diagrams",
        "Complete UI/UX navigation flows",
        "Professional wireframes and mockups",
      ],
      status: "proposal" as const,
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-card/50">
      <div className="container">
        <div className="max-w-6xl">
          {/* Section Title */}
          <h2 className="heading-section mb-4 text-foreground">Featured Projects</h2>
          <div className="w-16 h-1 bg-primary mb-12"></div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>

          {/* Additional Context */}
          <div className="mt-16 p-8 bg-background border border-border rounded-lg">
            <h3 className="text-xl font-bold text-foreground mb-4">My Approach to Projects</h3>
            <p className="text-foreground leading-relaxed">
              Each project represents my commitment to solving real-world problems systematically. 
              I start by understanding the user's needs, design thoughtful solutions, and implement 
              them with attention to both functionality and user experience. Whether it's a full-stack 
              web application, a mobile app proposal, or design work, I bring the same dedication to 
              quality and reliability that defines my professional philosophy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
