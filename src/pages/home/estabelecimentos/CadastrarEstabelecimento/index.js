import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  Container,
  ItemContainer,
  MainContainer,
  ButtonContainer,
} from './styles';
import {ConfirmButton} from '../../../../components/buttons';

import AppBar from '../../../../components/appBar';
import FormItem from '../../../../components/formItems';
import MaskedField from '../../../../components/maskedField';
import {IconsNames} from '../../../../Icons';

import EstabelecimentoFactory from '../../../../factory/estabelecimentoFactory';
import EstabelecimentoService from '../../../../service/estabelecimentoService';

import actionFactory from '../../../../factory/actionFactory';
import {Types} from '../../../../store/ducks/estabelecimentos';

export default function CadastrarEstabelecimentos() {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [street, setStreet] = useState('');

  const dispatch = useDispatch();

  async function save() {
    const estabelecimentoToSave = EstabelecimentoFactory.generateEstabelecimentos(
      {
        name,
        number,
        street,
        phone,
      },
    );
    const savedEstabelecimento = await EstabelecimentoService.store(
      estabelecimentoToSave,
    );

    if (savedEstabelecimento) {
      dispatchEstabelecimento(savedEstabelecimento);
      clearFields();
    }
  }

  function clearFields() {
    setPhone('');
    setName('');
    setNumber('');
    setStreet('');
  }

  function dispatchEstabelecimento(estabelecimento) {
    dispatch(
      actionFactory.generateActionPayload({
        type: Types.ADD_ESTABELECIMENTO,
        payload: estabelecimento,
      }),
    );
  }

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
            iconName={IconsNames.Number}
            placeHolder="ex.: 1070"
            keyboardType="numeric"
            onChange={text => setNumber(text)}
          />
        </ItemContainer>
      </MainContainer>
      <ButtonContainer>
        <ConfirmButton title="Salvar" onPress={save} />
      </ButtonContainer>
    </Container>
  );
}
