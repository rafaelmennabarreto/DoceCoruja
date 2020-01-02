import React, {useCallback} from 'react';
import {useFocusEffect} from 'react-navigation-hooks';
import {useDispatch} from 'react-redux';
import Pallet from '../../pallet';
import {Gradiente, Text} from './styles';
import {IsLogged, GoogleLogin} from '../../service/loginService';

import {Types} from '../../store/ducks/users';
import userFactory from '../../factory/userFactory';
import actionFactory from '../../factory/actionFactory';

export default function Splash({navigation}) {
  const dispatch = useDispatch();
  const init = useCallback(() => {
    async function go() {
      if (await IsLogged()) {
        const loginData = await GoogleLogin();
        addUserInStore(loginData.user);
        await navigation.navigate('Home');
        return;
      }
      navigation.navigate('Login');
    }

    function addUserInStore(userData) {
      const newUser = userFactory.generateUser({
        id: userData.id,
        name: userData.name,
        photoUrl: userData.photo,
      });

      dispatch(
        actionFactory.generateActionPayload({
          type: Types.ADD_USER,
          payload: newUser,
        }),
      );
    }

    setTimeout(() => {
      go();
    }, 500);
  }, [dispatch, navigation]);

  useFocusEffect(init);

  return (
    <Gradiente colors={[`${Pallet.ligthRed}`, `${Pallet.primaryColor}`]}>
      <Text>Doces coruja</Text>
    </Gradiente>
  );
}
