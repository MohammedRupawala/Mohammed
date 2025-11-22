import React from "react";
import { Button } from "./ui/Button";
import { GithubIcon, LinkedinIcon, MailIcon, DownloadIcon, TwitterIcon } from "./ui/Icons";

export const Hero: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 flex flex-col justify-center items-center text-center px-4">
      <div className="max-w-3xl space-y-6 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          Mohammed Rupawala
        </h1>
        <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl font-light animate-fade-in-up delay-100">
          I’m a full-stack developer who likes building scalable, reliable systems. I’m passionate about system design and enjoy figuring out how to make things efficient and easy to maintain. Competitive programming helps me stay sharp with problem-solving and algorithms.

Outside of tech, I love watching football and I’m a dedicated Tottenham Hotspur fan match days are my perfect break from coding.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 pt-4 animate-fade-in-up delay-200">
          <a href="https://github.com/MohammedRupawala" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="transition-transform hover:scale-110">
              <GithubIcon className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </a>
          <a href="https://linkedin.com/in/mohammed-rupawala11" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="transition-transform hover:scale-110">
              <LinkedinIcon className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </a>
          <a href="https://x.com/RMoH4MmeD" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="transition-transform hover:scale-110">
              <TwitterIcon className="h-4 w-4" />
              <span className="sr-only">Twitter / X</span>
            </Button>
          </a>
          <a href="mailto:mohammedrupawala.in@gmail.com">
            <Button variant="outline" size="icon" className="transition-transform hover:scale-110">
              <MailIcon className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Button>
          </a>
            <a href="/public/Mohammed-1.pdf" target="_blank" rel="noopener noreferrer">
            <Button className="gap-2 transition-transform hover:scale-105">
              <DownloadIcon className="h-4 w-4" />
              Resume
            </Button>
            </a>
        </div>
      </div>
    </section>
  );
};