import React, {useState} from 'react';
import {Container, MainContainer, ButtonContainer} from './styles';

import AppBar from '~/components/appBar';
import FormItem from '~/components/formItems';
import MaskedField from '~/components/maskedField';
import {DatePicker} from '~/components/datePicker';
import ConfirmButton from '~/components/buttons';

import {IconsNames} from '~/Icons';

import VendasService from '~/service/vendasService';
const Index = () => {
  const [debit, setDebit] = useState(0);
  const [saleDate, setSaleDate] = useState();

  const getSaleDate = async () => {
    const date = await DatePicker();
    setSaleDate(date);
  };

  const save = () => {
    const {store} = VendasService;
  };

  return (
    <Container>
      <AppBar title="Cadastrar Venda" showBackIcon={true} />
      <MainContainer>
        <FormItem iconName={IconsNames.Money}>
          <MaskedField
            mask={['9,99', '99,99', '999,99', '9999,99']}
            value={debit}
            placeholder="ex .: 50,00"
            onChange={value => setDebit(value)}
          />
        </FormItem>
        <FormItem
          placeHolder="clique para selecionar a data"
          iconName={IconsNames.Date}
          onContainerPress={getSaleDate}
          value={saleDate ? saleDate.toLocaleDateString() : ''}
          disabled={true}
        />
        <FormItem
          placeHolder="ex.: Enroladinho"
          iconName={IconsNames.Description}
        />
        <FormItem
          placeHolder="selecionar o estabelecimento"
          iconName={IconsNames.Estabelecimento}
        />
        <FormItem
          placeHolder="selecionar um cliente"
          iconName={IconsNames.Clients}
        />
      </MainContainer>
      <ButtonContainer>
        <ConfirmButton title="Salvar" />
      </ButtonContainer>
    </Container>
  );
};

export default Index;
