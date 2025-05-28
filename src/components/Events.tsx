import React, { useRef } from 'react';
import content from '../data/content.json';
import { useInView } from '../hooks/useInView';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  index: number;
  isInView: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ 
  title, date, time, location, description, index, isInView 
}) => {
  const delay = 200 + (index * 100);
  
  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-700 delay-${delay} ${
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <Calendar size={18} className="mr-2 text-blue-600" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <Clock size={18} className="mr-2 text-blue-600" />
          <span>{time}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin size={18} className="mr-2 text-blue-600" />
          <span>{location}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Events: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="events" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4 transform transition-all duration-700 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Upcoming Events
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className={`text-lg text-gray-600 transform transition-all duration-700 delay-200 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Join us for worship, fellowship, and community service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.events.map((event, index) => (
            <EventCard 
              key={event.title}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              description={event.description}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;