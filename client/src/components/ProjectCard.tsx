import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  features?: string[];
  status?: "completed" | "in-progress" | "proposal";
  links?: {
    github?: string;
    live?: string;
  };
}

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  features,
  status = "completed",
  links,
}: ProjectCardProps) {
  const statusColors = {
    completed: "bg-green-500/10 text-green-400",
    "in-progress": "bg-yellow-500/10 text-yellow-400",
    proposal: "bg-blue-500/10 text-blue-400",
  };

  const statusLabels = {
    completed: "Completed",
    "in-progress": "In Progress",
    proposal: "Proposal",
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-smooth group">
      {/* Image */}
      {image && (
        <div className="relative h-64 md:h-72 overflow-hidden bg-background">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>
      )}

      {/* Content */}
      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-2xl font-bold text-foreground">{title}</h3>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${statusColors[status]}`}>
            {statusLabels[status]}
          </span>
        </div>

        {/* Description */}
        <p className="text-foreground mb-4 leading-relaxed">{description}</p>

        {/* Features */}
        {features && features.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-muted-foreground mb-3">Key Features</h4>
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="text-primary mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-muted-foreground mb-3">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        {links && (
          <div className="flex gap-3 pt-4 border-t border-border">
            {links.github && (
              <a href={links.github} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-border text-foreground hover:bg-card flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </Button>
              </a>
            )}
            {links.live && (
              <a href={links.live} target="_blank" rel="noopener noreferrer">
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live
                </Button>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
