import * as React from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import ApiUrl from './consts/api';
// eslint-disable-next-line no-unused-vars
import { ICategory } from './consts/for-categories-request';
import { MyContext } from './components/shared/my-context';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import PageRouting from './components/page-routing/page-routing';

export default () => {
  const location = useLocation();
  let theme: boolean = false;
  if (location.pathname === '/') {
    theme = true;
  }
  
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
    
  return (
    responseReceived && (
      <MyContext.Provider value={dataForProps}>
        <div>
          <Header lightTheme={theme} />
          <main className="main-content">
            <PageRouting />
          </main>
          <Footer />
        </div>
      </MyContext.Provider>
    )
  );
};
