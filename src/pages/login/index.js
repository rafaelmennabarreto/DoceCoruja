import React from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {Container, Gradiente, Button, Label} from './styles';
import AppBar from '../../components/appBar';
import Pallet from '../../pallet';
import {GoogleIcon} from '../../Icons';

import {Types} from '../../store/ducks/users';

import {GoogleLogin, IsLogged} from '../../service/loginService';

import userFactory from '../../factory/userFactory';
import actionFactory from '../../factory/actionFactory';

export default function Login({navigation}) {
  const dispatch = useDispatch();

  async function login() {
    try {
      const data = await GoogleLogin();
      if (await IsLogged()) {
        dispatchUser(data.user);
        navigation.navigate('Home');
      }
    } catch (e) {
      console.warn(e);
    }
  }

  function dispatchUser(user) {
    console.warn(user);
    dispatch(
      actionFactory.generateActionPayload({
        type: Types.ADD_USER,
        payload: userFactory.generateUserByGoogleLoginResponse(user),
      }),
    );
  }

  return (
    <Container>
      <AppBar title="Doces Coruja" textAlign="center" />
      <Gradiente colors={[`${Pallet.ligthBlue}`, `${Pallet.primaryColor}`]}>
        <Button style={styles.boxShadow} onPress={login}>
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
