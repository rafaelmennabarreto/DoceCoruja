import React from 'react';
import {Linking} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';
import {Container, Text, ButtonContainer, ListButton} from './styles';
import propTypes from 'prop-types';

import Pallet from '../../pallet';

import SwipeMenu from '../../components/swipeMenu';
import IconButton from '../../components/iconButton';

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

  return (
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
      <IconButton iconName="ios-trash" color={Pallet.red700} iconColor="" />
    </ButtonContainer>
  );
};

const ListItemComponent = ({item}) => {
  return (
    <SwipeMenu
      detailsComponent={<Details item={item} />}
      buttonComponent={<Buttons item={item} />}
    />
  );
};

ListItemComponent.propTypes = {
  item: propTypes.object,
};

export default ListItemComponent;
