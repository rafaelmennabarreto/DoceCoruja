import React from 'react';
import {Container, FormIcon, FormInput} from './styles';
import PropTypes from 'prop-types';

const FormItem = props => {
  function changeText(text) {
    props.onChange && props.onChange(text);
  }

  function onPress() {
    props.onPress && props.onPress();
  }

  return (
    <Container>
      <FormIcon name={props.iconName} />
      {props.children || (
        <FormInput
          value={props.value}
          onChangeText={t => changeText(t)}
          placeholder={props.placeHolder}
          keyboardType={props.keyboardType || 'default'}
          onPress={onPress}
          disabled={props.disabled || false}
        />
      )}
    </Container>
  );
};

FormItem.propTypes = {
  iconName: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  onChange: PropTypes.func,
  onPress: PropTypes.func,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  keyboardType: PropTypes.oneOf(['numeric', 'decimal-pad', 'phone-pad']),
};

export default FormItem;
