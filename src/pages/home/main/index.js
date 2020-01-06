import React from 'react';
import {Container} from './styles';

import AppBar from '../../../components/appBar';
import FloatButtomGroup from '../../../components/floatButtomGroup';
import InformationFiled from '../../../components/InformationField';

export default function Home() {
  return (
    <>
      <AppBar title={'Home'} textAlign="left" showMenuIcon={true} />
      <Container>
        <InformationFiled title="Total de vendas" value={53} />
        <InformationFiled
          title="Valor a receber"
          value={900000}
          isMonetary={true}
        />
        <FloatButtomGroup />
      </Container>
    </>
  );
}
