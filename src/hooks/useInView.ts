import { useState, useEffect, RefObject } from 'react';

interface InViewOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useInView(
  ref: RefObject<Element>,
  options: InViewOptions = {}
): boolean {
  const [isInView, setIsInView] = useState(false);
  const { threshold = 0, rootMargin = '0px', once = false } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementInView = entry.isIntersecting;
        
        if (isElementInView) {
          setIsInView(true);
          
          // If once is true, disconnect after the element comes into view
          if (once && isElementInView) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      { 
        threshold, 
        rootMargin 
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, threshold, rootMargin, once]);

  return isInView;
}