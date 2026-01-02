"use client";

import AnimatedCounter from '@/components/animated-counter';
import { Rocket, CheckCircle, Users, Calendar } from 'lucide-react';
import PixelCard from '../pixel-card';
import { cn } from '@/lib/utils';

const stats = [
  { icon: Rocket, value: 2, label: 'Startups Launched', variant: "blue" as const },
  { icon: CheckCircle, value: 100, label: 'Success Rate (%)', variant: "blue" as const },
  { icon: Users, value: 17, label: 'Team Members', variant: "blue" as const },
  { icon: Calendar, value: 3, label: 'Years Experience', variant: "blue" as const },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-card relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">About TARS</h2>
            <p className="text-muted-foreground leading-relaxed">
              TARS Networks is a premier startup incubator dedicated to transforming innovative ideas into successful businesses. Our name stands for Teaching and Accelerating Research & Startups, reflecting our commitment to education, acceleration, and sustainable growth.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Founded in 2022, we've helped 2 startups launch and scale their operations across various industries. Our team of experienced entrepreneurs, developers, and marketers provides comprehensive support at every stage of your startup journey.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-8">
            {stats.map((stat, index) => (
               <PixelCard key={index} variant={stat.variant} className={cn(
                   'bg-blue-950/20'
               )}>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <p className="text-4xl font-bold font-headline">
                    <AnimatedCounter endValue={stat.value} />
                  </p>
                  <p className="text-muted-foreground mt-2">{stat.label}</p>
                </div>
              </PixelCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
