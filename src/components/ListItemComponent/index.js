import React from 'react';
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

const Buttons = ({item}) => (
  <ButtonContainer>
    <IconButton iconName="ios-call" color={Pallet.secondaryColor} />
    <IconButton iconName="ios-create" color={Pallet.green500} />
    <IconButton iconName="ios-trash" color={Pallet.red700} iconColor="" />
  </ButtonContainer>
);

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
