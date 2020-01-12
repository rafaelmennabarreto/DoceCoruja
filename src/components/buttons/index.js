import React from 'react';
import styled from 'styled-components/native';
import {Button} from 'react-native-elements';
import Pallet from '../../pallet';

export const ComfirmButton = props => (
  <Button {...props} buttonStyle={{backgroundColor: Pallet.primaryColor}} />
);
