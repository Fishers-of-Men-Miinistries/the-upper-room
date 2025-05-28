import React, { useRef } from 'react';
import content from '../data/content.json';
import { useInView } from '../hooks/useInView';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Location: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="location" 
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4 transform transition-all duration-700 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Visit Us
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className={`lg:col-span-3 transform transition-all duration-700 delay-200 ${isInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-80 md:h-96">
              <iframe 
                src={content.location.mapEmbed} 
                className="w-full h-full border-0" 
                allowFullScreen 
                loading="lazy" 
                title="Church Location Map"
              ></iframe>
            </div>
          </div>
          
          <div className={`lg:col-span-2 transform transition-all duration-700 delay-400 ${isInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-blue-600 mt-1 mr-4 flex-shrink-0" size={20} />
                  <p className="text-gray-700">{content.location.address}</p>
                </div>
                
                <div className="flex items-center">
                  <Phone className="text-blue-600 mr-4 flex-shrink-0" size={20} />
                  <p className="text-gray-700">{content.location.phone}</p>
                </div>
                
                <div className="flex items-center">
                  <Mail className="text-blue-600 mr-4 flex-shrink-0" size={20} />
                  <p className="text-gray-700">{content.location.email}</p>
                </div>
                
                <div className="flex items-center">
                  <Clock className="text-blue-600 mr-4 flex-shrink-0" size={20} />
                  <p className="text-gray-700">{content.location.serviceTime}</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Join Us This Sunday</h4>
                <p className="text-gray-600 mb-4">
                  We'd love to welcome you to our service this Sunday. 
                  No matter where you are on your faith journey, there's a place for you here.
                </p>
                <button 
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-all duration-300"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;