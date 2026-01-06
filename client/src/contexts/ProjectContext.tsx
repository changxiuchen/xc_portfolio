import { createContext, useContext, useState } from "react";

export interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  images: {
    main: string | null;
    gallery: string[];
  };
  features: string[];
  wireframes?: string[];
  status: "completed" | "in-progress" | "proposal";
  links?: {
    github?: string;
    live?: string;
  };
  learnings: string[];
}

interface ProjectContextType {
  selectedProject: ProjectDetail | null;
  setSelectedProject: (project: ProjectDetail | null) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: React.ReactNode }) {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  return (
    <ProjectContext.Provider value={{ selectedProject, setSelectedProject }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProject must be used within ProjectProvider");
  }
  return context;
}
