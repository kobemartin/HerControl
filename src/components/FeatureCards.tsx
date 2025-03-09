import React, { useState } from 'react';
import { Calendar, LineChart, Baby, Users, Book, Heart } from 'lucide-react';
import CycleTracker from './features/CycleTracker';
import SymptomLogger from './features/SymptomLogger';
import FertilityInsights from './features/FertilityInsights';
import CommunityHub from './features/CommunityHub';
import FirstTimersGuide from './features/FirstTimersGuide';
import PartnerSupport from './features/PartnerSupport';

const FeatureCards = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  const features = [
    {
      id: 'cycle',
      icon: <Calendar className="w-8 h-8" />,
      title: "Cycle Phase Tracker",
      description: "View your current cycle phase (menstrual, follicular, ovulatory, luteal) with a visual timeline.",
      component: CycleTracker
    },
    {
      id: 'symptoms',
      icon: <LineChart className="w-8 h-8" />,
      title: "Symptom Logger",
      description: "Log daily symptoms and moods to identify patterns over time.",
      component: SymptomLogger
    },
    {
      id: 'fertility',
      icon: <Baby className="w-8 h-8" />,
      title: "Fertility Insights",
      description: "Estimate fertile windows and learn about ovulation signs.",
      component: FertilityInsights
    },
    {
      id: 'community',
      icon: <Users className="w-8 h-8" />,
      title: "Community Hub",
      description: "Join an anonymous forum to share experiences, ask questions, and connect with others on their cycle-syncing journey.",
      component: CommunityHub
    },
    {
      id: 'guide',
      icon: <Book className="w-8 h-8" />,
      title: "First Timers Guide",
      description: "Learn the basics of periods, cycle phases, and self-care tips designed for girls new to menstruation.",
      component: FirstTimersGuide
    },
    {
      id: 'partner',
      icon: <Heart className="w-8 h-8" />,
      title: "Partner Support Tools",
      description: "Provide dads, boyfriends, and husbands with cycle phase insights and tips to support the women in their lives.",
      component: PartnerSupport
    }
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div 
            key={feature.id}
            onClick={() => setActiveFeature(feature.id)}
            className="bg-white/95 backdrop-blur rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] cursor-pointer"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-br from-[#f8c4c4] to-[#e88a8a] rounded-xl text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif text-gray-800">{feature.title}</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>

      {features.map((feature) => {
        const FeatureComponent = feature.component;
        return (
          <FeatureComponent
            key={feature.id}
            isOpen={activeFeature === feature.id}
            onClose={() => setActiveFeature(null)}
          />
        );
      })}
    </>
  );
};

export default FeatureCards;