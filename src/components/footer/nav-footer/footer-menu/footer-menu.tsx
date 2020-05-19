import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './footer-menu.scss';
import axios from 'axios';
import ApiUrl from '../../../../consts/api';
import { ICategory } from '../../../../consts/for-categories-request';

export default () => {
  const [dataForProps, setData] = React.useState([] as ICategory[]);
  const [responseReceived, setStateOfResponse] = React.useState(false);
  
  React.useEffect(() => {
    axios.get(`${ApiUrl}/category/`)
      .then((response) => {
        const result = response.data as Array<ICategory>;
        result.sort((a, b) => a.id - b.id);
        setData(result);
        setStateOfResponse(true);
      });
  }, []);
  
  const listOfLinks = dataForProps.map((item: ICategory) => (
    <NavLink key={item.id} to={`/products/${item.path}`} className="underlined-link" activeClassName="underlined-selected">
      <span className="underline">{item.name}</span>
    </NavLink>
  ));
  
  console.log(dataForProps, responseReceived);
  
  return (
    <div className="footer-menu">
      <p>
        <NavLink to="/products" className="bold-link" activeClassName="bold-selected">
          Продукция:
        </NavLink>
        
        {responseReceived && listOfLinks}
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
};
