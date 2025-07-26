"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ClickSpark from '@/components/click-spark';
import TiltedCard from '../tilted-card';

const projects = [
  { id: 1, title: 'Clat Community', category: 'Web', tags: ['React', 'Node.js', 'MongoDB'], description: 'A comprehensive platform for CLAT aspirants with study materials, mock tests, and community features.', image: '/assets/clatcommunity.png', dataAiHint: 'education platform', url: 'https://clatcommunity.com' },
  { id: 2, title: 'Clat AI', category: 'AI', tags: ['AI/ML', 'Python', 'React'], description: 'An AI-powered platform for CLAT preparation with intelligent study recommendations and personalized learning paths.', image: '/assets/clatai.png', dataAiHint: 'ai platform', url: 'https://clatai.onrender.com' },
  { id: 3, title: 'Boltabacus', category: 'Web', tags: ['Next.js', 'TypeScript', 'Tailwind'], description: 'A modern web application with innovative features and cutting-edge technology stack.', image: '/assets/boltabacus.png', dataAiHint: 'web application', url: 'https://boltabacus.com' },
  { id: 4, title: 'Sanjeev Kaliwala', category: 'Web', tags: ['React', 'Node.js', 'MongoDB'], description: 'A professional portfolio and business website showcasing expertise and services.', image: '/assets/image1.jpg', dataAiHint: 'portfolio website', url: 'https://sanjeevkaliwala.com' },
  { id: 5, title: 'Xperio', category: 'App & Web', tags: ['React Native', 'Next.js', 'Firebase'], description: 'A comprehensive mobile app and web platform with cross-platform functionality and modern design.', image: '/assets/image2.png', dataAiHint: 'mobile app and website' },
  { id: 6, title: 'Government Projects', category: 'Enterprise', tags: ['Confidential', 'Enterprise', 'Security'], description: 'Confidential government projects with high-security requirements and specialized implementations.', image: '/assets/image3.png', dataAiHint: 'government projects' },
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
                  <div 
                    key={project.id} 
                    className="cursor-target"
                    onClick={() => {
                      if (project.url) {
                        window.open(project.url, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    style={{ cursor: project.url ? 'pointer' : 'default' }}
                  >
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
