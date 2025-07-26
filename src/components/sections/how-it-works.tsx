"use client";

import { ClipboardCheck, Target, Code2, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ScrollStack, { ScrollStackItem } from '../scroll-stack';

const processSteps = [
  {
    icon: ClipboardCheck,
    title: 'Application',
    description: "Submit your startup idea through our simple application process."
  },
  {
    icon: Target,
    title: 'Evaluation',
    description: "Our team evaluates your idea for market potential and feasibility."
  },
  {
    icon: Code2,
    title: 'Development',
    description: "We build your product and establish your brand identity."
  },
  {
    icon: Zap,
    title: 'Launch',
    description: "We help you launch your product and acquire your first customers."
  }
];



const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">How It Works</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Our proven process helps transform your idea into a successful business through these key steps.
          </p>
        </div>
        
        <div style={{ height: '400px', position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          <ScrollStack>
            {processSteps.map((step, index) => (
              <ScrollStackItem key={index}>
                <Card className="bg-background w-full h-full flex flex-col items-center justify-center text-center">
                  <CardHeader>
                    <div className="mx-auto bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-xl border-4 border-blue-400 relative">
                      <step.icon className="w-10 h-10 text-white absolute inset-0 m-auto" />
                    </div>
                    <CardTitle className="font-headline">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
