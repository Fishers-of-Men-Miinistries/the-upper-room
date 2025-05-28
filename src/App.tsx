import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Pastor from './components/Pastor';
import Ministries from './components/Ministries';
import Events from './components/Events';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import content from './data/content.json';
import './index.css';

function App() {
  useEffect(() => {
    // Update page title
    document.title = content.church.name;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      .animate-fade-in {
        animation: fadeIn 1s forwards;
      }
      
      .animation-delay-300 {
        animation-delay: 300ms;
      }
      
      .animation-delay-600 {
        animation-delay: 600ms;
      }
      
      html {
        scroll-behavior: smooth;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Pastor />
      <Ministries />
      <Events />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;