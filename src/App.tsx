import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from './hooks';
import Routes from './routes';

import GlobalStyled from './styles/global';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
        <GlobalStyled />
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
