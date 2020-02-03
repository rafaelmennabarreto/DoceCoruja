import React, {useState, useCallback, useContext} from 'react';
import {useFocusEffect, useNavigation} from 'react-navigation-hooks';
import {useDispatch} from 'react-redux';
import {
  Container,
  ItemContainer,
  MainContainer,
  ButtonContainer,
} from './styles';
import {ConfirmButton} from '../../../../components/buttons';

import AppBar from '../../../../components/appBar';
// import Formitem from '../../../../components/formitems';
import Formitem from '../../../../components/formItems';
import MaskedField from '../../../../components/maskedField';
import {IconsNames} from '../../../../Icons';

import EstabelecimentoFactory from '../../../../factory/estabelecimentoFactory';
import actionFactory from '../../../../factory/actionFactory';
import EstabelecimentoService from '../../../../service/estabelecimentoService';
import {Types} from '../../../../store/ducks/estabelecimentos';
import {alert} from '../../../../service/alertService';

export default function CadastrarEstabelecimentos() {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [street, setStreet] = useState('');
  const [screenTitle, setScreenTitle] = useState('');
  const {getParam} = useNavigation();
  const item = getParam('estabelecimento');
  const dispatch = useDispatch();

  const initFieldsIfNeed = useCallback(loadFieldsValue, []);
  const loadTitleBarName = useCallback(getTitleBarName, []);

  useFocusEffect(loadTitleBarName);
  useFocusEffect(initFieldsIfNeed);

  function bindFieldsToSave(estabelecimento) {
    item.name = estabelecimento.name;
    item.number = estabelecimento.number;
    item.street = estabelecimento.street;
    item.phone = estabelecimento.phone;
  }

  function getTitleBarName() {
    if (item) {
      setScreenTitle('Editar Estabelecimento');
    } else {
      setScreenTitle('Cadastrar Estabelecimento');
    }
  }

  function loadFieldsValue() {
    if (item) {
      setName(item.name);
      setPhone(item.phone);
      setNumber(item.number);
      setStreet(item.street);
    }
  }
  async function save() {
    if (!validateFields()) {
      return;
    }

    const estabelecimentoToSave = EstabelecimentoFactory.generateEstabelecimentos(
      {
        name,
        number,
        street,
        phone,
      },
    );

    const savedEstabelecimento = await persistEstabelecimento(
      estabelecimentoToSave,
    );

    if (savedEstabelecimento) {
      const type = item
        ? Types.UPDATE_ESTABELECIMENTO
        : Types.ADD_ESTABELECIMENTO;

      dispatchEstabelecimento(savedEstabelecimento, type);
      item ? null : clearFields();
    }
  }

  async function persistEstabelecimento(estabelecimentoToSave) {
    if (item) {
      bindFieldsToSave(estabelecimentoToSave);
      const savedEstabelecimento = await EstabelecimentoService.update(item);
      return savedEstabelecimento;
    } else {
      const savedEstabelecimento = await EstabelecimentoService.store(
        estabelecimentoToSave,
      );
      return savedEstabelecimento;
    }
  }

  function clearFields() {
    setPhone('');
    setName('');
    setNumber('');
    setStreet('');
  }

  function dispatchEstabelecimento(estabelecimento, type) {
    dispatch(
      actionFactory.generateActionPayload({
        type: type,
        payload: estabelecimento,
      }),
    );
  }

  function validateFields() {
    const errors = [];
    vaidateField(name, 'o nome do estabelecimento', errors);
    vaidateField(phone, 'o telefone do estabelecimento', errors);
    vaidateField(street, 'a rua do estabelecimento', errors);
    vaidateField(number, 'o numero do estabelecimento', errors);

    if (errors.length > 0) {
      alert({
        title: 'Favor informar',
        message: errors.join().replace(/,/g, '\n'),
      });
      return false;
    }

    return true;
  }

  function vaidateField(field, message, errors) {
    if (field) {
      return;
    }

    errors.push(message + '\n');
  }

  return (
    <Container>
      <AppBar title={screenTitle} showBackIcon={true} />
      <MainContainer>
        <ItemContainer>
          <Formitem
            value={name}
            iconName={IconsNames.Estabelecimento}
            placeHolder="ex .: Mercado Big drive"
            onChange={text => setName(text)}
          />
          <Formitem iconName={IconsNames.Phone}>
            <MaskedField
              value={phone}
              mask={['(99)99999-9999', '(99)9999-9999']}
              placeholder="ex .: (51)99999-9999"
              onChange={text => setPhone(text)}
            />
          </Formitem>

          <Formitem
            value={street}
            iconName={IconsNames.Location}
            placeHolder="ex .: Dorival candido de oliveira"
            onChange={text => setStreet(text)}
          />

          <Formitem
            value={number}
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
