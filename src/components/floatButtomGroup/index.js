import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import FloatingButton from '../floatingButtom';
import {CadastrarClientIcon, CadastrarVendaIcon} from '../../Icons';
import Pallet from '../../pallet';
import {PillText} from './styles';

export default function FloatButtomGroup() {
  const [show, setShow] = useState(false);

  function toogleShow() {
    console.log(show);
    setShow(!show);
  }

  return (
    <>
      <FloatingButton display={true} onPress={toogleShow} />

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
    paddingVertical: 12,
    right: 25,
  },
});
