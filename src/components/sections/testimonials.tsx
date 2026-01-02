"use client";

import { useIsMobile } from "@/hooks/use-is-mobile";
import CircularGallery from "../circular-gallery";

const testimonials = [
  { image: '/assets/1.png' },
  { image: '/assets/2.png' },
  { image: '/assets/3.png' },
  { image: '/assets/4.png' },
  { image: '/assets/5.png' },
  { image: '/assets/6.png' },
  { image: '/assets/7.png' },
  { image: '/assets/8.png' },
  { image: '/assets/9.png' },
  { image: '/assets/10.png' }
];

const galleryItems = testimonials.map(t => ({ image: t.image, text: '' }));

const TestimonialsSection = () => {
  const isMobile = useIsMobile();

  return (
    <section id="testimonials" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">What Our Clients Say</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Hear from the founders and entrepreneurs who have worked with us to build their startups.
          </p>
        </div>

        {isMobile ? (
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
            {galleryItems.map((item, index) => (
              <div
                key={`${item.image}-${index}`}
                className="snap-center flex-none w-40 sm:w-48 rounded-xl border border-border/50 bg-background/60 p-3 shadow-sm"
              >
                <img
                  src={item.image}
                  alt="Client testimonial"
                  className="h-32 w-full rounded-lg object-cover sm:h-36"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ) : (
          <div style={{ height: "600px", position: "relative" }}>
            <CircularGallery items={galleryItems} />
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
