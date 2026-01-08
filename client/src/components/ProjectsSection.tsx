import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { ProjectDetail } from "@/contexts/ProjectContext";
import { useEffect, useState } from "react";

export default function ProjectsSection() {
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

    const section = document.getElementById("projects");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const projects: ProjectDetail[] = [
    {
      id: "movie-reservation",
      title: "Movie Reservation System",
      description:
        "Built a dynamic movie ticketing system using pure PHP and jQuery, designing a custom MVC architecture to manage seat availability and user authentication.",
      fullDescription:
        "This project showcases my ability to build a fully functional web application from scratch without relying on frameworks. I designed a custom MVC architecture using pure PHP to manage complex business logic including seat availability, user authentication, and reservation management. The system provides an intuitive interface for users to browse movies, select dates and times, choose seats in real-time, and manage their reservations with full CRUD operations.",
      technologies: ["PHP", "HTML5", "CSS3", "JavaScript", "MySQL", "jQuery"],
      images: {
        main: "/images/movie_home.png",
        gallery: ["/images/movie_movies.png", "/images/movie_admin.png", "/images/movie_manage.png"],
      },
      features: [
        "Movie listing with filtering and search",
        "Interactive date and time selection",
        "Real-time seat availability visualization with color-coded status",
        "Reservation management (view, edit, delete operations)",
        "User authentication and profile management",
        "Fully responsive design for all devices",
        "Custom MVC architecture without frameworks",
      ],
      wireframes: ["/images/Desktop_Home.jpg", "/images/Desktop_MoviesDetails.jpg", "/images/Desktop_MoviesDetailscopy.jpg", "/images/Desktop_Admin.jpg"],
      status: "completed" as const,
      links: {
        github: "https://github.com/changxiuchen",
        live: "https://movie-website.page.gd/",
      },
      learnings: [
        "Built a fully responsive and functional website from scratch using pure PHP",
        "Designed and implemented custom MVC architecture for scalability",
        "Mastered PHP and phpMyAdmin for data management and retrieval",
        "Learned to create interactive UIs with jQuery without modern frameworks",
        "Developed understanding of database design and user authentication",
      ],
    },
    {
      id: "facility-management",
      title: "Facility Management System",
      description:
        "Designed a responsive booking platform using ASP.NET Core MVC to help teams manage facility reservations efficiently with advanced search filtering.",
      fullDescription:
        "This full-stack web project demonstrates my ability to work with enterprise-level technologies. Built using ASP.NET Core MVC and C#, the system features a relational SQL Server database with advanced search and filtering capabilities. The platform allows users to manage facilities, facility types, and bookings with a clean, responsive interface. This project showcases my understanding of MVC architecture, database design, and the ability to create complex search queries.",
      technologies: ["ASP.NET Core", "C#", "SQL Server", "MVC", "Responsive Design"],
      images: {
        main: "/images/fms-facility-types.png",
        gallery: ["/images/fms-search.png"],
      },
      features: [
        "Facility CRUD operations (Create, Read, Update, Delete)",
        "Facility type management with categorization",
        "Advanced search and filtering capabilities",
        "Responsive design optimized for all devices",
        "Relational database architecture with SQL Server",
        "User-friendly booking and management interface",
        "Complex query handling for advanced searches",
      ],
      status: "in-progress" as const,
      learnings: [
        "Learned ASP.NET Core MVC framework and C# programming",
        "Designed relational databases with SQL Server",
        "Implemented advanced search filtering for complex queries",
        "Developed responsive web interfaces with modern design principles",
        "Understood enterprise-level application architecture",
      ],
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design Portfolio",
      description:
        "Created a series of designs for social media and marketing campaigns using Canva and Photoshop, focusing on visual hierarchy and user engagement.",
      fullDescription:
        "This collection of design work demonstrates my proficiency in design tools and my understanding of visual communication principles. I've created designs for various purposes including social media promotions, marketing materials, and portfolio presentations. Each design showcases my ability to apply color theory, typography, and layout principles to create visually appealing and effective marketing materials.",
      technologies: ["Photoshop", "Illustrator", "Canva", "Figma"],
      images: {
        main: "/images/L2_02_Chang_Xiu_Chen_244584Q_ESSPoster.jpg",
        gallery: ["/images/ess-poster.png", "/images/uiux-qixi.png"],
      },
      features: [
        "Portfolio webpage design with responsive mockups",
        "Social media promotional posters and graphics",
        "Brand identity and visual consistency across materials",
        "User-centered design approach for maximum engagement",
        "Professional color palettes and typography selection",
        "Multi-device mockups and responsive presentations",
      ],
      status: "completed" as const,
      learnings: [
        "Mastered design tools including Photoshop, Illustrator, and Canva",
        "Developed understanding of visual hierarchy and composition",
        "Learned to apply color theory and psychology in design",
        "Understood the importance of responsive design in digital marketing",
        "Gained experience in creating cohesive brand identities",
      ],
    },

    {
      id: "workhub-app",
      title: "WorkHub - Task Management App",
      description:
        "Designed a comprehensive mobile task management app proposal with detailed use cases, UI/UX flows, and feature roadmap demonstrating systematic problem-solving.",
      fullDescription:
        "WorkHub is a cross-platform mobile task management application designed to help remote teams stay organized and meet deadlines. This project demonstrates my ability to plan complex applications systematically before development. I created detailed use case diagrams, comprehensive UI/UX flows, and a complete feature roadmap. The proposal includes 8 mandatory features for core functionality, 4 bonus features for enhanced user experience, and 1 challenging feature involving local data persistence using Shared Preferences.",
      technologies: ["Flutter", "Dart", "Shared Preferences", "UI/UX Design", "Wireframing"],
      images: {
        main: null,
        gallery: [],
      },
      features: [
        "Task creation and management with priority levels",
        "Team collaboration and task assignment",
        "Real-time notifications for task updates",
        "Deadline tracking and reminders",
        "Offline functionality with local data persistence",
        "User profiles and team management",
        "Advanced filtering and search capabilities",
      ],
      status: "proposal" as const,
      learnings: [
        "Developed systematic approach to app planning and design",
        "Learned to create detailed use case diagrams and user flows",
        "Understood the importance of feature prioritization",
        "Gained experience in mobile app UI/UX design principles",
        "Learned to plan for offline functionality and data persistence",
      ],
    }
  ];

  return (
    <section id="projects" className={`py-20 md:py-32 bg-card/50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Section Title */}
          <h2 className="heading-section mb-4 text-foreground">Featured Projects</h2>
          <div className="w-16 h-1 bg-primary mb-12"></div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={project.id} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${idx * 150}ms`}}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          {/* Project Modal */}
          <ProjectModal />

          {/* Additional Context */}
          <div className={`mt-16 p-8 bg-background border border-border rounded-lg transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '600ms'}}>
            <h3 className="text-xl font-bold text-foreground mb-4">My Approach to Projects</h3>
            <p className="text-foreground leading-relaxed">
              Each project represents my commitment to solving real-world problems systematically. 
              I start by understanding the user's needs, design thoughtful solutions, and implement 
              them with attention to both functionality and user experience. Whether it's a full-stack 
              web application, a mobile app proposal, or design work, I bring the same dedication to 
              quality and reliability that defines my professional philosophy: Steadfast, Reliable, User-Focused.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
