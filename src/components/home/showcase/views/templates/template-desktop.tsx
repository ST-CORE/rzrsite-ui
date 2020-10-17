/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link } from 'react-router-dom';
import './template-desktop.scss';

interface DesktopTemplate {
  image: any,
  imageAlt: string,
  bigTitle: string,
  children: JSX.Element,
  productLines: Array<string>
}

export default ({
  image, imageAlt, bigTitle, children, productLines,
}: DesktopTemplate) => {
  const links = productLines.map((item, index) => <li key={index}><Link to="/products">{item}</Link></li>);
  
  return (
    <div className="showcase-item desktop">
      <div className="image-container">
        <img src={image} alt={imageAlt} />
      </div>
      <div className="showcase-item-description">
        <h1 className="big-title">{bigTitle}</h1>
        {children}
        <div className="to-catalog">
          <ul>
            {links}
          </ul>
          <Link to="/products" className="to-catalog-button">Перейти в каталог</Link>
        </div>
      </div>
    </div>
  );
};
