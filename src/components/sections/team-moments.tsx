"use client";

import Masonry from "../masonry";

const items = [
    { id: "1", img: "https://placehold.co/600x900", url: "#", height: 400, "data-ai-hint": "team brainstorming" },
    { id: "2", img: "https://placehold.co/600x750", url: "#", height: 250, "data-ai-hint": "office celebration" },
    { id: "3", img: "https://placehold.co/600x800", url: "#", height: 600, "data-ai-hint": "product launch" },
    { id: "4", img: "https://placehold.co/600x600", url: "#", height: 300, "data-ai-hint": "hackathon event" },
    { id: "5", img: "https://placehold.co/600x950", url: "#", height: 500, "data-ai-hint": "team dinner" },
    { id: "6", img: "https://placehold.co/600x700", url: "#", height: 350, "data-ai-hint": "client meeting" },
    { id: "7", img: "https://placehold.co/600x850", url: "#", height: 450, "data-ai-hint": "workshop session" },
    { id: "8", img: "https://placehold.co/600x1000", url: "#", height: 550, "data-ai-hint": "company anniversary" },
    { id: "9", img: "https://placehold.co/600x800", url: "#", height: 400, "data-ai-hint": "group photo" },
    { id: "10", img: "https://placehold.co/600x750", url: "#", height: 250, "data-ai-hint": "award ceremony" },
];

const TeamMomentsSection = () => {
    return (
        <section id="team-moments" className="bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">The Team & Their Moments</h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        A glimpse into the hard work, collaboration, and celebrations that define our culture.
                    </p>
                </div>
                <Masonry items={items} />
            </div>
        </section>
    );
};

export default TeamMomentsSection;
