import React from 'react';

const Header = () => {
  return (
    <header className="glass-morphism py-4 px-6 fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto flex justify-end items-center gap-8 text-lg">
        <a href="#" className="text-white hover:opacity-80 transition-all duration-300">Blog</a>
        <a href="#" className="text-white hover:opacity-80 transition-all duration-300">Help</a>
        <a href="#" className="text-white hover:opacity-80 transition-all duration-300">Community</a>
        <a 
          href="#" 
          className="bg-white/20 backdrop-blur text-white px-6 py-2 rounded-full 
                   hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
        >
          Log In
        </a>
      </nav>
    </header>
  );
};

export default Header;