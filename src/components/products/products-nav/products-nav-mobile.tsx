import React from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { IProdLine, ICategory } from '../../../consts/interfaces-for-request';
import './products-nav-mobile.scss';

interface ProductNavProps {
  parentUrl: string;
  prodLines: IProdLine[];
  selectedLine: IProdLine;
  categories: ICategory[];
}

export default ({ parentUrl, prodLines, selectedLine, categories }: ProductNavProps) => {
  const categoriesLinks = categories.map((item) => (
    <li key={"mobile_categorylink_"+item.id}>
      <NavLink to={`/products${item.path}`} activeClassName="active-category-link">
        {item.name}
      </NavLink>
    </li>
  ));
  
  const prodLinesLinks = prodLines.map((item) => (
    <li key={"mobile_prodlink_"+item.id}>
      <NavLink to={`${parentUrl}${item.path}`} isActive = {() => { return (item.id == selectedLine.id)}} activeClassName="active-prodline-link">
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
        {prodLinesLinks}
      </ul>
    </div>
  );
};
