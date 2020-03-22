import * as React from 'react';
import Header from './header/header';
import Footer from './footer/footer';

const App = () => (
  <div>
    <Header lightTheme={false} />
    <div>
      Hello World from App!
      Here is main content
    </div>
    <Footer />
  </div>
);

export default App;
