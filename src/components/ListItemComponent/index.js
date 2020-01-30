import React from 'react';
import {Container, Text} from './styles';
import propTypes from 'prop-types';

import SwipeMenu from '../../components/swipeMenu';

const Details = item => (
  <Container>
    <Text>{item.name}</Text>
  </Container>
);

const ListItemComponent = ({item}) => {
  return <SwipeMenu detailsComponent={() => Details(item)} />;
};

ListItemComponent.propTypes = {
  item: propTypes.object,
};

export default ListItemComponent;
