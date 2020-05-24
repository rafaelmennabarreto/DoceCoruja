import React, {useCallback, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useFocusEffect} from 'react-navigation-hooks';
import {Container, ListPendencias, DateModal, DateText} from './styles';
import AppBar from '../../../components/appBar';
import FloatButtomGroup from '~/components/floatButtomGroup';
import MonthPicker from 'react-native-month-picker';
import {Card, Text} from 'react-native-elements';
import CancelButton from '~/components/CancelButton';
import ListVendas from '~/components/listVendas';
import DisplayMoney from '~/components/MaskMoney/displayMoney';
import Loader from '~/components/loader';

import Pallet from '~/pallet';

import VendaService from '~/service/vendasService';
import dateService from '~/service/dateService';

function DisplayValue({valorTotalReceber, text, color}) {
  return (
    <View style={styles.displayMoney}>
      <Text style={styles.displayMoneyText}>{text}</Text>
      <DisplayMoney
        value={valorTotalReceber}
        style={[styles.displayMoneyText, {color: color, fontWeight: 'bold'}]}
      />
    </View>
  );
}

export default function Caixa() {
  const [selectedMonth, setselectedMonth] = useState(new Date());
  const [openMonthPicker, setopenMonthPicker] = useState(false);
  const [vendas, setVendas] = useState([]);
  const [valorTotalReceber, setValorTotalReceber] = useState(0);
  const [valorTotalRecebido, setValorTotalRecebido] = useState(0);
  const [displayLoader, setDisplayLoader] = useState(false);

  const init = useCallback(() => {
    getVendasDataByMonth();
  }, [getVendasDataByMonth]);

  useFocusEffect(init);

  const onDateChange = async date => {
    setselectedMonth(date._d);
    getVendasDataByMonth(date._d);
    setopenMonthPicker(false);
  };

  const getVendasDataByMonth = useCallback(async date => {
    toogleDisplayLoader(true);
    const data = await VendaService.getAllInMonth(date);
    setVendas(data);
    setValorTotalReceber(sumTotalValue(data.filter(d => d.isPaid === false)));
    setValorTotalRecebido(sumTotalValue(data.filter(d => d.isPaid)));
    toogleDisplayLoader(false);
  }, []);

  const sumTotalValue = data => {
    const newArray = data.map(data => parseInt(data.value));

    if (newArray.length > 0) {
      return newArray.reduce((acc, value) => acc + value);
    }

    return 0;
  };

  const toogleDisplayLoader = value => {
    setDisplayLoader(value);
  };

  return (
    <Container>
      <AppBar title={'Caixa'} textAlign="left" showMenuIcon={true} />
      <TouchableOpacity onPress={() => setopenMonthPicker(true)}>
        <Card>
          <View style={{alignItemsgnItems: 'center'}}>
            <DateText>{dateService.getMonthYearString(selectedMonth)}</DateText>
          </View>
          <DisplayValue
            valorTotalReceber={valorTotalReceber}
            text="Total a receber : "
            color={Pallet.red700}
          />
          <DisplayValue
            valorTotalReceber={valorTotalRecebido}
            text="Total a recebido : "
            color={Pallet.green500}
          />
        </Card>
      </TouchableOpacity>
      <ListVendas data={vendas} screen="CaixaCadastrarVenda" />
      <FloatButtomGroup />
      <DateModal visible={openMonthPicker}>
        <View style={styles.modal}>
          <MonthPicker
            selectedDate={selectedMonth}
            onMonthChange={onDateChange}
          />
          <CancelButton
            Title="Cancelar"
            onPress={() => setopenMonthPicker(false)}
          />
        </View>
      </DateModal>
      <Loader display={displayLoader} />
    </Container>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'space-between',
  },
  displayMoney: {
    flexDirection: 'row',
  },
  displayMoneyText: {
    fontSize: 18,
  },
});
