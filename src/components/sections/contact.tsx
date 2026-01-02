"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";
import MagnetLines from "@/components/magnet-lines";
import { useIsMobile } from "@/hooks/use-is-mobile";

const ContactSection = () => {
  const [embedDomain, setEmbedDomain] = useState("localhost");
  const isMobile = useIsMobile(640);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setEmbedDomain(window.location.hostname || "localhost");
    }
  }, []);

  return (
    <section id="contact" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Get In Touch</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Ready to turn your idea into a successful startup? Contact us today to schedule a consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Schedule a Call</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Book a dedicated time with our team to talk through your idea, product needs, or partnership
                  opportunities. Pick a slot below to connect instantly.
                </p>
                <div
                  className="relative w-full"
                  style={{ minHeight: isMobile ? "520px" : "650px" }}
                >
                  <iframe
                    src={`https://cal.com/yashwanth-devulapally/30min?user=yashwanth-devulapally&overlayCalendar=true&embed=true&embed_domain=${embedDomain}`}
                    className="absolute inset-0 h-full w-full rounded-md border border-input"
                    allow="camera; microphone; autoplay; encrypted-media"
                    frameBorder="0"
                    title="Schedule with Yashwanth"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold font-headline text-primary">Contact Information</h3>
            <div className="space-y-4 text-lg">
               <div className="flex items-start space-x-2">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span className="flex-1">Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="flex-1">tarsnetworks@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span className="flex-1">+91 93980 97742</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-headline text-primary mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" asChild className="cursor-target"><a href="#"><Twitter className="h-5 w-5" /></a></Button>
                <Button variant="outline" size="icon" asChild className="cursor-target"><a href="#"><Linkedin className="h-5 w-5" /></a></Button>
                <Button variant="outline" size="icon" asChild className="cursor-target"><a href="#"><Github className="h-5 w-5" /></a></Button>
              </div>
            </div>
             <div className="h-64 flex items-center justify-center">
              <MagnetLines containerSize="100%" rows={10} columns={10} lineHeight='2vmin'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
