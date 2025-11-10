"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import DotGrid from "@/components/dot-grid";
import TextType from "@/components/text-type";
import "@/components/text-type.css";
import MetaBalls from "../meta-balls";
import "../meta-balls.css";
import { useIsMobile } from "@/hooks/use-is-mobile";


const slogans = [
  "TARS – Teaching and Accelerating Research & Startups",
  "TARS – Transforming Ambitions into Real Startups",
  "TARS – Training And Raising Startups",
  "TARS – Turning Aspirations into Real Success",
  "TARS – Teaching, Accelerating, and Reshaping Startups",
  "TARS – The Accelerator for Rising Startups"
];

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden bg-background py-16 sm:py-20 md:py-24"
    >
        <div className="absolute inset-0 z-0">
          <DotGrid
            dotSize={2}
            gap={25}
            baseColor={"hsl(var(--primary))"}
            activeColor={"hsl(var(--primary))"}
            proximity={100}
            shockRadius={200}
            shockStrength={0.2}
            resistance={200}
            />
        </div>
        <div className="absolute inset-0 bg-background/80 z-10"></div>
        <div className="container relative z-20 mx-auto px-4 md:px-6">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                <TextType text={slogans} />
              </h1>
              <p className="text-base text-muted-foreground sm:text-lg md:text-xl">
                Your trusted partner in building successful tech ventures. We provide the tools, expertise, and network
                to transform your ideas into thriving businesses.
              </p>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
                <Button
                  size={isMobile ? "default" : "lg"}
                  asChild
                  className="cursor-target w-full sm:w-auto sm:rounded-r-none"
                >
                  <Link href="#contact">Apply Now</Link>
                </Button>
                <Button
                  size={isMobile ? "default" : "lg"}
                  variant="secondary"
                  asChild
                  className="cursor-target w-full sm:w-auto sm:rounded-l-none"
                >
                  <Link href="#about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="hidden h-96 items-center justify-center md:flex">
              <MetaBalls
                color="#FFFFFF"
                cursorBallColor="#FFFFFF"
                cursorBallSize={2}
                ballCount={15}
                animationSize={20}
                enableMouseInteraction={true}
                enableTransparency={true}
                hoverSmoothness={0.05}
                clumpFactor={0.2}
                speed={0.3}
              />
            </div>
          </div>
        </div>
    </section>
  );
};

export default HeroSection;
