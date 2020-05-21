import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../shared/logo/logo';
import './nav-header.scss';
import { MyContext } from '../../shared/my-context';
// eslint-disable-next-line no-unused-vars
import { ICategory } from '../../../consts/for-categories-request';

interface NavHeaderProps {
  lightTheme: boolean
}

export default ({ lightTheme }: NavHeaderProps) => {
  let className: string = 'desktop nav-header';
  if (lightTheme) {
    className += ' light-theme';
  }
  
  return (
    <div className={className}>
      <div className="container-big">
        <Link to="/" className="logo">
          <Logo />
        </Link>
        <nav>
          <ul className="big-menu">
            <li className="hoverable">
              <NavLink to="/products" activeClassName="selected-dashed">
                Продукция
              </NavLink>
              <ul className="submenu">
                <MyContext.Consumer>
                  {(value: ICategory[]) => {
                    const categoryLinks = value.map((item: ICategory) => (
                      <li key={item.id}>
                        <NavLink to={`/products${item.path}`} activeClassName="selected-dashed">
                          {item.name}
                        </NavLink>
                      </li>
                    ));
                    return categoryLinks;
                  }}
                </MyContext.Consumer>
              </ul>
            </li>
            <li>
              <NavLink to="/delivery" activeClassName="selected">Доставка</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="selected">О компании</NavLink>
            </li>
            <li>
              <NavLink to="/contacts" activeClassName="selected">Контакты</NavLink>
            </li>
          </ul>
        </nav>
        <div className="fixer" />
      </div>
    </div>
  );
};
