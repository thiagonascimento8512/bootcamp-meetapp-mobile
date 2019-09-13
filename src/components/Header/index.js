import React from 'react';

import logo from '~/assets/M.png';
import { Container, Logo } from './styles';

export default () => {
  return (
    <Container>
      <Logo source={logo} />
    </Container>
  );
};
