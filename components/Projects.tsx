import React from "react";
import { Project } from "../types";
import { ExternalLinkIcon, GithubIcon } from "./ui/Icons";

const projects: Project[] = [
  {
    title: "MindSync",
    description: "AI-powered journaling platform enabling users to write journals with sentiment analysis and vector embeddings for intelligent retrieval.",
    tags: ["React", "FastAPI", "PostgreSQL", "Redis", "LangChain"],
    link: "https://mindsyncc.vercel.app",
    github:"https://github.com/MohammedRupawala/MindSync",
    date: "Apr 2025",
    features: [
      "Sentiment analysis & vector embeddings",
      "Secure authentication using cookies",
      "AI chatbot with SSE for context-aware responses"
    ]
  },
  {
    title: "WatchBox",
    description: "A full-stack video platform for uploading and discovering content with optimized large file handling.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    date: "Sep 2024",
    github:"https://github.com/MohammedRupawala/watchbox",
    features: [
      "Optimized large file handling (Multer/Busboy)",
      "REST APIs for video management",
      "Efficient metadata handling"
    ]
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 px-4 md:px-6 container mx-auto">
      <div className="mb-10 animate-fade-in-up">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Projects</h2>
        <p className="text-muted-foreground">Some of the things I've built recently.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`group relative flex flex-col rounded-lg border border-border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up ${index % 2 === 1 ? "delay-100" : ""}`}
          >
            <div className="p-6 flex-1">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold leading-none tracking-tight group-hover:text-primary transition-colors">{project.title}</h3>
                <div className="flex gap-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground hover:scale-110 transition-transform" aria-label={`Visit ${project.title} GitHub repository`}>
                      <GithubIcon className="h-5 w-5" />
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground hover:scale-110 transition-transform" aria-label={`Visit ${project.title} website`}>
                      <ExternalLinkIcon className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <ul className="list-disc list-inside text-sm text-muted-foreground mb-4 space-y-1">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="p-6 pt-0 mt-auto">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="inline-flex items-center rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};