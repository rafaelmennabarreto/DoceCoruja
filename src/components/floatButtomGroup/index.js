import React, {useState} from 'react';
import {StyleSheet, Animated, Text} from 'react-native';
import FloatingButton from '../floatingButtom';
import {CadastrarClientIcon, CadastrarVendaIcon} from '../../Icons';
import Pallet from '../../pallet';
import {PlusIcon} from '../../Icons';
import {PillText} from './styles';

export default function FloatButtomGroup() {
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState(new Animated.Value(0));

  const interPolateRotation = position.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });

  const rotateStyle = {
    transform: [{rotate: interPolateRotation}],
  };

  function startRotate(value) {
    Animated.timing(position, {
      toValue: value,
      duration: 100,
    }).start();
  }

  function toogleShow() {
    startRotate(1);
    if (show) {
      startRotate(0);
    }
    setShow(!show);
  }

  return (
    <>
      <FloatingButton display={true} onPress={toogleShow}>
        <Animated.View style={rotateStyle}>
          <PlusIcon size={48} color={Pallet.appBarTextColor} />
        </Animated.View>
      </FloatingButton>

      <FloatingButton
        display={show}
        bottom={25}
        width="auto"
        style={styles.pill}>
        <CadastrarVendaIcon size={28} color={Pallet.appBarTextColor} />
        <PillText color={Pallet.appBarTextColor}>Cadastrar Venda</PillText>
      </FloatingButton>

      <FloatingButton
        display={show}
        bottom={85}
        width="auto"
        style={styles.pill}>
        <CadastrarClientIcon size={28} color={Pallet.appBarTextColor} />
        <PillText color={Pallet.appBarTextColor}>Cadastrar Cliente</PillText>
      </FloatingButton>
    </>
  );
}

const styles = StyleSheet.create({
  pill: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 190,
    height: 'auto',
    paddingVertical: 10,
    right: 25,
  },
});
