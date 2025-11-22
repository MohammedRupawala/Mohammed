import React from "react";
import { Button } from "./ui/Button";
import { MailIcon } from "./ui/Icons";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-6 container mx-auto text-center">
      <div className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
        <p className="text-muted-foreground text-lg">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
        </p>
        <div className="pt-4">
          <a href="mailto:mohammedrupawala.in@gmail.com">
            <Button size="lg" className="gap-2">
              <MailIcon className="h-5 w-5" />
              Say Hello
            </Button>
          </a>
        </div>
        <div className="pt-8 text-sm text-muted-foreground">
          <p>Ahmedabad, Gujarat, India</p>
          <p>+91 9173428116</p>
        </div>
      </div>
    </section>
  );
};