import React from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { IProdLine, ICategory } from '../../../consts/interfaces-for-request';
import './products-nav-mobile.scss';

interface ProductNavProps {
  parentUrl: string;
  prodlines: IProdLine[];
  categories: ICategory[];
}

export default ({ parentUrl, prodlines, categories }: ProductNavProps) => {
  const categoriesLinks = categories.map((item) => (
    <li key={item.id}>
      <NavLink to={`/products${item.path}`} activeClassName="active-category-link">
        {item.name}
      </NavLink>
    </li>
  ));
  
  const prodLines = prodlines.map((item) => (
    <li key={item.id}>
      <NavLink to={`${parentUrl}${item.path}`} activeClassName="active-prodline-link">
        {item.name}
      </NavLink>
    </li>
  ));
  
  return (
    <div className="products-nav mobile">
      <ul className="product-category">
        {categoriesLinks}
      </ul>
      <ul className="product-lines">
        {prodLines}
      </ul>
    </div>
  );
};
