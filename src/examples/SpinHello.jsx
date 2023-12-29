import React from 'react';
import { useParallax } from 'react-scroll-parallax';

const SpinHello = () => {
  const parallax = useParallax({
    rotateY: [0, 360],
  });

  return (
    <div className="container-body">
      <div ref={parallax.ref} className="spinner-hello">
        <div>H</div>
        <div>E</div>
        <div>L</div>
        <div>L</div>
        <div>0</div>
      </div>
    </div>
  );
};

export default SpinHello;
