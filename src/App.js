import React from 'react';
import { useSelector } from 'react-redux';

import createRoutes from './routes';

export default function src() {
  const { signed } = useSelector(state => state.auth);

  const Routes = createRoutes(signed);
  return <Routes />;
}
