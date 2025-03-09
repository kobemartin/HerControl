import React, { useEffect } from 'react';
import ChatBot from './components/ChatBot';
import Header from './components/Header';
import FeatureCards from './components/FeatureCards';
import { initNeo4j, closeNeo4jConnection } from './utils/neo4j';
import { Instagram, Twitter, Music } from 'lucide-react';

function App() {
  useEffect(() => {
    try {
      initNeo4j();
    } catch (error) {
      console.error('Failed to initialize Neo4j:', error);
    }
    return () => {
      closeNeo4jConnection();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FF69B4] via-[#90DEE8] to-[#A3E6FF] pb-12">
      <Header />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="relative">
            <img 
              src="src/assets/girl-illustration.png" 
              alt="Illustrated girl with flowers" 
              className="absolute -left-15 -top-0 w-64 h-64 object-contain animate-fade-in"
              style={{
                animation: 'fadeIn 1s ease-out',
                zIndex: 5
              }}
            />
            <div className="text-center animate-fade-in">
              <h1 className="text-6xl font-serif mb-6 text-white">HerControl</h1>
              <h2 className="text-2xl mb-4 text-white/90">Align your life with your body's natural rhythm</h2>
              <p className="text-lg mb-12 max-w-2xl mx-auto text-white/80">
                Get personalized tips on workouts, nutrition, and self care based on your unique cycle
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="animate-scale-in">
            <ChatBot />
          </div>
          <br></br>
          <div className="mb-12 animate-slide-up">
            <FeatureCards />
          </div>
          <div className="flex justify-center items-center gap-8 py-8">
            <a 
              href="https://www.tiktok.com/@hercontrol" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
            >
              <Music className="w-8 h-8" />
            </a>
            <a 
              href="https://www.instagram.com/hercontrol" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
            >
              <Instagram className="w-8 h-8" />
            </a>
            <a 
              href="https://x.com/hercontrol" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
            >
              <Twitter className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App