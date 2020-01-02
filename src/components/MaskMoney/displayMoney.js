import React from 'react';
import {Text} from 'react-native';

// import { Container } from './styles';

export default function DisplayMoney({prefix, value}) {
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
      const stringSize = valueString.length;

      val = addSeparator(x, stringSize, 3, ',', val) || val;
      val = addSeparator(x, stringSize, 6, '.', val) || val;
      val = addSeparator(x, stringSize, 9, '.', val) || val;
      val = addSeparator(x, stringSize, 12, '.', val) || val;
      val = addSeparator(x, stringSize, 15, '.', val) || val;
    }

    return val;
  }

  function addSeparator(
    positionToCompare,
    actualPosition,
    separatorPosition,
    separator,
    oldValue,
  ) {
    if (positionToCompare === actualPosition - separatorPosition) {
      const val = oldValue + separator;
      return val;
    }
  }

  return (
    <Text>
      {prefix || 'R$'} {getValueMasked(value)}
    </Text>
  );
}
