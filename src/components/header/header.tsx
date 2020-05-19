import * as React from 'react';
import { MediaMatcher, ProvideMediaMatchers } from 'react-media-match';
import axios from 'axios';
import PhoneHeader from './phone-header/phone-header';
import NavHeader from './nav-header/nav-header';
import HeaderMobile from './header-mobile/header-mobile';
import apiUrl from '../../consts/api';
import { ICategory } from '../../consts/for-categories-request';

interface HeaderProps {
  lightTheme: boolean
}

export default ({ lightTheme }: HeaderProps) => {
  const [dataForProps, setData] = React.useState([] as ICategory[]);
  const [responseReceived, setStateOfResponse] = React.useState(false);

  React.useEffect(() => {
    axios.get(`${apiUrl}/category/`)
      .then((response) => {
        const result = response.data as Array<ICategory>;
        setData(result);
        setStateOfResponse(true);
      });
  }, []);
  
  return (
    <ProvideMediaMatchers>
      <MediaMatcher
        mobile={(
          <HeaderMobile
            lightTheme={lightTheme}
            categories={dataForProps}
            renderPermission={responseReceived}
          />
        )}
        desktop={(
          <header>
            <PhoneHeader lightTheme={lightTheme} />
            <NavHeader
              lightTheme={lightTheme}
              categories={dataForProps}
              renderPermission={responseReceived}
            />
          </header>
      )}
      />
    </ProvideMediaMatchers>
  );
};
