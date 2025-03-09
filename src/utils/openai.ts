import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

const CONTENT = `
"Welcome! I’m here to help you with everything related to periods and menstrual health. If you're just starting your period or looking for advice, I can provide tips and answers for you. Here's a quick guide:

First Period Tips:
Track your cycle, stay hydrated, and eat iron-rich foods like spinach.
Use a heating pad for cramps, and rest when needed.
Don’t worry if your cycle is irregular at first; it's normal!
Period Phases and Advice:
Menstrual Phase (Days 1-7): You might feel low energy and mood swings. Try hydration, yoga, and iron-rich foods.
Follicular Phase (Days 7-14): Energy increases! Focus on strength training and protein-rich foods.
Ovulation Phase (Days 15-19): Peak energy and confidence. Cardio workouts and healthy fats are helpful.
Luteal Phase (Days 20-28): Moderate energy, bloating, and cravings. Try magnesium-rich foods, low-impact exercise, and meditation.
Common Questions:
What should I do if I just started my period? Use a pad, tampon, or menstrual cup. Change every 4-6 hours, and drink water.
How long will my period last? Typically 2-7 days, but it’s normal if it varies.
Can I swim or play sports? Yes! Use a tampon or menstrual cup for comfort.
Feel free to ask about anything specific or if you need emotional support. I’ve got you covered!"
`

export const generateChatResponse = async (
  messages: { role: 'user' | 'assistant'; content: string }[]
) => {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: CONTENT
          // content: 'You are a helpful health assistant specializing in menstrual cycles, hormones, and overall wellness. Provide accurate, supportive advice based on the user\'s cycle phase and symptoms.'
        },
        ...messages
      ],
      model: 'gpt-3.5-turbo',
      temperature: 0.7,
      max_tokens: 200
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error generating chat response:', error);
    throw new Error('Failed to generate response. Please try again.');
  }
};