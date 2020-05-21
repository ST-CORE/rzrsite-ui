import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './footer-menu.scss';
import { MyContext } from '../../../shared/my-context';
// eslint-disable-next-line no-unused-vars
import { ICategory } from '../../../../consts/for-categories-request';

export default () => (
  <div className="footer-menu">
    <p>
      <NavLink to="/products" className="bold-link" activeClassName="bold-selected">
        Продукция:
      </NavLink>
        
      <MyContext.Consumer>
        {(value: ICategory[]) => {
          const listOfLinks = value.map((item: ICategory) => (
            <NavLink key={item.id} to={`/products${item.path}`} className="underlined-link" activeClassName="underlined-selected">
              <span className="underline">{item.name}</span>
            </NavLink>
          ));
          return listOfLinks;
        }}
      </MyContext.Consumer>
    </p>
    <p>
      
      <NavLink to="/about" className="bold-link" activeClassName="bold-selected">
        О компании:
      </NavLink>
      
      <NavLink to="/delivery" className="underlined-link" activeClassName="underlined-selected"><span className="underline">Доставка</span></NavLink>
      <NavLink to="/contacts" className="underlined-link" activeClassName="underlined-selected"><span className="underline">Контакты</span></NavLink>
    </p>
  </div>
);
