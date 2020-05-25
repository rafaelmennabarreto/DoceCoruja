import React, {useContext, createContext} from 'react';
import {Linking} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';
import {Container, Text, ButtonContainer, ListButton} from './styles';
import propTypes from 'prop-types';

import Pallet from '../../pallet';
import {alertWithOptions} from '~/service/alertService';
import estabelecimentoService from '~/service/estabelecimentoService';

import SwipeMenu from '../../components/swipeMenu';
import IconButton from '../../components/iconButton';

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
    navigate('CadastrarEstabelecimentos', {estabelecimento: item});
  }

  function removeEstabelecimento(
    estabelecimento,
    callBack,
    isProcessingCallback,
  ) {
    alertWithOptions({
      title: estabelecimento.name,
      message: 'Deseja realmente deletar este estabelecimento ?',
      confirmButtonHandler: () =>
        remove(estabelecimento, callBack, isProcessingCallback),
      cancelHandler: () => null,
    });
  }

  async function remove(estabelecimento, callBack, isProcessingCallback) {
    isProcessingCallback(true);
    const estabelecimentoDeleted = await estabelecimentoService.delete(
      estabelecimento,
    );
    if (callBack) {
      callBack(estabelecimentoDeleted);
      isProcessingCallback(false);
    }

    isProcessingCallback(false);
    // callBack(estabelecimento);
  }

  return (
    <ItemContext.Consumer>
      {({onDelete, isProcessing}) => (
        <ButtonContainer>
          <IconButton
            iconName="ios-call"
            color={Pallet.secondaryColor}
            onPress={() => makeCall(item.phone)}
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
            onPress={() => removeEstabelecimento(item, onDelete, isProcessing)}
          />
        </ButtonContainer>
      )}
    </ItemContext.Consumer>
  );
};

const ListItemComponent = ({item, onDelete, isProcessing}) => {
  const {navigate} = useNavigation();

  function goToEdit() {
    navigate('CadastrarEstabelecimentos', {estabelecimento: item});
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

ListItemComponent.propTypes = {
  item: propTypes.object,
  onDelete: propTypes.func,
  isProcessing: propTypes.func,
};

export default ListItemComponent;
