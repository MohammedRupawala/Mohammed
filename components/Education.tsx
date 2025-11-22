import React from "react";
import { Education as EducationType } from "../types";

const educationList: EducationType[] = [
  {
    institution: "Adani University",
    degree: "B.Tech in Information and Communication Technology",
    period: "Aug 2022 – Present",
    location: "Ahmedabad, Gujarat, India"
  },
  {
    institution: "St. Xaviers High School",
    degree: "GSEB",
    period: "Aug 2021 – 2022",
    location: "Ahmedabad, Gujarat, India"
  }
];

export const Education: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold tracking-tight mb-8 text-center md:text-left">Education</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {educationList.map((edu, idx) => (
            <div key={idx} className="flex flex-col justify-between rounded-lg border border-border bg-background p-6 shadow-sm">
              <div>
                <h3 className="font-semibold text-lg">{edu.institution}</h3>
                <p className="text-sm text-muted-foreground mt-1">{edu.degree}</p>
              </div>
              <div className="mt-4 flex justify-between items-end text-sm text-muted-foreground">
                <span>{edu.location}</span>
                <span className="font-mono">{edu.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};