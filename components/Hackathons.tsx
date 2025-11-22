import React from "react";

interface Hackathon {
  date: string;
  title: string;
  location: string;
  description: string;
  status: string;
}

const hackathons: Hackathon[] = [
  {
    date: "July 2025",
    title: "Odoo Hackathon",
    location: "Gift City, Gujarat",
    description: "Built Stack It Q&A application to facilitate knowledge sharing within the developer community.",
    status: "Final Round"
  },
  {
    date: "April 2025",
    title: "Hackspire",
    location: "Adani University",
    description: "Developed a Smart Queue Management System that utilizes predictive algorithms to estimate and reduce wait times.",
    status: "Finalist (Top 5)"
  }
];

export const Hackathons: React.FC = () => {
  return (
    <section id="hackathons" className="py-24 px-4 md:px-6 container mx-auto max-w-3xl">
       {/* Header Section */}
       <div className="mb-16 text-center animate-fade-in-up">
         <div className="inline-block rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs font-medium mb-4 uppercase tracking-wider">
           Hackathons
         </div>
         <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">I like building things</h2>
         <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
           During my time in university, I attended several hackathons. It was eye-opening to see the endless possibilities brought to life by a group of motivated individuals.
         </p>
       </div>

       {/* Timeline Layout */}
       <div className="relative border-l border-border/50 ml-4 md:ml-0 md:pl-0 space-y-12 md:space-y-0">
         {hackathons.map((hack, index) => (
           <div key={index} className="relative md:grid md:grid-cols-[1fr_40px_1fr] md:gap-6 animate-fade-in-up delay-100">
             
             {/* Left Side (Date for desktop, empty for mobile) */}
             <div className="hidden md:block text-right pt-2">
               <span className="text-sm font-mono text-muted-foreground">{hack.date}</span>
             </div>

             {/* Center Timeline Dot */}
             <div className="absolute -left-[21px] md:static md:flex md:justify-center">
               <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background shadow-sm z-10">
                  <span className="font-semibold text-sm text-primary">{hack.title.charAt(0)}</span>
               </div>
             </div>

             {/* Right Side (Content) */}
             <div className="mb-10 last:mb-5 pl-8 md:pl-0 pb-12 last:pb-0">
                <div className="md:hidden mb-1">
                  <span className="text-xs font-mono text-muted-foreground">{hack.date}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold tracking-tight">
                    {hack.title}
                  </h3>
                  <span className="text-sm text-muted-foreground font-medium">
                    {hack.location}
                  </span>
                  
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {hack.description}
                  </p>
                  
                  {/* <div className="mt-4">
                    <span className="inline-flex items-center rounded-md bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                      {hack.status}
                    </span>
                  </div> */}
                </div>
             </div>
           </div>
         ))}
       </div>
    </section>
  );
};