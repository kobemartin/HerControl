export type Gender = 'female';

export type Category = 'food' | 'fitness' | 'symptoms';

export type CyclePhase = 'menstrual' | 'follicular' | 'ovulatory' | 'luteal';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

export interface UserProfile {
  gender: Gender;
  cycleStartDate: Date;
}

export interface Symptom {
  id: string;
  date: Date;
  type: 'mood' | 'pain' | 'energy' | 'sleep' | 'other';
  severity: 1 | 2 | 3 | 4 | 5;
  notes: string;
}

export interface FeatureCardProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface InfoCard {
  id: string;
  title: string;
  description: string;
  image: string;
  icon?: React.ReactNode;
  content: {
    sections: {
      title: string;
      text: string[];
    }[];
  };
}