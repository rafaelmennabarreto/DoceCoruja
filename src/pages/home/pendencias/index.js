import React from 'react';
import {Container} from './styles';
import AppBar from '../../../components/appBar';

export default function Pendencias() {
  return (
    <Container>
      <AppBar title={'Pendencias'} textAlign="left" showMenuIcon={true} />
    </Container>
  );
}
