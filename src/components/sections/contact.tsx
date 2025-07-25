"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import MagnetLines from "@/components/magnet-lines";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500),
  consent: z.boolean().refine(val => val === true, { message: "You must agree to the terms." }),
});

const ContactSection = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
      consent: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
    form.reset();
  }

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
              <CardTitle className="font-headline">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField control={form.control} name="fullName" render={({ field }) => (
                    <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="Your name" {...field} className="cursor-target"/></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem><FormLabel>Email Address</FormLabel><FormControl><Input type="email" placeholder="Your email" {...field} className="cursor-target"/></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="subject" render={({ field }) => (
                    <FormItem><FormLabel>Subject</FormLabel><FormControl><Input placeholder="Subject" {...field} className="cursor-target"/></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem><FormLabel>Message</FormLabel><FormControl><Textarea placeholder="Your message" {...field} className="cursor-target"/></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="consent" render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} className="cursor-target"/></FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>I agree to the processing of my personal data.</FormLabel>
                      </div>
                    </FormItem>
                  )} />
                  <Button type="submit" className="w-full cursor-target">Send Message</Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold font-headline text-primary">Contact Information</h3>
            <div className="space-y-4 text-lg">
               <div className="flex space-x-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <span>Hyderabad, Telangana<br />India</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-primary" />
                <span>tarsnetworks@gmail.com</span>
              </div>
              <div className="flex space-x-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <span>+91 93682 03872 /<br/>+91 93980 97742</span>
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
