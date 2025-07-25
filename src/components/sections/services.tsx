import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Code2, Smartphone, Megaphone, University, Handshake, Cpu } from 'lucide-react';

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
    title: 'AI Agents and Algorithms',
    description: 'Development of intelligent agents and custom algorithms to automate processes and provide data-driven insights.'
  }
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="reflective-card text-center hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-accent text-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8" />
                </div>
                <CardTitle className="font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
