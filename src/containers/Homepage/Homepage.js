import React from 'react';

import Slider from '../../components/Slider/Slider';

import './Homepage.scss';

const sliderImages = [
  'https://previews.123rf.com/images/beats1/beats11810/beats1181000278/109501372-candies-with-jelly-and-sugar-colorful-array-of-different-childs-sweets-and-treats.jpg',
  'https://previews.123rf.com/images/beats1/beats11810/beats1181000278/109501372-candies-with-jelly-and-sugar-colorful-array-of-different-childs-sweets-and-treats.jpg',
  'https://previews.123rf.com/images/beats1/beats11810/beats1181000278/109501372-candies-with-jelly-and-sugar-colorful-array-of-different-childs-sweets-and-treats.jpg',
];

const Homepage = () => {
  return (
    <div className="homepage-container page-container">
      <Slider sliderImages={sliderImages}>
        <h1>We make candies</h1>
      </Slider>
    </div>
  );
};

export default Homepage;
