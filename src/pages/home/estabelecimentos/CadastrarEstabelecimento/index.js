import React, {useState} from 'react';
import {
  Container,
  ItemContainer,
  MainContainer,
  ButtonContainer,
} from './styles';
import {ComfirmButton} from '../../../../components/buttons';

import AppBar from '../../../../components/appBar';
import FormItem from '../../../../components/formItems';
import MaskedField from '../../../../components/maskedField';
import {IconsNames} from '../../../../Icons';

export default function CadastrarEstabelecimentos() {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [street, setStreet] = useState('');

  return (
    <Container>
      <AppBar title="Cadastrar Estabelecimento" showBackIcon={true} />
      <MainContainer>
        <ItemContainer>
          <FormItem
            iconName={IconsNames.Estabelecimento}
            placeHolder="ex .: Mercado Big drive"
            onChange={text => setName(text)}
          />
          <FormItem iconName={IconsNames.Phone}>
            <MaskedField
              placeHolder="oi meu chapa"
              mask="(99)99999-9999"
              placeholder="ex .: (51)99999-9999"
              onChange={text => setPhone(text)}
            />
          </FormItem>

          <FormItem
            iconName={IconsNames.Location}
            placeHolder="ex .: Dorival candido de oliveira"
            onChange={text => setStreet(text)}
          />

          <FormItem
            iconName={IconsNames.Estabelecimento}
            placeHolder="ex.: 1070"
            keyboardType="numeric"
            onChange={text => setNumber(text)}
          />
        </ItemContainer>
      </MainContainer>
      <ButtonContainer>
        <ComfirmButton title="Salvar" />
      </ButtonContainer>
    </Container>
  );
}
