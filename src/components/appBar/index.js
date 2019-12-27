import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Text} from './styles';
import {BackIcon} from '../../Icons';

export default function AppBar(props) {
  return (
    <Container style={styles.boxShadow}>
      {props.showIcon && <BackIcon {...props} />}
      {props.children || (
        <Text textAlign={props.textAlign}> {props.title} </Text>
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
