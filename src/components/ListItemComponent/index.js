import React from 'react';
import {Container, Text} from './styles';
import propTypes from 'prop-types';

const ListItemComponent = ({item}) => {
  return (
    <Container>
      <Text>{item.name}</Text>
    </Container>
  );
};

ListItemComponent.propTypes = {
  item: propTypes.object,
};

export default ListItemComponent;
