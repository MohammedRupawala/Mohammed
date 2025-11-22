import React from "react";
import { SkillCategory } from "../types";
import { TerminalIcon, TrophyIcon } from "./ui/Icons";

const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C++", "SQL", "HTML/CSS"]
  },
  {
    title: "Technologies",
    skills: ["Express JS", "Node.js", "FastAPI", "React", "Tailwind CSS", "Supabase"]
  },
  {
    title: "Tools",
    skills: ["VS Code", "Docker", "Git", "GitHub"]
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 px-4 md:px-6 container mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        
        {/* Technical Skills */}
        <div className="animate-fade-in-up">
          <div className="mb-8 flex items-center gap-2">
             <TerminalIcon className="h-6 w-6" />
             <h2 className="text-2xl font-bold tracking-tight">Technical Skills</h2>
          </div>
          <div className="space-y-6">
            {skillsData.map((category, idx) => (
              <div key={idx}>
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="inline-flex items-center rounded-md border border-input bg-background px-3 py-1 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground hover:scale-105 hover:border-accent cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements & CP */}
        <div className="animate-fade-in-up delay-100">
          <div className="mb-8 flex items-center gap-2">
             <TrophyIcon className="h-6 w-6" />
             <h2 className="text-2xl font-bold tracking-tight">Competitive Programming</h2>
          </div>
          
          <div className="space-y-6">
            <div className="rounded-lg border border-border p-6 bg-card transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <p className="text-muted-foreground text-sm mb-4">
                Active participant in competitive programming contests.
              </p>
              <div className="space-y-3">
                <a 
                  href="https://leetcode.com/u/THFC/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex justify-between items-center text-sm group p-2 rounded-md hover:bg-muted/50 transition-colors border border-transparent hover:border-border"
                >
                  <span className="font-medium group-hover:text-foreground transition-colors">LeetCode Rating</span>
                  <span className="font-mono font-bold text-primary">1550</span>
                </a>
                <a 
                  href="https://codeforces.com/profile/Special_One" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex justify-between items-center text-sm group p-2 rounded-md hover:bg-muted/50 transition-colors border border-transparent hover:border-border"
                >
                  <span className="font-medium group-hover:text-foreground transition-colors">Codeforces Rating</span>
                  <span className="font-mono font-bold text-primary">1200</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};