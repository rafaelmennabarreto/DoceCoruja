import React from 'react';
import {Container, Text} from './styles';
import {BackIcon} from '../../Icons';

export default function AppBar(props) {
  return (
    <Container>
      {props.showIcon && <BackIcon {...props} />}
      {props.children || <Text> {props.title} </Text>}
    </Container>
  );
}
