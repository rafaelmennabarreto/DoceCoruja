import React from 'react';
import {StyleSheet, FlatList, View, Text, TouchableOpacity} from 'react-native';
import proptypes from 'prop-types';
import {useNavigation} from 'react-navigation-hooks';

import DisplayMoney from '~/components/MaskMoney/displayMoney';

import Pallet from '~/pallet';

const ListItem = ({venda, screen}) => {
  const navigation = useNavigation();

  function goToVisualizarVendaScreen() {
    navigation.navigate(screen, {
      Venda: venda,
    });
  }

  return (
    <TouchableOpacity onPress={goToVisualizarVendaScreen}>
      <View style={itemStyle.itemContainer}>
        <Text style={[itemStyle.text, {flex: 4}]}>{venda.cliente.name}</Text>
        <DisplayMoney
          value={venda.value}
          style={[
            itemStyle.text,
            itemStyle.moneyField,
            venda.isPaid && {color: Pallet.green500},
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

const ListVendas = ({data, screen}) => {
  return (
    <FlatList
      style={flatListStyle.container}
      data={data}
      renderItem={({item}) => <ListItem venda={item} screen={screen} />}
      keyExtractor={item => item.id}
    />
  );
};

const itemStyle = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    minHeight: 60,
  },
  text: {
    fontSize: 19,
  },
  moneyField: {
    color: Pallet.red700,
    fontWeight: 'bold',
    justifyContent: 'flex-end',
    flex: 1.3,
  },
});

const flatListStyle = StyleSheet.create({
  container: {
    paddingHorizontal: 14.5,
  },
});

ListVendas.propTypes = {
  data: proptypes.object,
  screen: proptypes.string.isRequired,
};

export default ListVendas;
