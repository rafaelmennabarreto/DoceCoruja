import React from 'react';
import {Text} from 'react-native';
import {Container} from './styles';

import AppBar from '../components/appBar';

export default function Home() {
  return (
    <Container>
      <AppBar showIcon={true} title="Home" />
      <Text>Oi meu chapa</Text>
    </Container>
  );
}
