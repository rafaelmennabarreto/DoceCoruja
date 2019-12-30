import React from 'react';
import {Text} from 'react-native';

// import { Container } from './styles';

export default function DisplayMoney({value}) {
  function getValueMasked(moneyValue) {
    const valueString = [...moneyValue.toString()];
    var val = '';

    if (valueString.length === 1) {
      return `0,0${value}`;
    }

    if (valueString.length === 2) {
      return `0,${value}`;
    }

    for (var x = 0; x < valueString.length; x++) {
      val += valueString[x];
      if (x === valueString.length - 3) {
        val += ',';
      }

      if (x === valueString.length - 6) {
        val += '.';
      }
    }

    return val;
  }

  return <Text>R$ {getValueMasked(value)}</Text>;
}
