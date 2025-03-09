import React, { useState } from 'react';
import { Users, Book, Heart, Calendar, Brain, Activity, X } from 'lucide-react';
import type { InfoCard } from '../types';

const cards: InfoCard[] = [
  {
    id: 'cycles',
    title: "Learn the 4 cycles",
    description: "Understand the menstrual, follicular, ovulation, and luteal phases of your cycle",
    image: "https://images.pexels.com/photos/19369155/pexels-photo-19369155.jpeg",
    icon: <Calendar className="w-6 h-6 text-[#e88a8a]" />,
    content: {
      sections: [
        {
          title: "Menstrual Phase (Days 1-5)",
          text: [
            "Your period begins and hormone levels are at their lowest",
            "Focus on rest and gentle movement",
            "Practice self-care and nurturing activities",
            "Listen to your body's need for rest"
          ]
        },
        {
          title: "Follicular Phase (Days 6-14)",
          text: [
            "Estrogen begins to rise",
            "Energy levels increase",
            "Great time for starting new projects",
            "Ideal for high-intensity workouts"
          ]
        },
        {
          title: "Ovulatory Phase (Days 15-17)",
          text: [
            "Peak fertility window",
            "Highest energy levels",
            "Excellent for social activities",
            "Strong communication skills"
          ]
        },
        {
          title: "Luteal Phase (Days 18-28)",
          text: [
            "Progesterone rises then falls",
            "Energy begins to decrease",
            "Focus on completing tasks",
            "Practice stress management"
          ]
        }
      ]
    }
  },
  {
    id: 'hormones',
    title: "Work with your hormones",
    description: "Learn how estrogen, progesterone, LH, and FSH affect your daily life",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=400&h=400",
    icon: <Brain className="w-6 h-6 text-[#e88a8a]" />,
    content: {
      sections: [
        {
          title: "Estrogen",
          text: [
            "Builds uterine lining",
            "Improves skin and hair health",
            "Boosts mood and energy",
            "Peaks during ovulation"
          ]
        },
        {
          title: "Progesterone",
          text: [
            "Maintains uterine lining",
            "Promotes calm and relaxation",
            "Supports sleep quality",
            "Rises after ovulation"
          ]
        },
        {
          title: "Luteinizing Hormone (LH)",
          text: [
            "Triggers ovulation",
            "Peaks 24-36 hours before ovulation",
            "Important for fertility",
            "Works with FSH"
          ]
        },
        {
          title: "Follicle Stimulating Hormone (FSH)",
          text: [
            "Stimulates follicle growth",
            "Prepares eggs for release",
            "Essential for ovulation",
            "Peaks early in cycle"
          ]
        }
      ]
    }
  },
  {
    id: 'action',
    title: "Take action",
    description: "Get personalized recommendations for each phase of your cycle",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400&h=400",
    icon: <Activity className="w-6 h-6 text-[#e88a8a]" />,
    content: {
      sections: [
        {
          title: "Nutrition Tips",
          text: [
            "Eat iron-rich foods during menstruation",
            "Increase protein during follicular phase",
            "Stay hydrated during ovulation",
            "Add magnesium-rich foods in luteal phase"
          ]
        },
        {
          title: "Exercise Recommendations",
          text: [
            "Light yoga during menstruation",
            "High-intensity workouts in follicular phase",
            "Group classes during ovulation",
            "Moderate exercise in luteal phase"
          ]
        }
      ]
    }
  },
  {
    id: 'community',
    title: "Community Hub",
    description: "Join an anonymous forum to share experiences and connect with others on their cycle-syncing journey",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400&h=400",
    icon: <Users className="w-6 h-6 text-[#e88a8a]" />,
    content: {
      sections: [
        {
          title: "Connect & Share",
          text: [
            "Join topic-specific discussion groups",
            "Share your experiences anonymously",
            "Get support from others",
            "Access expert moderators"
          ]
        },
        {
          title: "Learn Together",
          text: [
            "Weekly live Q&A sessions",
            "Member success stories",
            "Tips and tricks from the community",
            "Resource sharing"
          ]
        }
      ]
    }
  },
  {
    id: 'guide',
    title: "First Timers Guide",
    description: "Learn the basics of periods, cycle phases, and self-care tips designed for those new to menstruation",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400&h=400",
    icon: <Book className="w-6 h-6 text-[#e88a8a]" />,
    content: {
      sections: [
        {
          title: "Getting Started",
          text: [
            "Understanding your first period",
            "What to expect month to month",
            "Essential supplies and preparation",
            "Common experiences and variations"
          ]
        },
        {
          title: "Self-Care Basics",
          text: [
            "Managing cramps and discomfort",
            "Tracking your cycle",
            "When to seek medical advice",
            "Building healthy habits"
          ]
        }
      ]
    }
  },
  {
    id: 'partner',
    title: "Partner Support Tools",
    description: "Resources for partners to understand cycle phases and provide meaningful support",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=400&h=400",
    icon: <Heart className="w-6 h-6 text-[#e88a8a]" />,
    content: {
      sections: [
        {
          title: "Understanding Her Cycle",
          text: [
            "Basic hormone education",
            "Common symptoms and experiences",
            "How to track and support each phase",
            "Communication tips"
          ]
        },
        {
          title: "Practical Support",
          text: [
            "Phase-specific support strategies",
            "Creating a supportive environment",
            "When to give space vs. offer help",
            "Emergency care and red flags"
          ]
        }
      ]
    }
  }
];

const InfoModal: React.FC<{
  card: InfoCard;
  onClose: () => void;
}> = ({ card, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-gradient-to-br from-[#f8c4c4] to-[#e88a8a] rounded-xl text-white">
            {card.icon}
          </div>
          <h2 className="text-2xl font-serif">{card.title}</h2>
        </div>

        <div className="space-y-8">
          {card.content.sections.map((section, index) => (
            <div key={index} className="bg-[#f8c4c4]/10 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.text.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#e88a8a]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const InfoCards = () => {
  const [selectedCard, setSelectedCard] = useState<InfoCard | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => setSelectedCard(card)}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden mb-8 shadow-xl transition-transform group-hover:scale-[1.02]">
              <img 
                src={card.image} 
                alt={card.title}
                className="object-cover w-full h-full transform transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
              {card.icon && (
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur p-3 rounded-xl shadow-lg">
                  {card.icon}
                </div>
              )}
            </div>
            <h3 className="text-2xl font-serif mb-4 text-center">{card.title}</h3>
            <p className="text-lg text-center text-gray-700">{card.description}</p>
          </div>
        ))}
      </div>

      {selectedCard && (
        <InfoModal
          card={selectedCard}
          onClose={() => setSelectedCard(null)}
        />
      )}
    </>
  );
};

export default InfoCards;