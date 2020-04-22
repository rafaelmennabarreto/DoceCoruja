import React, {useCallback, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useFocusEffect} from 'react-navigation-hooks';
import {Container, ListPendencias, DateModal, DateText} from './styles';
import AppBar from '../../../components/appBar';
import FloatButtomGroup from '~/components/floatButtomGroup';
import MonthPicker from 'react-native-month-picker';
import {Card, Text} from 'react-native-elements';

import VendaService from '~/service/vendasService';
import dateService from '~/service/dateService';

export default function Pendencias() {
  const [selectedMonth, setselectedMonth] = useState(new Date());
  const [openMonthPicker, setopenMonthPicker] = useState(false);

  const getAllVendas = async () => {
    const vendas = await VendaService.getAllInMonth();
  };

  const init = useCallback(() => {
    getAllVendas();
  }, []);

  useFocusEffect(init);

  const onDateChange = date => {
    console.log(date);
    setselectedMonth(date._d);
    setopenMonthPicker(false);
  };

  return (
    <Container>
      <AppBar title={'Pendencias'} textAlign="left" showMenuIcon={true} />
      <TouchableOpacity onPress={() => setopenMonthPicker(true)}>
        <Card>
          <View style={{alignItemsgnItems: 'center'}}>
            <DateText>{dateService.getMonthYearString(selectedMonth)}</DateText>
          </View>
        </Card>
      </TouchableOpacity>
      <ListPendencias />
      <FloatButtomGroup />
      <DateModal visible={openMonthPicker}>
        <MonthPicker
          selectedDate={selectedMonth}
          onMonthChange={onDateChange}
        />
      </DateModal>
    </Container>
  );
}
