import React, {createContext} from 'react';
import {Linking} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';
import {Container, Text, ButtonContainer} from './styles';
import propTypes from 'prop-types';

import Pallet from '~/pallet';
import clientService from '~/service/clientService';

import SwipeMenu from '~/components/swipeMenu';
import IconButton from '~/components/iconButton';
import {alertWithOptions} from '~/service/alertService';

const ItemContext = createContext(null);

const Details = ({item}) => (
  <Container>
    <Text>{item.name.toUpperCase()}</Text>
  </Container>
);

const Buttons = ({item}) => {
  const {navigate} = useNavigation();

  function makeCall(number) {
    const url = `tel:0${number}`;
    Linking.openURL(url);
  }

  function goToEdit() {
    navigate('CadastrarCliente', {Cliente: item});
  }

  function deleteClient(cliente, callBack, isProcessingCallback) {
    alertWithOptions({
      title: cliente.name,
      message: 'Deseja realmente deletar este ciente ?',
      confirmButtonHandler: () =>
        remove(cliente, callBack, isProcessingCallback),
      cancelHandler: () => null,
    });
  }

  async function remove(cliente, callBack, isProcessingCallback) {
    isProcessingCallback && isProcessingCallback(true);

    const estabelecimentoDeleted = await clientService.delete(cliente);
    if (callBack) {
      callBack(estabelecimentoDeleted);
      isProcessingCallback(false);
    }

    isProcessingCallback && isProcessingCallback(false);
  }

  return (
    <ItemContext.Consumer>
      {({onDelete, isProcessing}) => (
        <ButtonContainer>
          <IconButton
            iconName="ios-call"
            color={Pallet.secondaryColor}
            onPress={() => makeCall(item.telefone)}
          />
          <IconButton
            iconName="ios-create"
            color={Pallet.green500}
            onPress={goToEdit}
          />
          <IconButton
            iconName="ios-trash"
            color={Pallet.red700}
            iconColor=""
            onPress={() => deleteClient(item, onDelete, isProcessing)}
          />
        </ButtonContainer>
      )}
    </ItemContext.Consumer>
  );
};

const ListClientsComponent = ({item, onDelete, isProcessing}) => {
  const {navigate} = useNavigation();

  function goToEdit() {
    navigate('CadastrarCliente', {Cliente: item});
  }

  return (
    <ItemContext.Provider value={{onDelete, isProcessing}}>
      <SwipeMenu
        detailsComponent={<Details item={item} />}
        buttonComponent={<Buttons item={item} />}
        onTextClick={goToEdit}
      />
    </ItemContext.Provider>
  );
};

ListClientsComponent.propTypes = {
  item: propTypes.object,
  onDelete: propTypes.func,
  isProcessing: propTypes.func,
};

export default ListClientsComponent;
