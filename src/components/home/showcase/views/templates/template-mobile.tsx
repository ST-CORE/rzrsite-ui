/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link } from 'react-router-dom';
import { IProdLine } from '../../../../../consts/interfaces-for-request';
import './template-mobile.scss';

interface DesktopTemplate {
  image: any,
  imageAlt: string,
  bigTitle: string,
  children: JSX.Element,
  productLines: IProdLine[]
}

export default ({ image, imageAlt, bigTitle, children }: DesktopTemplate) => (
  <div className="showcase-item mobile">
    <h1 className="big-title">{bigTitle}</h1>
    
    <div className="showcase-item-description">
      <div className="image-container">
        <img src={image} alt={imageAlt} />
      </div>
      {children}
    </div>
    
    <div className="to-catalog">
      <Link to="/products" className="to-catalog-button">Перейти в каталог</Link>
    </div>
  </div>
);
