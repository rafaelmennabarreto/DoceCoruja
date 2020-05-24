import React, {useState, useCallback, useEffect} from 'react';
import {TextInput} from './styles';
import PropTypes from 'prop-types';

import MaskFieldService from './maskFieldService';

const MaskedField = ({style, placeholder, onChange, mask, value}) => {
  const [previouValue, setPreviouValue] = useState('');

  useEffect(useCallback(formatInitialValue, [value]), [value]);

  function formatInitialValue() {
    if (value) {
      changeText(value);
    }
  }

  function changeText(textValue) {
    if (textValue.length < previouValue.length) {
      setPreviouValue(textValue);
      onChange && onChange(textValue);
      return;
    }

    const maskFunc = MaskFieldService(mask);

    const maskedValue = maskFunc(textValue);
    setPreviouValue(maskedValue);
    onChange && onChange(maskedValue);
  }

  return (
    <TextInput
      style={style}
      value={value}
      placeholder={placeholder}
      onChangeText={changeText}
      keyboardType="decimal-pad"
    />
  );
};

MaskedField.propTypes = {
  style: PropTypes.object,
  value: PropTypes.string,
  placeHolder: PropTypes.string,
  onChange: PropTypes.func,
  mask: PropTypes.string || PropTypes.array,
};

export default MaskedField;
