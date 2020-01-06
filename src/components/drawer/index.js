import React from 'react';
import {DrawerItems} from 'react-navigation-drawer';
import {Container, Text} from './styles';

const Drawer = props => (
  <Container>
    <DrawerItems {...props} />
  </Container>
);

export default Drawer;
