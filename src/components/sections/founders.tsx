"use client";

import ProfileCard from '../profile-card';

const founders = [
  {
    name: 'Yashwanth D',
    title: 'Co-founder & CEO',
    handle: 'yashwanth-devulapally',
    avatarUrl: '/assets/team1.jpg',
    dataAiHint: 'male founder portrait',
    linkedin: 'https://www.linkedin.com/in/yashwanth-devulapally/',
  },
  {
    name: 'Sai Pradeep',
    title: 'Co-founder & CMO',
    handle: 'sai-pradeep',
    avatarUrl: '/assets/team2.jpg',
    linkedin: 'https://www.linkedin.com/in/saipradeep-reddy-yeruva-a413a22a5/',
  },
];

const FoundersSection = () => {
  const openLinkedIn = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="founders" className="bg-background">
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
    </section>
  );
};

export default FoundersSection;
