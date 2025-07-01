import React, { useEffect, useState } from 'react';
import { Code, Terminal, Zap } from 'lucide-react';

const Header: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const parallaxStyle = {
    transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
  };

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-4 h-4 border-2 border-neon-cyan rotate-45 floating"
          style={{ ...parallaxStyle, animationDelay: '0s' }}
        />
        <div 
          className="absolute top-3/4 right-1/4 w-6 h-6 border-2 border-neon-magenta floating"
          style={{ ...parallaxStyle, animationDelay: '2s' }}
        />
        <div 
          className="absolute top-1/2 right-1/3 w-3 h-3 bg-neon-lime floating"
          style={{ ...parallaxStyle, animationDelay: '4s' }}
        />
      </div>

      <div className="text-center z-10 relative">
        <div className="mb-8 flex justify-center space-x-8">
          <Code className="w-8 h-8 text-neon-cyan" />
          <Terminal className="w-8 h-8 text-neon-magenta" />
          <Zap className="w-8 h-8 text-neon-lime" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-widest glitch">
          BAYU DIMAS
        </h1>
        
        <div className="text-xl md:text-3xl font-medium mb-8">
          <span className="color-shift inline-block">Full-Stack Developer</span>
          <span className="text-neon-cyan mx-4">|</span>
          <span className="color-shift inline-block">Cyber Security Enthusiast</span>
        </div>
        
        <p className="text-lg text-cyber-gray max-w-2xl mx-auto leading-relaxed">
          Membangun masa depan digital dengan teknologi canggih dan keamanan siber yang tak tertandingi
        </p>
        
        <div className="mt-12">
          <div className="inline-block px-8 py-3 bg-gradient-to-r from-neon-cyan to-neon-magenta text-black font-bold rounded-lg transform hover:scale-105 transition-all duration-300 pulse-glow">
            <span className="text-cyber-dark">SISTEM AKTIF</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;