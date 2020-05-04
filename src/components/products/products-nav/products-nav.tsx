import React from 'react';
import { NavLink } from 'react-router-dom';
import './products-nav.scss';

export default () => {
  const myObj = {
    category: 'Котлы',
    productLines: [
      'Линейка Fit 20 - 70', 'Линейка Maxi 100-250',
    ],
  };
  const { productLines } = myObj;
  const productLineItem = productLines.map((line, index) => (
    <li key={index}>
      {/* Подключить сюда правильный путь! */}
      <NavLink to="">
        {line}
      </NavLink>
    </li>
  ));
  return (
    <div className="products-nav desktop">
      <div className="container-big">
        <div className="product-category">
          {myObj.category}
        </div>
        <ul className="product-lines">
          {productLineItem}
        </ul>
      </div>
    </div>
  );
};
