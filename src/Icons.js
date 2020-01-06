import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Pallet from './pallet';

export const BackIcon = props => {
  return (
    <TouchableOpacity style={styles.backButton} {...props}>
      <Icon name="ios-arrow-back" size={24} color={Pallet.appBarTextColor} />
    </TouchableOpacity>
  );
};

export const MenuIcon = props => {
  return (
    <TouchableOpacity style={styles.backButton} {...props}>
      <Icon name="ios-menu" size={24} color={Pallet.appBarTextColor} />
    </TouchableOpacity>
  );
};

export const GoogleIcon = props => <Icon name="logo-google" {...props} />;

export const CadastrarClientIcon = props => (
  <Icon name="ios-person-add" {...props} />
);

export const CadastrarVendaIcon = props => <Icon name="ios-cash" {...props} />;

export const PlusIcon = props => <Icon name="ios-add" {...props} />;

/* Drawer Icons */
const drawerIconSize = 24;

export const DrawerHome = props => (
  <Icon name="ios-home" size={drawerIconSize} color={props.tintColor} />
);

export const DrawerEstabelecimento = props => (
  <Icon name="ios-business" size={drawerIconSize} color={props.tintColor} />
);

export const DrawerCaixa = props => (
  <Icon name="ios-wallet" size={drawerIconSize} color={props.tintColor} />
);
export const DrawerPendencias = props => (
  <Icon name="ios-clock" size={drawerIconSize} color={props.tintColor} />
);
export const DrawerClients = props => (
  <Icon name="ios-contacts" size={drawerIconSize} color={props.tintColor} />
);

const styles = StyleSheet.create({
  backButton: {
    paddingLeft: 15,
    paddingRight: 25,
    height: '100%',
    justifyContent: 'center',
  },
});
