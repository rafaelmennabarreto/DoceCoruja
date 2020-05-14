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

export default function Pendencias() {
    const [selectedMonth, setselectedMonth] = useState(new Date());
    const [openMonthPicker, setopenMonthPicker] = useState(false);
    const [vendas, setVendas] = useState([]);
    const [valorTotal, setValorTotal] = useState(0);
    const [displayLoader, setDisplayLoader] = useState(false);

    const getAllVendas = async () => {
        const vendas = await VendaService.getAllInMonth();
    };

    const init = useCallback(() => {
        getVendasDataByMonth();
    }, []);

    useFocusEffect(init);

    const onDateChange = async date => {
        setselectedMonth(date._d);
        getVendasDataByMonth(date._d);
        setopenMonthPicker(false);
    };

    const getVendasDataByMonth = async date => {
        toogleDisplayLoader(true);
        const data = await VendaService.getAllInMonth(date);
        setVendas(data);
        setValorTotal(sumTotalValue(data));
        toogleDisplayLoader(false);
    };

    const sumTotalValue = data => {
        const newArray = data.map(data => parseInt(data.value));

        if (newArray.length > 0)
            return newArray.reduce((acc, value) => acc + value);

        return 0;
    };

    const toogleDisplayLoader = value => {
        setDisplayLoader(value);
    };

    return (
        <Container>
            <AppBar title={'Pendencias'} textAlign="left" showMenuIcon={true} />
            <TouchableOpacity onPress={() => setopenMonthPicker(true)}>
                <Card>
                    <View style={{alignItemsgnItems: 'center'}}>
                        <DateText>
                            {dateService.getMonthYearString(selectedMonth)}
                        </DateText>
                    </View>
                    <View style={styles.displayMoney}>
                        <Text style={styles.displayMoneyText}>
                            {'Total a receber : '}
                        </Text>
                        <DisplayMoney
                            value={valorTotal}
                            style={[
                                styles.displayMoneyText,
                                {color: Pallet.red700, fontWeight: 'bold'},
                            ]}
                        />
                    </View>
                </Card>
            </TouchableOpacity>
            <ListVendas data={vendas} />
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
