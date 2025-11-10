"use client";

import { useIsMobile } from "@/hooks/use-is-mobile";
import Masonry from "../masonry";

const items = [
    { id: "1", img: "/assets/team1.jpg", url: "#", height: 300, alt: "team brainstorming" },
    { id: "2", img: "/assets/team2.jpg", url: "#", height: 450, alt: "office celebration" },
    { id: "3", img: "/assets/team6.jpg", url: "#", height: 350, alt: "product launch" },
    { id: "4", img: "/assets/team4.jpg", url: "#", height: 500, alt: "hackathon event" },
    { id: "5", img: "/assets/team5.jpg", url: "#", height: 400, alt: "team dinner" },
    { id: "6", img: "/assets/team3.png", url: "#", height: 550, alt: "client meeting" },
    { id: "7", img: "/assets/team7.jpg", url: "#", height: 250, alt: "workshop session" },
    { id: "8", img: "/assets/team8.jpg", url: "#", height: 400, alt: "company anniversary" },
    { id: "9", img: "/assets/team1.jpg", url: "#", height: 350, alt: "group photo" },
    { id: "10", img: "/assets/team2.jpg", url: "#", height: 500, alt: "award ceremony" },
];

const TeamMomentsSection = () => {
    const isMobile = useIsMobile();

    return (
        <section id="team-moments" className="bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">The Team & Their Moments</h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        A glimpse into the hard work, collaboration, and celebrations that define our culture.
                    </p>
                </div>
                {isMobile ? (
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {items.map(item => (
                            <div key={item.id} className="relative overflow-hidden rounded-xl border border-border/40 bg-muted/20">
                                <div className="aspect-[3/4]">
                                    <img
                                        src={item.img}
                                        alt={item.alt}
                                        className="h-full w-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <Masonry items={items} />
                )}
            </div>
        </section>
    );
};

export default TeamMomentsSection;
