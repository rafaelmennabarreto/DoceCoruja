import React from 'react';
import {Container, FormIcon, FormInput} from './styles';
import PropTypes from 'prop-types';

const FormItem = props => {
  function changeText(text) {
    props.onChange && props.onChange(text);
  }

  return (
    <Container>
      <FormIcon name={props.iconName} />
      {props.children || (
        <FormInput
          value={props.value}
          onChangeText={t => changeText(t)}
          placeholder={props.placeHolder}
        />
      )}
    </Container>
  );
};

FormItem.propTypes = {
  iconName: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default FormItem;
