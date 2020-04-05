import React, { useState, useEffect } from 'react';

import ItemCard from '../../components/ItemCard/ItemCard';

import './Shop.scss';

const mockResponse = [
  {
    id: 1,
    name: 'Generic candy',
    price: 27.99,
    imgPath: 'https://pakerszop.pl/public/assets//snickers-hi-protein-bar.jpg',
  },
  {
    id: 2,
    name: 'Kinda candy',
    price: 3.99,
    imgPath: 'https://pakerszop.pl/public/assets//snickers-hi-protein-bar.jpg',
  },
  {
    id: 3,
    name: 'Bad candy',
    price: 12.99,
    imgPath: 'https://pakerszop.pl/public/assets//snickers-hi-protein-bar.jpg',
  },
  {
    id: 4,
    name: 'Good candy',
    price: 16.99,
    imgPath: 'https://pakerszop.pl/public/assets//snickers-hi-protein-bar.jpg',
  },
  {
    id: 5,
    name: 'Good candy',
    price: 16.99,
    imgPath: 'https://pakerszop.pl/public/assets//snickers-hi-protein-bar.jpg',
  },
  {
    id: 6,
    name: 'Good candy',
    price: 16.99,
    imgPath: 'https://pakerszop.pl/public/assets//snickers-hi-protein-bar.jpg',
  },
  {
    id: 7,
    name: 'Good candy',
    price: 16.99,
    imgPath: 'https://pakerszop.pl/public/assets//snickers-hi-protein-bar.jpg',
  },
  {
    id: 8,
    name: 'Good candy',
    price: 16.99,
    imgPath: 'https://pakerszop.pl/public/assets//snickers-hi-protein-bar.jpg',
  },
  {
    id: 9,
    name: 'Good candy',
    price: 16.99,
    imgPath: 'https://pakerszop.pl/public/assets//snickers-hi-protein-bar.jpg',
  },
  {
    id: 10,
    name: 'Good candy',
    price: 16.99,
    imgPath: 'https://pakerszop.pl/public/assets//snickers-hi-protein-bar.jpg',
  },
  {
    id: 11,
    name: 'Good candy',
    price: 16.99,
    imgPath: 'https://pakerszop.pl/public/assets//snickers-hi-protein-bar.jpg',
  },
  {
    id: 12,
    name: 'Good candy',
    price: 16.99,
    imgPath: 'https://pakerszop.pl/public/assets//snickers-hi-protein-bar.jpg',
  },
  {
    id: 13,
    name: 'Good candy',
    price: 16.99,
    imgPath: 'https://pakerszop.pl/public/assets//snickers-hi-protein-bar.jpg',
  },
];

const Shop = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setItems(mockResponse);
    }, 1500);
  }, []);

  return (
    <div className="page-container shop">
      <div className="shop__items-container">
        {items.map((item, index) => {
          return <ItemCard item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Shop;
