import React, {useState} from 'react';
import {TextInput} from './styles';
import PropTypes from 'prop-types';

import MaskFieldService from './maskFieldService';

const MaskedField = ({style, placeholder, onChange, mask}) => {
  const [previouValue, setPreviouValue] = useState('');
  const [value, setValue] = useState('');

  function changeText(textValue) {
    if (textValue.length < previouValue.length) {
      setPreviouValue(textValue);
      setValue(textValue);
      onChange && onChange(textValue);
      return;
    }

    const maskFunc = MaskFieldService(mask);

    const maskedValue = maskFunc(textValue);
    setValue(maskedValue);
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
  mask: PropTypes.string,
};

export default MaskedField;
