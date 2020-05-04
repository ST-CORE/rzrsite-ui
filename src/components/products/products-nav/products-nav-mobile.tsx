import React from 'react';
import { NavLink } from 'react-router-dom';
import './products-nav-mobile.scss';

export default () => {
  const myList = [
    {
      category: 'Котлы',
      productLines: [
        'Линейка Fit 20 - 70', 'Линейка Maxi 100-250',
      ],
    },
    {
      category: 'Дробилки',
      productLines: [
        'Линейка DC 20-50',
      ],
    },
  ];
  
  const categories = myList.map((item, index) => (
    <li key={index}>
      <NavLink to="">
        {item.category}
      </NavLink>
    </li>
  ));
  
  const boilerLines = myList[0].productLines.map((item, index) => (
    <li key={index}>
      <NavLink to="">
        {item}
      </NavLink>
    </li>
  ));
  
  return (
    <div className="products-nav mobile">
      <ul className="product-category">
        {categories}
      </ul>
      <ul className="product-lines">
        {boilerLines}
      </ul>
    </div>
  );
};
