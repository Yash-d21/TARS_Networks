"use client";

import { FileText, Search, Pencil, Rocket } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import InfiniteScroll from '../infinite-scroll';
import '../infinite-scroll.css';

const processSteps = [
  {
    icon: FileText,
    title: 'Application',
    description: "Submit your startup idea through our simple application process."
  },
  {
    icon: Search,
    title: 'Evaluation',
    description: "Our team evaluates your idea for market potential and feasibility."
  },
  {
    icon: Pencil,
    title: 'Development',
    description: "We build your product and establish your brand identity."
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: "We help you launch your product and acquire your first customers."
  }
];

const scrollItems = processSteps.map((step, index) => ({
  content: (
    <Card className="bg-background w-full h-full flex flex-col items-center justify-center text-center">
      <CardHeader>
        <div className="mx-auto bg-primary/10 text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mb-4">
          <step.icon className="w-8 h-8" />
        </div>
        <CardTitle className="font-headline">{step.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{step.description}</p>
      </CardContent>
    </Card>
  )
}));

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
        
        <div style={{ height: '500px', position: 'relative' }}>
            <InfiniteScroll items={scrollItems} autoplay={true} autoplaySpeed={0.5} pauseOnHover={true} itemHeight={250} negativeMargin='-40px' />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
