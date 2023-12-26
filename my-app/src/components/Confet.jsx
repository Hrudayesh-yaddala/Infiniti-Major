import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const Confet = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 15000); 

    return () => {
      clearTimeout(timer);
    };
  }, []); 

  return (
    <>
      {showConfetti && (
        <Confetti
          width={1400}
          height={3200}
        //   tweenDuration={6000}
          // friction={1}
          numberOfPieces={600}
        />
      )}
    </>
  );
};

export default Confet;
