import React, {useState, useCallback, useContext} from 'react';
import {useFocusEffect, useNavigation} from 'react-navigation-hooks';
import {useDispatch} from 'react-redux';
import {
  Container,
  ItemContainer,
  MainContainer,
  ButtonContainer,
} from './styles';
import {ConfirmButton} from '~/components/buttons';

import AppBar from '~/components/appBar';
import Formitem from '~/components/formItems';
import MaskedField from '~/components/maskedField';
import {IconsNames} from '~/Icons';

import actionFactory from '~/factory/actionFactory';
import clientFactory from '~/factory/clientFactory';
import {alert} from '~/service/alertService';

export default function CadastrarEstabelecimentos() {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [street, setStreet] = useState('');
  const [mail, setMail] = useState('');
  const [estabelecimento, setEstabelecimento] = useState('');
  const [screenTitle, setScreenTitle] = useState('');
  const {getParam} = useNavigation();
  const item = getParam('cliente');
  const dispatch = useDispatch();

  function save() {
    const clientToSave = clientFactory.generateClient({
      name: name,
      email: mail,
      telefone: phone,
      idEstabelecimento: estabelecimento?.id,
    });
  }

  return (
    <Container>
      <AppBar title={screenTitle} showBackIcon={true} />
      <MainContainer>
        <ItemContainer>
          <Formitem
            value={name}
            iconName={IconsNames.User}
            placeHolder="ex .: João Pedro"
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

          <Formitem
            value={mail}
            iconName={IconsNames.Mail}
            placeHolder="ex.: cliente@gmail.com"
            onChange={text => setMail(text)}
          />

          <Formitem
            value={estabelecimento?.name}
            iconName={IconsNames.Estabelecimento}
            placeHolder="Selecione um estabelecimento"
            keyboardType="numeric"
            disabled={true}
          />
        </ItemContainer>
      </MainContainer>
      <ButtonContainer>
        <ConfirmButton title="Salvar" onPress={() => {}} />
      </ButtonContainer>
    </Container>
  );
}
