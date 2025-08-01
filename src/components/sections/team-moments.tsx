"use client";

import Masonry from "../masonry";

const items = [
    { id: "1", img: "/assets/team1.jpg", url: "#", height: 300, "data-ai-hint": "team brainstorming" },
    { id: "2", img: "/assets/team2.jpg", url: "#", height: 450, "data-ai-hint": "office celebration" },
    { id: "3", img: "/assets/team6.jpg", url: "#", height: 350, "data-ai-hint": "product launch" },
    { id: "4", img: "/assets/team4.jpg", url: "#", height: 500, "data-ai-hint": "hackathon event" },
    { id: "5", img: "/assets/team5.jpg", url: "#", height: 400, "data-ai-hint": "team dinner" },
    { id: "6", img: "/assets/team3.png", url: "#", height: 550, "data-ai-hint": "client meeting" },
    { id: "7", img: "/assets/team7.jpg", url: "#", height: 250, "data-ai-hint": "workshop session" },
    { id: "8", img: "/assets/team8.jpg", url: "#", height: 400, "data-ai-hint": "company anniversary" },
    { id: "9", img: "/assets/team1.jpg", url: "#", height: 350, "data-ai-hint": "group photo" },
    { id: "10", img: "/assets/team2.jpg", url: "#", height: 500, "data-ai-hint": "award ceremony" },
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
