"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import DotGrid from '@/components/dot-grid';
import TextType from '@/components/text-type';
import '@/components/text-type.css';
import MetaBalls from '../meta-balls';
import '../meta-balls.css';


const slogans = [
  "TARS – Teaching and Accelerating Research & Startups",
  "TARS – Transforming Ambitions into Real Startups",
  "TARS – Training And Raising Startups",
  "TARS – Turning Aspirations into Real Success",
  "TARS – Teaching, Accelerating, and Reshaping Startups",
  "TARS – The Accelerator for Rising Startups"
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center bg-background overflow-hidden">
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
        <div className="container mx-auto px-4 md:px-6 z-20 relative">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight text-foreground h-48 md:h-56 lg:h-64">
                       <TextType text={slogans} />
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground">
                        Your trusted partner in building successful tech ventures. We provide the tools, expertise, and network to transform your ideas into thriving businesses.
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-4">
                        <Button size="lg" asChild className="cursor-target">
                            <Link href="#contact">Apply Now</Link>
                        </Button>
                        <Button size="lg" variant="secondary" asChild className="cursor-target">
                            <Link href="#about">Learn More</Link>
                        </Button>
                    </div>
                </div>
                <div className="hidden md:flex justify-center items-center h-96">
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
