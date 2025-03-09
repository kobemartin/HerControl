import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, User2, Bot, Sparkles } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Message, Category, UserProfile } from '../types';
import { femaleMonthlyCycle } from '../utils/hormoneData';
import { generateChatResponse } from '../utils/openai';
import { findRecommendationsBySymptoms } from '../utils/neo4j';

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [isCollectingSymptoms, setIsCollectingSymptoms] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Add welcome message when component mounts
    if (messages.length === 0) {
      setMessages([{
        id: 'welcome',
        text: "Hi there! 👋 I'm your personal wellness companion. To provide you with the best recommendations, could you please tell me what menstrual symptoms you're experiencing? For example: cramps, headaches, mood changes, etc.",
        sender: 'assistant',
        timestamp: new Date()
      }]);
    }
  }, []);

  const conversationStarters = [
    "How are you feeling today?",
    "Need any self-care tips?",
    "Want to learn about cycle syncing?",
    "Looking for exercise recommendations?"
  ];

  const getCycleContext = (profile: UserProfile): string => {
    const today = new Date();
    const daysSinceCycle = Math.floor((today.getTime() - profile.cycleStartDate.getTime()) / (1000 * 60 * 60 * 24));
    const cycleDay = (daysSinceCycle % 28) + 1;
    const phase = Math.floor((daysSinceCycle % 28) / 7);
    const phases = ['menstrual', 'follicular', 'ovulatory', 'luteal'];
    return `Current cycle: Day ${cycleDay} (${phases[phase]} phase)`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { 
      id: Date.now().toString(), 
      text: input, 
      sender: 'user' as const, 
      timestamp: new Date() 
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // if (isCollectingSymptoms) {
      if (false) {
        // Extract symptoms from user input
        const userSymptoms = input.toLowerCase()
          .split(/[,.]/)
          .map(s => s.trim())
          .filter(s => s.length > 0);
        
        setSymptoms(userSymptoms);
        setIsCollectingSymptoms(false);

        // Get recommendations from Neo4j
        const recommendations = await findRecommendationsBySymptoms(userSymptoms);
        
        let responseText = "Thank you for sharing your symptoms. Based on what you've told me, here are some personalized recommendations:\n\n";
        
        if (recommendations.length > 0) {
          recommendations.forEach(rec => {
            responseText += `• ${rec.title}: ${rec.description}\n`;
          });
        } else {
          responseText += "I don't have specific recommendations for those symptoms yet, but I'm here to help you track and manage them. Would you like to know more about any particular aspect of your cycle?";
        }

        setMessages(prev => [...prev, {
          id: (Date.now() + 1).toString(),
          text: responseText,
          sender: 'assistant',
          timestamp: new Date()
        }]);

        setProfile({ gender: 'female', cycleStartDate: new Date() });
      } else {
        const chatHistory = messages
          .slice(-4)
          .map(msg => ({
            role: msg.sender as 'user' | 'assistant',
            content: msg.text
          }));

        const response = await generateChatResponse([
          ...chatHistory,
          { role: 'user', content: input }
        ]);

        setMessages(prev => [...prev, {
          id: (Date.now() + 1).toString(),
          text: response || "I'm having trouble connecting right now. Can you try asking me again? 💭",
          sender: 'assistant',
          timestamp: new Date()
        }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: "I'm having a moment! 🙈 Could you try again?",
        sender: 'assistant',
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatMessage = (text: string) => {
    // Convert numbered lists to markdown format
    const formattedText = text.replace(/(\d+)\.\s+/g, '$1\\. ');
    return formattedText;
  };

  return (
    <div className="bg-white/95 backdrop-blur rounded-3xl shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-[#FF69B4] to-[#F5B6A3] p-6 flex items-center gap-3">
        <MessageCircle className="w-7 h-7 text-white" />
        <h2 className="text-2xl font-serif text-white">Chat with HerControl</h2>
      </div>
      
      <div className="h-[500px] overflow-y-auto p-6 flex flex-col gap-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-4 ${
              message.sender === 'user' ? 'flex-row-reverse' : ''
            }`}
          >
            <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-sm">
              {message.sender === 'user' ? (
                <User2 className="w-6 h-6 text-gray-600" />
              ) : (
                <Bot className="w-6 h-6 text-[#FF69B4]" />
              )}
            </div>
            <div
              className={`max-w-[70%] p-6 rounded-2xl ${
                message.sender === 'user'
                  ? 'bg-gradient-to-r from-[#FF69B4] to-[#F5B6A3] text-white'
                  : 'bg-[#FF69B4]/10 text-gray-800'
              }`}
            >
              <div className="text-lg prose prose-pink">
                <ReactMarkdown>
                  {formatMessage(message.text)}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-sm">
              <Bot className="w-6 h-6 text-[#FF69B4]" />
            </div>
            <div className="max-w-[70%] p-6 rounded-2xl bg-[#FF69B4]/10">
              <div className="flex gap-2">
                <span className="w-2 h-2 bg-[#FF69B4] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 bg-[#FF69B4] rounded-full animate-bounce" style={{ animationDelay: '200ms' }} />
                <span className="w-2 h-2 bg-[#FF69B4] rounded-full animate-bounce" style={{ animationDelay: '400ms' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-6 border-t border-[#FF69B4]/20">
        {!isCollectingSymptoms && (
          <div className="mb-4 flex gap-2 overflow-x-auto pb-2">
            {conversationStarters.map((starter, index) => (
              <button
                key={index}
                onClick={() => setInput(starter)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF69B4]/10 text-sm whitespace-nowrap hover:bg-[#FF69B4]/20 transition-colors"
              >
                <Sparkles className="w-4 h-4 text-[#FF69B4]" />
                {starter}
              </button>
            ))}
          </div>
        )}
        <form onSubmit={handleSubmit} className="flex gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isCollectingSymptoms 
              ? "Enter your symptoms (e.g., cramps, headaches, mood changes...)" 
              : "Ask me anything or share how you're feeling..."}
            className="flex-1 p-4 rounded-xl bg-[#FF69B4]/10 border-0 focus:ring-2 focus:ring-[#FF69B4] placeholder-gray-500 text-lg"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-gradient-to-r from-[#FF69B4] to-[#F5B6A3] text-white px-8 py-4 rounded-xl hover:opacity-90 transition-opacity font-medium text-lg disabled:opacity-50"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;