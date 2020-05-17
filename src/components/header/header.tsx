import * as React from 'react';
import { MediaMatcher, ProvideMediaMatchers } from 'react-media-match';
import axios from 'axios';
import PhoneHeader from './phone-header/phone-header';
import NavHeader from './nav-header/nav-header';
import HeaderMobile from './header-mobile/header-mobile';
import apiUrl from '../../consts/api';

interface HeaderProps {
  lightTheme: boolean
}

interface DataItem {
  id: number;
  name: string;
  weight: 0;
  path: string;
}

class Category {
  id: number;

  name: string;
  
  path: string;
  
  constructor(id: number, name: string, path: string) {
    this.id = id;
    this.name = name;
    this.path = path;
  }
}

export default ({ lightTheme }: HeaderProps) => {
  
  axios.get(`${apiUrl}/category/`).then((response) => {
    console.log(response);
    console.log(response.data);
    const responseData = response.data;
    const categoryInstances = responseData.map((item: DataItem) => new Category(item.id, item.name, item.path));
    console.log(categoryInstances);
  });
  return (
    <ProvideMediaMatchers>
      <MediaMatcher
        mobile={<HeaderMobile lightTheme={lightTheme} categoryInstances />}
        desktop={(
          <header>
            <PhoneHeader lightTheme={lightTheme} />
            <NavHeader lightTheme={lightTheme} categoryInstances />
          </header>
      )}
      />
    </ProvideMediaMatchers>
  );
};
