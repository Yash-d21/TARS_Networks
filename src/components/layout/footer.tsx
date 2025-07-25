import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import TextPressure from '@/components/text-pressure';

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground border-t relative">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4 md:col-span-1">
             <div style={{position: 'relative', height: '80px'}}>
              <TextPressure
                text="TARS"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="hsl(var(--primary))"
                minFontSize={36}
              />
            </div>
            <p className="text-muted-foreground">
              Turning Ambitions into Real Startups. We help entrepreneurs build successful tech ventures through our comprehensive incubation program.
            </p>
          </div>

          <div className="md:col-start-3">
            <h3 className="font-headline font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="hover:text-primary transition-colors cursor-target">About Us</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors cursor-target">Our Services</Link></li>
              <li><Link href="#how-it-works" className="hover:text-primary transition-colors cursor-target">How It Works</Link></li>
              <li><Link href="#portfolio" className="hover:text-primary transition-colors cursor-target">Portfolio</Link></li>
              <li><Link href="#testimonials" className="hover:text-primary transition-colors cursor-target">Testimonials</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors cursor-target">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors cursor-target">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors cursor-target">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-headline font-semibold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">Subscribe to our newsletter to receive updates on startup opportunities and events.</p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Your email address" className="cursor-target" />
              <Button type="submit" className="cursor-target">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TARS Networks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
