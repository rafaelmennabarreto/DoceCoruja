import React from 'react';
import {Text} from 'react-native';
import {Container} from './styles';
import AppBar from '../../../components/appBar';
export default function Estabelecimentos() {
  return (
    <Container>
      <AppBar title={'Estabelecimentos'} textAlign="left" showMenuIcon={true} />
      <Text>oi meu chapa </Text>
    </Container>
  );
}
