'use client';

import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';


// type twriterProps = {
//   words: string[]
// };

const TypeWriterWrapper = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const handleTyping = (index) => {
    setCurrentWordIndex(index % words.length);
  };


  return (
    // <div className="font-PoiretOne z-10">
      <Typewriter
        words={words}
        loop={true}
        deleteSpeed={125}
        typeSpeed={150}
        delaySpeed={810}
        onLoopDone={() => handleTyping}
      />
    // </div>
  );
};

export default TypeWriterWrapper;