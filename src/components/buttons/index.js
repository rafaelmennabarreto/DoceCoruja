import React from 'react';
import {Button} from 'react-native-elements';
import Pallet from '../../pallet';
import propTypes from 'prop-types';

const ConfirmButton = props => (
  <Button
    {...props}
    buttonStyle={{backgroundColor: Pallet.primaryColor}}
    onPress={() => props.onPress && props.onPress()}
  />
);

ConfirmButton.propTypes = {
  onPress: propTypes.func,
  title: propTypes.string,
};

export default ConfirmButton;
