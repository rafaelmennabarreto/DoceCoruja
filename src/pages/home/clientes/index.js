import React, {useState, useCallback} from 'react';
import {Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useFocusEffect} from 'react-navigation-hooks';
import {Container, List} from './styles';
import AppBar from '../../../components/appBar';
import Loader from '~/components/loader';
import FloatingButtonGroup from '~/components/floatButtomGroup';

import actionFactory from '~/factory/actionFactory';
import clientService from '~/service/clientService';
import {useDispatchSomeClients} from '~/util/personHooks/clientHook';

import {Types} from '~/store/ducks/clients';
export default function Clientes() {
  const [loading, setLoading] = useState(false);
  const clients = useSelector(state => state.Clients);
  const dispatchSomeClients = useDispatchSomeClients();
  const load = useCallback(init, []);

  useFocusEffect(load);

  function init() {
    getAllUsers();
  }

  async function getAllUsers() {
    setLoading(true);

    if (clients.length === 0) {
      const savedClients = await clientService.getAll();
      dispatchSomeClients(savedClients);
    }

    setLoading(false);
  }

  return (
    <Container>
      <AppBar title={'Clientes'} textAlign="left" showMenuIcon={true} />
      <List
        data={clients}
        extraData={clients}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
      <Loader display={loading} />
      <FloatingButtonGroup />
    </Container>
  );
}
