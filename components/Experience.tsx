import React from "react";
import { Experience as ExperienceType } from "../types";

const experiences: ExperienceType[] = [
  {
    company: "Indian Institute of Technology Indore",
    role: "Software Development Intern",
    period: "Jul 2025 – Dec 2025",
    location: "Remote",
    description: [
      "Developed an AI-powered Learning Management System with role-specific workflows for Admin, Faculty, and Students.",
      "Integrated AI chatbots tailored for each role to enhance support and engagement.",
      "Built a real-time notification system to streamline updates across users.",
      "Implemented on-demand, subject-wise PDF generation leveraging AI for quick access to course content."
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-10 animate-fade-in-up">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Work Experience</h2>
          <p className="text-muted-foreground">My professional journey so far.</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative border-l-2 border-border pl-6 md:pl-8 pb-4 animate-fade-in-up delay-100 hover:border-primary transition-colors duration-300"
            >
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-background border-2 border-primary transition-transform duration-300 hover:scale-125" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <span className="text-sm text-muted-foreground font-mono">{exp.period}</span>
              </div>
              <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                <span className="font-medium text-foreground">{exp.company}</span>
                <span>•</span>
                <span className="text-sm">{exp.location}</span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-sm leading-relaxed hover:text-foreground transition-colors">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};