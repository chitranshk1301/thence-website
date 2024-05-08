import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const Carousel = ({ items, autoPlayInterval = 3000 }) => {
 const [currentIndex, setCurrentIndex] = useState(0);
 const [direction, setDirection] = useState('right'); // eslint-disable-line

 const slideVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: '0', opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } },
 };

 const handleDotClick = (index) => {
    const newIndex = index >= items.length ? 0 : index < 0 ? items.length - 1 : index;
    setDirection(newIndex > currentIndex ? 'right' : 'left');
    setCurrentIndex(newIndex);
 };

 useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
      setDirection(newIndex > currentIndex ? 'right' : 'left');
      setCurrentIndex(newIndex);
    }, autoPlayInterval);

    return () => clearInterval(interval);
 }, [currentIndex, items.length, autoPlayInterval]);

 const memoizedDots = useMemo(
    () =>
      items.map((_item, index) => (
        <motion.div
          key={index}
          className={`h-2 w-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
            currentIndex === index ? 'bg-[#2DA950]' : 'bg-gray-300'
          }`}
          onClick={() => handleDotClick(index)}
          role="tab"
          aria-controls={`carousel-item-${index}`}
          aria-selected={currentIndex === index}
          tabIndex={currentIndex === index ? 0 : -1}
        ></motion.div>
      )),
    [currentIndex, items] // eslint-disable-line
 );

 return (
    <div className="carousel mx-auto max-w-screen-md flex flex-col items-center">
      <div className="carousel-content w-[398px] h-[250px] overflow-hidden">
        <AnimatePresence mode='wait'>
          {items.length > 0 ? (
            <motion.div
              key={currentIndex}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={slideVariants}
              className="carousel-item"
              role="tabpanel"
              id={`carousel-item-${currentIndex}`}
            >
              <div className="w-[398px] h-[192px]">
                <p className="text-[40px] font-manrope font-[600]">{items[currentIndex].content}</p>
              </div>
            </motion.div>
          ) : (
            <div className="w-[398px] h-[192px]">
              <p className="text-[40px] font-manrope font-[600]">No items available</p>
            </div>
          )}
        </AnimatePresence>
      </div>
      <div className="carousel-dots flex justify-center space-x-2 mt-20" role="tablist">
        {memoizedDots}
      </div>
    </div>
 );
};

Carousel.propTypes = {
 items: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
    })
 ).isRequired,
 autoPlayInterval: PropTypes.number,
};

Carousel.defaultProps = {
 items: [],
 autoPlayInterval: 3000,
};

export default Carousel;
