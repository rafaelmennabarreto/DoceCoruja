import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Gradiente, Button, Label} from './styles';
import AppBar from '../../components/appBar';
import Pallet from '../../pallet';
import {GoogleIcon} from '../../Icons';
export default function Login() {
  return (
    <Container>
      <AppBar title="Doces Coruja" textAlign="center" />
      <Gradiente colors={[`${Pallet.ligthRed}`, `${Pallet.primaryColor}`]}>
        <Button style={styles.boxShadow}>
          <GoogleIcon size={36} color="white" />
          <Label> Logar com conta do google </Label>
        </Button>
      </Gradiente>
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

    elevation: 5,
  },
});
