"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { TarsLogo } from '@/components/tars-logo';
import PixelTransition from '@/components/pixel-transition';
import '@/components/pixel-transition.css';
import GooeyNav from '@/components/gooey-nav';
import '@/components/gooey-nav.css';


const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2 cursor-target">
          <PixelTransition
              firstContent={<TarsLogo className="h-8 w-auto text-primary" />}
              secondContent={
                <div className="w-full h-full grid place-items-center bg-background">
                  <p className="font-bold text-lg text-primary">Meow!</p>
                </div>
              }
              gridSize={10}
              pixelColor="hsl(var(--background))"
              aspectRatio="20%"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
           <GooeyNav items={navLinks} />
        </nav>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="cursor-target">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-6 p-6">
                <Link href="/" className="flex items-center space-x-2 cursor-target" onClick={handleLinkClick}>
                  <TarsLogo className="h-8 w-auto text-primary" />
                </Link>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-lg font-medium hover:text-primary transition-colors cursor-target" onClick={handleLinkClick}>
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
