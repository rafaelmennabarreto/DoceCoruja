import React, {useCallback} from 'react';
import {useFocusEffect} from 'react-navigation-hooks';
import Pallet from '../../pallet';
import {Gradiente, Text} from './styles';
import {IsLogged} from '../../service/loginService';

export default function Splash({navigation}) {
  const init = useCallback(() => {
    async function go() {
      if (await IsLogged()) {
        navigation.navigate('Home');
        return;
      }
      navigation.navigate('Login');
    }

    setTimeout(() => go(), 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFocusEffect(init);

  return (
    <Gradiente colors={[`${Pallet.ligthRed}`, `${Pallet.primaryColor}`]}>
      <Text>Doces coruja</Text>
    </Gradiente>
  );
}
