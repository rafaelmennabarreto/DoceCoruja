import React, {useState} from 'react';
import {Text} from 'react-native';
import {Container} from './styles';

import AppBar from '../../../components/appBar';
import FloatButtomGroup from '../../../components/floatButtomGroup';
import InformationFiled from '../../../components/InformationField';

export default function Home() {
  return (
    <>
      <AppBar title="Home" textAlign="center" />
      <Container>
        <InformationFiled title="Valor a receber" value="R$ 85,00" />
        <FloatButtomGroup />
      </Container>
    </>
  );
}
