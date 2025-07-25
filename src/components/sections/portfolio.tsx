"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ClickSpark from '@/components/click-spark';
import TiltedCard from '../tilted-card';

const projects = [
  { id: 1, title: 'FinTech Dashboard', category: 'Web', tags: ['React', 'Node.js', 'MongoDB'], description: 'A modern fintech platform that simplifies payment processing for small businesses.', image: 'https://placehold.co/600x400', dataAiHint: 'fintech dashboard' },
  { id: 2, title: 'Fitness App', category: 'App', tags: ['React Native', 'Firebase', 'ML Kit'], description: 'A fitness tracking app that provides personalized workout plans and nutrition guidance.', image: 'https://placehold.co/600x400', dataAiHint: 'fitness app' },
  { id: 3, title: 'Eco Fashion Brand', category: 'Branding', tags: ['Shopify', 'Branding', 'SEO'], description: 'A sustainable fashion brand with an e-commerce platform focused on eco-friendly products.', image: 'https://placehold.co/600x400', dataAiHint: 'fashion brand' },
  { id: 4, title: 'Real Estate Platform', category: 'Web', tags: ['Vue.js', 'Django', 'PostgreSQL'], description: 'A real estate platform that connects property owners with potential buyers and renters.', image: 'https://placehold.co/600x400', dataAiHint: 'real estate' },
  { id: 5, title: 'Food Delivery App', category: 'App', tags: ['Flutter', 'Firebase', 'Google Maps API'], description: 'A food delivery app that connects local restaurants with hungry customers in their area.', image: 'https://placehold.co/600x400', dataAiHint: 'food delivery' },
  { id: 6, title: 'Educational Platform', category: 'Web', tags: ['Next.js', 'Express', 'AWS'], description: 'An online learning platform that offers courses in technology, business, and creative fields.', image: 'https://placehold.co/600x400', dataAiHint: 'learning platform' },
];

const PortfolioSection = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projects.filter(p => filter === 'All' || p.category === filter);

  return (
    <section id="portfolio" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Portfolio</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Explore some of the successful startups we've helped build and launch.
          </p>
        </div>

        <Tabs defaultValue="All" onValueChange={setFilter} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
            <ClickSpark><TabsTrigger value="All" className="cursor-target">All</TabsTrigger></ClickSpark>
            <ClickSpark><TabsTrigger value="Web" className="cursor-target">Web</TabsTrigger></ClickSpark>
            <ClickSpark><TabsTrigger value="App" className="cursor-target">App</TabsTrigger></ClickSpark>
            <ClickSpark><TabsTrigger value="Branding" className="cursor-target">Branding</TabsTrigger></ClickSpark>
          </TabsList>
          
          <TabsContent value={filter}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(project => (
                  <div key={project.id} className="cursor-target">
                    <TiltedCard
                      imageSrc={project.image}
                      altText={project.title}
                      captionText={project.title}
                      containerHeight="350px"
                      imageWidth="100%"
                      imageHeight="100%"
                      scaleOnHover={1.05}
                      rotateAmplitude={10}
                      showMobileWarning={false}
                      showTooltip={true}
                      displayOverlayContent={true}
                      overlayContent={
                          <div className="space-y-2">
                              <h3 className="text-xl font-bold font-headline">{project.title}</h3>
                              <p className="text-sm text-foreground/80">{project.description}</p>
                              <div className="flex flex-wrap gap-2 pt-2">
                                  {project.tags.map(tag => <Badge key={tag} variant="secondary" className="bg-black/50 text-white border-white/20">{tag}</Badge>)}
                              </div>
                          </div>
                      }
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        <div className="text-center mt-12">
            <Button size="lg" className="cursor-target">View More Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
