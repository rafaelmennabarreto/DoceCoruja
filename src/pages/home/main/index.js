import React from 'react';
import {useSelector} from 'react-redux';
import {Container} from './styles';

import AppBar from '../../../components/appBar';
import FloatButtomGroup from '../../../components/floatButtomGroup';
import InformationFiled from '../../../components/InformationField';

export default function Home() {
  const user = useSelector(state => state.User);

  return (
    <>
      <AppBar title={`Ola ${user.name}`} textAlign="left" showMenuIcon={true} />
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
