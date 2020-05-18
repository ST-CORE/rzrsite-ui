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
  weight?: 0;
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
  // const categoriesOMG = [new Category(1, 'Котлы', '/boilers'), new Category(2, 'Котлы', '/boilers')];
  const [categoryInstances, changeCategoryInstances] = React.useState([{'':''}]);

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${apiUrl}/category/`,
      );
      changeCategoryInstances(result.data);
    };
    fetchData();
  }, []);
  
  const transformData = (myObj) => {
    const categories: Array<DataItem> = [];
    myObj.forEach((item: DataItem) => {
      const category = new Category(item.id, item.name, item.path);
      categories.push(category);
    });
    return categories;
  };
  
  const categoriesForProps = transformData(categoryInstances);
  console.log(categoriesForProps);

  return (
    <ProvideMediaMatchers>
      <MediaMatcher
        mobile={<HeaderMobile lightTheme={lightTheme} categories={categoriesForProps} />}
        desktop={(
          <header>
            <PhoneHeader lightTheme={lightTheme} />
            <NavHeader lightTheme={lightTheme} categories={categoriesForProps} />
          </header>
      )}
      />
    </ProvideMediaMatchers>
  );
};
