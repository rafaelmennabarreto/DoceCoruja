import React from 'react';
import {Container} from './styles';

import AppBar from '~/components/appBar';
import FloatButtomGroup from '~/components/floatButtomGroup';

export default function Caixa() {
  return (
    <Container>
      <AppBar title={'Caixa'} textAlign="left" showMenuIcon={true} />
      <FloatButtomGroup />
    </Container>
  );
}
