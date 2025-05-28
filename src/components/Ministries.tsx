import React, { useRef } from 'react';
import content from '../data/content.json';
import { useInView } from '../hooks/useInView';
import { Baby, Users, Music, HeartHandshake, BookOpen, HandHelping as HandsPraying, DivideIcon as LucideIcon } from 'lucide-react';

interface MinistryCardProps {
  name: string;
  description: string;
  icon: string;
  index: number;
  isInView: boolean;
}

const iconMap: Record<string, LucideIcon> = {
  baby: Baby,
  users: Users,
  music: Music,
  'heart-handshake': HeartHandshake,
  'book-open': BookOpen,
  'hands-praying': HandsPraying
};

const MinistryCard: React.FC<MinistryCardProps> = ({ name, description, icon, index, isInView }) => {
  const IconComponent = iconMap[icon];
  const delay = 200 + (index * 100);
  
  return (
    <div 
      className={`bg-white rounded-lg shadow-md p-6 transform transition-all duration-700 delay-${delay} ${
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="mb-4 text-blue-600">
        {IconComponent && <IconComponent size={36} />}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Ministries: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="ministries" 
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4 transform transition-all duration-700 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Our Ministries
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className={`text-lg text-gray-600 transform transition-all duration-700 delay-200 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Discover the various ways you can connect, serve, and grow with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.ministries.map((ministry, index) => (
            <MinistryCard 
              key={ministry.name}
              name={ministry.name}
              description={ministry.description}
              icon={ministry.icon}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ministries;