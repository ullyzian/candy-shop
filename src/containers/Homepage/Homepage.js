import React from 'react';

import Slider from '../../components/Slider/Slider';

import './Homepage.scss';

const sliderImages = [
  'https://lh3.googleusercontent.com/proxy/oN5pUOWWxjMkZyBozfTTsiypC_D6kIkRLc_P63XEJf3a5k_o1DfY_nvmOjAmVasxFviD_536i2uRdGaG4cNc2Co7banvQOIc-ST6w7OZe9gkWmI',
  'https://previews.123rf.com/images/beats1/beats11810/beats1181000278/109501372-candies-with-jelly-and-sugar-colorful-array-of-different-childs-sweets-and-treats.jpg',
  'https://previews.123rf.com/images/beats1/beats11810/beats1181000278/109501372-candies-with-jelly-and-sugar-colorful-array-of-different-childs-sweets-and-treats.jpg'
];

const Homepage = () => {
  return (
    <div className="homepage-container">
      <Slider sliderImages={sliderImages} />
    </div>
  );
};

export default Homepage;
