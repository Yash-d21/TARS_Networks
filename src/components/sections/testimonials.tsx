"use client";

import CircularGallery from '../circular-gallery';

const testimonials = [
  {
    quote: "Working with TARS Networks was a game-changer for our startup. Their technical expertise and strategic guidance helped us build a product that our users love. Within six months of launch, we secured our first round of funding.",
    name: 'Pranav Sharma',
    role: 'Co-founder, TechVista Solutions',
    image: 'https://placehold.co/800x600',
    dataAiHint: 'portrait person'
  },
  {
    quote: "The team at TARS Networks understood our vision from day one. They helped us refine our concept, build an incredible app, and create a marketing strategy that resonated with our target audience. We couldn't be happier with the results.",
    name: 'Anirudh Sharma',
    role: 'CTO, CloudNine Analytics',
    image: 'https://placehold.co/800x600',
    dataAiHint: 'portrait person'
  },
  {
    quote: "As a non-technical founder, I was worried about building an e-commerce platform. TARS Networks made the process seamless and enjoyable. Their branding expertise helped us stand out in a crowded market, and sales have exceeded our projections.",
    name: 'Shreyash Chintalwar',
    role: 'COO, InnovatePro Solutions',
    image: 'https://placehold.co/800x600',
    dataAiHint: 'portrait person'
  }
];

const galleryItems = testimonials.map(t => ({ image: t.image, text: '' }));

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">What Our Clients Say</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Hear from the founders and entrepreneurs who have worked with us to build their startups.
          </p>
        </div>
        
        <div style={{ height: '600px', position: 'relative' }}>
          <CircularGallery items={galleryItems} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
