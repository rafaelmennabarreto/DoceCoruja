import React from 'react';
import {Container} from './styles';
import {Input, Text} from 'react-native-elements';

export default function FormItem(props) {
  function changeText(text) {
    props.onChange && props.onChange(text);
  }

  return (
    <Container>
      <Text>{props.label || ''}</Text>
      <Input onChangeText={t => changeText(t)} />
    </Container>
  );
}
