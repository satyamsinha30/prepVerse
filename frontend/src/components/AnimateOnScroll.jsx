import React, { useRef, useEffect, useState } from 'react';

const AnimateOnScroll = ({ children, animation = 'fade-in', duration = '1s', delay = '0s' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(domRef.current); // Stop observing once visible
        }
      });
    });

    observer.observe(domRef.current);

    return () => observer.disconnect();
  }, []);

  const animationClasses = {
    'fade-in': 'opacity-0 transition-opacity',
    'slide-in-up': 'translate-y-10 opacity-0 transition-transform opacity',
    // Add more animations as needed
  };

  const animationStyles = {
    transitionDuration: duration,
    transitionDelay: delay,
  };

  return (
    <div
      ref={domRef}
      className={`${animationClasses[animation]} ${isVisible ? (animation === 'fade-in' ? 'opacity-100' : 'translate-y-0 opacity-100') : ''}`}
      style={animationStyles}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
