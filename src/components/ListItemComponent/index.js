import React, {useContext, createContext} from 'react';
import {Linking} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';
import {Container, Text, ButtonContainer, ListButton} from './styles';
import propTypes from 'prop-types';

import Pallet from '../../pallet';
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
    const url = `tel:${number}`;
    Linking.openURL(url);
  }

  function goToEdit() {
    navigate('CadastrarEstabelecimentos', {estabelecimento: item});
  }

  async function remove(estabelecimento, callBack) {
    const estabelecimentoDeleted = await estabelecimentoService.delete(
      estabelecimento,
    );
    if (callBack) {
      callBack(estabelecimentoDeleted);
    }
    callBack(estabelecimento);
  }

  return (
    <ItemContext.Consumer>
      {({onDelete}) => (
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
            onPress={() => remove(item, onDelete)}
          />
        </ButtonContainer>
      )}
    </ItemContext.Consumer>
  );
};

const ListItemComponent = ({item, onDelete}) => {
  return (
    <ItemContext.Provider value={{onDelete}}>
      <SwipeMenu
        detailsComponent={<Details item={item} />}
        buttonComponent={<Buttons item={item} />}
      />
    </ItemContext.Provider>
  );
};

ListItemComponent.propTypes = {
  item: propTypes.object,
  onDelete: propTypes.func,
};

export default ListItemComponent;
