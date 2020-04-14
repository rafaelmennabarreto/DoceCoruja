import React, {useCallback, useState} from 'react';
import {useFocusEffect} from 'react-navigation-hooks';
import {Container, ListPendencias, DateModal, DateText} from './styles';
import AppBar from '../../../components/appBar';
import FloatButtomGroup from '~/components/floatButtomGroup';
import MonthPicker from 'react-native-month-picker';
import {Card} from 'react-native-elements';

import VendaService from '~/service/vendasService';
import dateService from '~/service/dateService';

export default function Pendencias() {
  const [selectedMonth, setselectedMonth] = useState(new Date());
  const [openMonthPicker, setopenMonthPicker] = useState(true);

  const getAllVendas = async () => {
    const vendas = await VendaService.getAllInMonth();
  };

  const init = useCallback(() => {
    getAllVendas();
  }, []);

  useFocusEffect(init);

  const onDateChange = date => {
    setselectedMonth(date._d);
    // setopenMonthPicker(false);
  };

  return (
    <Container>
      <AppBar title={'Pendencias'} textAlign="left" showMenuIcon={true} />
      <Card>
        <DateText>{dateService.getMonthYearString(selectedMonth)}</DateText>
      </Card>
      <ListPendencias />
      <FloatButtomGroup />
      <DateModal visible={true}>
        <MonthPicker
          selectedDate={selectedMonth}
          onMonthChange={onDateChange}
        />
      </DateModal>
    </Container>
  );
}
