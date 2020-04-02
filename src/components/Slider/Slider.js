import React, { useState, useEffect, createRef } from 'react';

import './Slider.scss';
import { useRef } from 'react';

const Slider = ({ sliderImages }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToRef = (ref, parent) => {
    parent.current.scrollLeft = ref.current.offsetLeft;
  };

  const refs = useRef(sliderImages.map(() => createRef()));
  const containerRef = useRef(null);

  useEffect(() => {
    scrollToRef(refs.current[currentSlide], containerRef);
    const timeout = setTimeout(() => {
      if (currentSlide < refs.current.length - 1) {
        setCurrentSlide(currentSlide + 1);
      } else {
        setCurrentSlide(0);
      }
    }, 10000);
    return () => {
      clearTimeout(timeout);
    };
  }, [currentSlide]);

  return (
    <div className="slider">
      <div className="slider__controls">
        {sliderImages.map((el, index) => {
          return <span onClick={() => setCurrentSlide(index)} key={index}></span>;
        })}
      </div>
      <div className="slider__slide-container" ref={containerRef}>
        {sliderImages.map((imgURL, index) => {
          return <img key={index} ref={refs.current[index]} className="slider__slide" alt="XD" src={imgURL} />;
        })}
      </div>
    </div>
  );
};

export default React.memo(Slider);
