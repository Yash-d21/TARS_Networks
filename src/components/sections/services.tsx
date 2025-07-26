import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Code2, Smartphone, Megaphone, University, Handshake, Cpu, Palette, Zap } from 'lucide-react';
import MagicBento from '../magic-bento';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom, responsive websites and web applications built with modern technologies. We focus on performance, user experience, and scalability.'
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android. We deliver intuitive, feature-rich apps that engage users and drive growth.'
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Comprehensive marketing strategies including SEO, PPC, social media, and content marketing to increase visibility and drive customer acquisition.'
  },
  {
    icon: University,
    title: 'Startup Incubation',
    description: 'End-to-end support including workspace, funding opportunities, legal guidance, and market entry strategies for early-stage startups.'
  },
  {
    icon: Handshake,
    title: 'Mentorship',
    description: 'One-on-one guidance from industry experts and successful entrepreneurs who provide insights, feedback, and strategic direction.'
  },
  {
    icon: Cpu,
    title: 'AI Automation & Integrations',
    description: 'Development of intelligent agents and custom algorithms to automate processes and provide data-driven insights.'
  },


];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Services</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We offer a comprehensive suite of services designed to help startups at every stage of their journey, from ideation to market expansion.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <MagicBento 
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 0, 255"
            customData={services.map((service, index) => ({
              color: "#060010",
              title: service.title,
              description: service.description,
              label: service.title.split(' ')[0], // Use first word as label
            }))}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
