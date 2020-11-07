/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link } from 'react-router-dom';
import { IProdLine } from '../../../../../consts/interfaces-for-request';
import './template-desktop.scss';

interface DesktopTemplate {
  image: any,
  imageAlt: string,
  bigTitle: string,
  children: JSX.Element,
  productLines: IProdLine[],
  isBoiler: boolean
}

export default ({image, imageAlt, bigTitle, children, productLines, isBoiler }: DesktopTemplate) => {

  const catName = isBoiler? 'boilers': 'crushers';

  const links = productLines.length > 0 ? productLines.map((item, index) => <li key={index}><Link to={"/products/" + catName + item.path}>{item.name}</Link></li>) : <li></li>;

  const getMainLink = () => {
    let mainLine = productLines.length > 0? productLines.find(x=>x.isShowOnMain) ?? null : null;
    if (mainLine!=null) return mainLine.path;
    return "";
  };
  
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
          <Link to={"/products/" + catName + getMainLink()} className="to-catalog-button">Перейти в каталог</Link>
        </div>
      </div>
    </div>
  );
};
