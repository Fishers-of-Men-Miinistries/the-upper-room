import React, { useEffect, useRef } from 'react';
import content from '../data/content.json';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4 transform transition-all duration-700 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            About Our Church
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <p className={`text-lg text-gray-700 mb-6 leading-relaxed transform transition-all duration-700 delay-200 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {content.church.description}
          </p>
          <p className={`text-lg text-gray-700 leading-relaxed transform transition-all duration-700 delay-400 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {content.church.mission}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;