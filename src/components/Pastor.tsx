import React, { useRef } from 'react';
import content from '../data/content.json';
import { useInView } from '../hooks/useInView';

const Pastor: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="pastor" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4 transform transition-all duration-700 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            A Message From Our Pastor
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className={`md:w-2/5 mb-8 md:mb-0 transform transition-all duration-700 delay-200 ${isInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative">
              <img 
                src={content.pastor.image} 
                alt={content.pastor.name} 
                className="rounded-lg shadow-xl w-full object-cover aspect-[3/4]"
              />
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md">
                <p className="font-medium">{content.pastor.title}</p>
              </div>
            </div>
          </div>
          
          <div className={`md:w-3/5 transform transition-all duration-700 delay-400 ${isInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
              {content.pastor.name}
            </h3>
            <div className="w-16 h-1 bg-blue-500 mb-6"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {content.pastor.message}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pastor;