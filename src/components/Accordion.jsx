import React, { useState, useRef, useEffect } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const handleContentHeight = () => {
      contentRefs.current.forEach((contentRef, index) => {
        if (contentRef) {
          const contentHeight = contentRef.scrollHeight;
          contentRef.style.maxHeight = activeIndex === index ? `${contentHeight}px` : '0px';
        }
      });
    };

    handleContentHeight();
    window.addEventListener('resize', handleContentHeight);

    return () => {
      window.removeEventListener('resize', handleContentHeight);
    };
  }, [activeIndex]);

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-300 last:border-none py-5">
          <div
            className="flex justify-between items-center py-4 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="font-manrope text-[20px] font-[600]">{item.title}</h3>
            <span className="text-gray-500">
              {activeIndex === index ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              )}
            </span>
          </div>
          <div
            className="overflow-hidden transition-max-height duration-300 ease-in-out"
            ref={(ref) => (contentRefs.current[index] = ref)}
          >
            <div className="p-4 text-gray-700 text-[15px] font-[400]">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;