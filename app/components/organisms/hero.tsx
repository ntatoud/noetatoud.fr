import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 ">
      <div className="max-w-3xl w-full text-center space-y-8">
        <h1 className="text-xl tracking-wide font-light">
          Hi, I’m{" "}
          <span className="text-accent-foreground font-medium font-serif">
            Noé Tatoud
          </span>{" "}
          — a full-stack{" "}
          <span className="text-accent-foreground font-medium font-serif">
            developer
          </span>{" "}
          with a passion for crafting slick web experiences.
        </h1>

        <div className="flex justify-center gap-4">
          <Button className="uppercase tracking-wide">View Projects</Button>
          <Button variant="outline" className="uppercase tracking-wide">
            Contact Me <ArrowRight className="w-4 h-4" aria-hidden />
          </Button>
        </div>
      </div>
    </section>
  );
}
