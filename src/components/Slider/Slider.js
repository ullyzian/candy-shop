import React, { useState, useEffect, createRef, useRef } from 'react';

import './Slider.scss';

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
      <div className="slider__container">
        <h1>We make candies</h1>
        <div className="slider__controls">
          {sliderImages.map((el, index) => {
            return (
              <span
                onClick={() => setCurrentSlide(index)}
                key={index}
                className={currentSlide === index ? 'slider__control slider__control--selected' : 'slider__control'}
              ></span>
            );
          })}
        </div>
      </div>
      <div className="slider__slide-container" ref={containerRef}>
        {sliderImages.map((imgURL, index) => {
          return (
            <div
              key={index}
              ref={refs.current[index]}
              className="slider__slide"
              style={{ backgroundImage: `url("${imgURL}")` }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(Slider);
