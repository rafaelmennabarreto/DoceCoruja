import React from 'react';
import {Container} from './styles';
import AppBar from '../../../components/appBar';

export default function Clientes() {
  return (
    <Container>
      <AppBar title={'Clientes'} textAlign="left" showMenuIcon={true} />
    </Container>
  );
}
