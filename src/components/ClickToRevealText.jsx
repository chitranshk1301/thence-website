import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ClickToRevealText = () => {
 const [isVisible, setIsVisible] = useState(false);

 const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
 };

 return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide Text' : 'Reveal Text'}
      </button>
      <motion.div
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={variants}
        className="text-container"
      >
        <p>This is the text that will be revealed.</p>
      </motion.div>
    </div>
 );
};

export default ClickToRevealText;
