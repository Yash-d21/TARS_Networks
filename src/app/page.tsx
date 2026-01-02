"use client";

import { motion } from 'framer-motion';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import ServicesSection from '@/components/sections/services';
import HowItWorksSection from '@/components/sections/how-it-works';
import PortfolioSection from '@/components/sections/portfolio';
import TestimonialsSection from '@/components/sections/testimonials';
import ContactSection from '@/components/sections/contact';
import TeamMomentsSection from '@/components/sections/team-moments';
import ProfileCard from '@/components/profile-card';

const founders = [
  {
    name: 'Yashwanth D',
    title: 'Founder & CEO',
    handle: 'yashwanth-devulapally',
    avatarUrl: '/assets/yashwanth.jpg',
    linkedin: 'https://www.linkedin.com/in/yashwanth-devulapally/',
  },
  {
    name: 'Sai Pradeep',
    title: 'Co-founder & CMO',
    handle: 'sai-pradeep',
    avatarUrl: '/assets/saipradeep.png',
    linkedin: 'https://www.linkedin.com/in/saipradeep-reddy-yeruva-a413a22a5/',
  },
  {
    name: 'Asvaan Zuhair',
    title: 'CTO',
    handle: 'asvaan-zuhair',
    avatarUrl: '/assets/asvaan.png',
    linkedin: 'https://www.linkedin.com/in/asvaan-zuhair-29b390336/',
  },
];

const openLinkedIn = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const AnimatedSection = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={sectionVariants}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <AnimatedSection><HeroSection /></AnimatedSection>
        <AnimatedSection><AboutSection /></AnimatedSection>
        <motion.section 
          id="founders" 
          className="bg-background"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Meet the Founders</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                The visionary leaders driving TARS Networks forward.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {founders.map((founder) => (
                <div key={founder.name} className="flex justify-center">
                     <ProfileCard
                        name={founder.name}
                        title={founder.title}
                        handle={founder.handle}
                        avatarUrl={founder.avatarUrl}
                        contactText="View Profile"
                        onContactClick={() => openLinkedIn(founder.linkedin)}
                        status="Online"
                        showUserInfo={true}
                        enableTilt={true}
                      />
                </div>
              ))}
            </div>
          </div>
        </motion.section>
        <AnimatedSection><ServicesSection /></AnimatedSection>
        <AnimatedSection><HowItWorksSection /></AnimatedSection>
        <AnimatedSection><PortfolioSection /></AnimatedSection>
        <AnimatedSection><TestimonialsSection /></AnimatedSection>
        <AnimatedSection><TeamMomentsSection /></AnimatedSection>
        <AnimatedSection><ContactSection /></AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
