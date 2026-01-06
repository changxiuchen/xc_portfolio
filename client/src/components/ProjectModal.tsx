import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useProject } from "@/contexts/ProjectContext";
import { X } from "lucide-react";
import { useState } from "react";

export default function ProjectModal() {
  const { selectedProject, setSelectedProject } = useProject();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!selectedProject) return null;

  const allImages = [selectedProject.images.main, ...selectedProject.images.gallery].filter((img) => img !== null && img !== undefined) as string[];
  const currentImage = allImages[activeImageIndex];

  return (
    <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            {selectedProject.title}
          </DialogTitle>
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute right-4 top-4 p-1 hover:bg-card rounded-lg transition-smooth"
          >
            <X className="w-5 h-5" />
          </button>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Main Image Gallery */}
          {allImages.length > 0 && currentImage && (
            <div className="space-y-4">
              <div className="relative bg-background rounded-lg overflow-hidden">
                <img
                  src={currentImage}
                  alt={`${selectedProject.title} - Image ${activeImageIndex + 1}`}
                  className="w-full h-auto"
                />
              </div>

              {/* Image Navigation */}
              {allImages.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {allImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-smooth ${
                        activeImageIndex === idx ? "border-primary" : "border-border"
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
          {allImages.length === 0 && (
            <div className="bg-background rounded-lg p-8 text-center text-muted-foreground">
              <p>No images available for this project</p>
            </div>
          )}

          {/* Project Details */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">About This Project</h3>
              <p className="text-foreground leading-relaxed">{selectedProject.fullDescription}</p>
            </div>

            {/* Status Badge */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-muted-foreground">Status:</span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  selectedProject.status === "completed"
                    ? "bg-green-500/10 text-green-400"
                    : selectedProject.status === "in-progress"
                      ? "bg-yellow-500/10 text-yellow-400"
                      : "bg-blue-500/10 text-blue-400"
                }`}
              >
                {selectedProject.status === "completed"
                  ? "Completed"
                  : selectedProject.status === "in-progress"
                    ? "In Progress"
                    : "Proposal"}
              </span>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-bold text-foreground mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="font-bold text-foreground mb-3">Key Features</h4>
              <ul className="space-y-2">
                {selectedProject.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-foreground">
                    <span className="text-primary mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learnings */}
            <div>
              <h4 className="font-bold text-foreground mb-3">What I Learned</h4>
              <ul className="space-y-2">
                {selectedProject.learnings.map((learning, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">→</span>
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Wireframes Section */}
            {selectedProject.wireframes && selectedProject.wireframes.length > 0 && (
              <div>
                <h4 className="font-bold text-foreground mb-3">Design Wireframes</h4>
                <div className="grid grid-cols-2 gap-4">
                  {selectedProject.wireframes.map((wireframe, idx) => (
                    <div key={idx} className="bg-background rounded-lg overflow-hidden">
                      <img src={wireframe} alt={`Wireframe ${idx + 1}`} className="w-full h-auto" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
