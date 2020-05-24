import React from 'react';
import { NavLink } from 'react-router-dom';
import './products-nav.scss';
import { IProdLine, IExtendedCategory } from '../../../consts/interfaces-for-request';


interface ProductNavProps {
  parentUrl: string;
  extendedCategory: IExtendedCategory;
}

export default ({ parentUrl, extendedCategory }: ProductNavProps) => {
  const currentCategory = extendedCategory.name;
  const productLines = extendedCategory.productLines as IProdLine[];
  const currentProductLines = productLines.map((item) => (
    <li key={item.id}>
      <NavLink to={`${parentUrl}${item.path}`} activeClassName="product-link-active ">
        <span>{item.name}</span>
      </NavLink>
    </li>
  ));
  return (
    <div className="products-nav desktop">
      <div className="container-big">
        <div className="product-category">
          {currentCategory}
        </div>
        <ul className="product-lines">
          {currentProductLines}
        </ul>
      </div>
    </div>
  );
};
