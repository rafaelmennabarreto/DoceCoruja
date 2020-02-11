import React, {useState, useCallback, useContext} from 'react';
import {useFocusEffect, useNavigation} from 'react-navigation-hooks';
import {
  Container,
  ItemContainer,
  MainContainer,
  ButtonContainer,
} from './styles';
import {ConfirmButton} from '~/components/buttons';

import AppBar from '~/components/appBar';
import SelecionarEstabelecimentoModal from '~/components/selecionarEstabelecimentoModal';
import Formitem from '~/components/formItems';
import MaskedField from '~/components/maskedField';
import Loader from '~/components/loader';
import {IconsNames} from '~/Icons';

import clientFactory from '~/factory/clientFactory';
import {useDispatchOneClient} from '~/util/personHooks/clientHook';
import {alert} from '~/service/alertService';
import clientService from '~/service/clientService';

export default function CadastrarEstabelecimentos() {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [street, setStreet] = useState('');
  const [mail, setMail] = useState('');
  const [estabelecimento, setEstabelecimento] = useState('');
  const [screenTitle, setScreenTitle] = useState('');
  const [displayModal, setDisplayModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {getParam} = useNavigation();
  const dispatchClient = useDispatchOneClient();
  const item = getParam('cliente');

  const titleInit = useCallback(selectTitle, []);

  useFocusEffect(titleInit);

  function selectTitle() {
    if (item) {
      setScreenTitle('Editar Cliente');
    } else {
      setScreenTitle('Cadastrar Cliente');
    }
  }

  async function save() {
    setIsLoading(true);
    const clientToSave = clientFactory.generateClient({
      name: name,
      email: mail,
      telefone: phone,
      idEstabelecimento: estabelecimento.id,
    });

    const savedClient = await clientService.store(clientToSave);

    if (savedClient) {
      dispatchClient(savedClient);
      cleanFields();
    }

    setIsLoading(false);
  }

  function onSelectEstabelecimento(value) {
    setEstabelecimento(value);
    setDisplayModal(false);
  }

  function cleanFields() {
    setPhone('');
    setStreet('');
    setName('');
    setNumber('');
    setMail('');
    setEstabelecimento('');
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
            onContainerPress={() => setDisplayModal(true)}
          />
        </ItemContainer>
      </MainContainer>
      <ButtonContainer>
        <ConfirmButton title="Salvar" onPress={save} />
      </ButtonContainer>
      <SelecionarEstabelecimentoModal
        display={displayModal}
        closePress={() => setDisplayModal(false)}
        onSelectItem={onSelectEstabelecimento}
      />
      <Loader display={isLoading} />
    </Container>
  );
}
