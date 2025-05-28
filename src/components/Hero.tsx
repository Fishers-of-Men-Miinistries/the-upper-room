import React from 'react';
import content from '../data/content.json';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${content.church.heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 opacity-0 animate-fade-in">
          {content.church.name}
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 opacity-0 animate-fade-in animation-delay-300">
          {content.church.tagline}
        </p>
        <button 
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 opacity-0 animate-fade-in animation-delay-600"
        >
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;