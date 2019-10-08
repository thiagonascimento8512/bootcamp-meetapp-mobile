import React from 'react';
import { useSelector } from 'react-redux';

import Background from '~/components/Background';
import Header from '~/components/Header';
import createRoutes from './routes';

function App() {
  const { signed } = useSelector(state => state.auth);
  const Routes = createRoutes(signed);
  return (
    <Background>
      {signed && <Header />}
      <Routes />
    </Background>
  );
}

export default App;
