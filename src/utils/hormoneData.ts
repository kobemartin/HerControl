interface DayAdvice {
  food: string[];
  fitness: string[];
  symptoms: string[];
}

// Female monthly cycle advice
export const femaleMonthlyCycle: Record<number, DayAdvice> = {
  1: { // Menstrual Phase
    food: ['Iron-rich foods', 'Anti-inflammatory foods'],
    fitness: ['Light exercise', 'Yoga', 'Walking'],
    symptoms: ['May experience fatigue', 'Cramps possible']
  },
  2: { // Follicular Phase
    food: ['Fermented foods', 'Fresh fruits'],
    fitness: ['High-intensity workouts', 'New challenges'],
    symptoms: ['Increasing energy', 'Improved mood']
  },
  3: { // Ovulatory Phase
    food: ['Lean proteins', 'Complex carbs'],
    fitness: ['Strength training', 'Group activities'],
    symptoms: ['Peak energy', 'Enhanced mood']
  },
  4: { // Luteal Phase
    food: ['Magnesium-rich foods', 'Calming herbs'],
    fitness: ['Moderate intensity', 'Swimming'],
    symptoms: ['Energy fluctuations', 'Mood changes']
  }
};