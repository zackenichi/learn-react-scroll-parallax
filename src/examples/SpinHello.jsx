import React, { useState, useEffect } from 'react';
import { useParallax } from 'react-scroll-parallax';
import FullPage from './Wrappers/FullPage';

const SpinHello = () => {
  const [displayText, setDisplayText] = useState('HELLO');
  const parallax = useParallax({
    rotateY: [0, 360],
  });

  useEffect(() => {
    const handleScroll = () => {
      // Ensure the style property is defined before trying to access it
      if (parallax.ref.current && parallax.ref.current.style) {
        // Check the rotation value in the style property
        const rotationValue = parallax.ref.current.style.transform || '';
        // Extract the numeric value from the rotation property
        const rotationDegrees = parseFloat(
          rotationValue.replace('rotateY(', '').replace('deg)', '')
        );

        // Check if the rotation reaches or passes 180 degrees
        if (rotationDegrees >= 180) {
          // Change the displayed text to "WORLD"
          setDisplayText('WORLD');
        } else {
          // Keep the displayed text as "HELLO"
          setDisplayText('HELLO');
        }
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [parallax.ref]);

  return (
    <FullPage>
      <div ref={parallax.ref} className="spinner-hello">
        {displayText.split('').map((letter, index) => (
          <div key={index}>{letter}</div>
        ))}
      </div>
    </FullPage>
  );
};

export default SpinHello;
