import React from 'react';
import { Facebook, Instagram, Youtube, Twitter, Church } from 'lucide-react';
import content from '../data/content.json';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Church className="h-8 w-8 mr-2 text-blue-400" />
            <span className="font-serif text-xl font-bold">{content.church.name}</span>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href={content.social.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
            >
              <Facebook size={20} />
            </a>
            <a 
              href={content.social.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-colors duration-300"
            >
              <Instagram size={20} />
            </a>
            <a 
              href={content.social.youtube} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors duration-300"
            >
              <Youtube size={20} />
            </a>
            <a 
              href={content.social.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 p-2 rounded-full hover:bg-blue-400 transition-colors duration-300"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['about', 'pastor', 'ministries', 'events', 'location', 'contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-gray-400 hover:text-white transition-colors capitalize"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Service Times</h3>
              <p className="text-gray-400 mb-2">Sunday: 10:00 AM</p>
              <p className="text-gray-400 mb-2">Wednesday: 7:00 PM</p>
              <p className="text-gray-400">Children's Ministry: During Services</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400 mb-2">{content.location.address}</p>
              <p className="text-gray-400 mb-2">{content.location.phone}</p>
              <p className="text-gray-400">{content.location.email}</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} {content.church.name}. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            {' | '}
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;