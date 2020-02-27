import React from 'react';
import {Container} from './styles';

import AppBar from '../../../components/appBar';
import FloatButtomGroup from '~/components/floatButtomGroup';

export default function Pendencias() {
  return (
    <Container>
      <AppBar title={'Pendencias'} textAlign="left" showMenuIcon={true} />
      <FloatButtomGroup />
    </Container>
  );
}
