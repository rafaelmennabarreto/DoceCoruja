import React from 'react';
import {Button} from 'react-native-elements';
import Pallet from '../../pallet';

export const ConfirmButton = props => (
  <Button
    {...props}
    buttonStyle={{backgroundColor: Pallet.primaryColor}}
    onPress={() => props.onPress && props.onPress()}
  />
);
