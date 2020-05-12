import React from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';
import proptypes from 'prop-types';

import DisplayMoney from '~/components/MaskMoney/displayMoney';

import Pallet from '~/pallet';

const ListItem = ({venda}) => {
    return (
        <View style={itemStyle.itemContainer}>
            <Text style={itemStyle.text}> {venda.cliente.name} </Text>
            <DisplayMoney
                value={venda.value}
                style={[
                    itemStyle.text,
                    {color: Pallet.red700, fontWeight: 'bold'},
                ]}
            />
        </View>
    );
};

const ListVendas = ({data}) => {
    return (
        <FlatList
            style={flatListStyle.container}
            data={data}
            renderItem={({item}) => <ListItem venda={item} />}
            keyExtractor={item => item.id}
        />
    );
};

const itemStyle = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    text: {
        fontSize: 18,
    },
});

const flatListStyle = StyleSheet.create({
    container: {
        paddingHorizontal: 14.5,
    },
});

ListVendas.propTypes = {
    data: proptypes.object,
};

export default ListVendas;
