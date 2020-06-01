import React, {useState, useCallback} from 'react';
import {useSelector} from 'react-redux';
import {useFocusEffect} from 'react-navigation-hooks';
import {Container, List} from './styles';
import AppBar from '../../../components/appBar';
import Loader from '~/components/loader';
import FloatingButtonGroup from '~/components/floatButtomGroup';
import ListClientsComponent from '~/components/listClientsComponents';

import clientService from '~/service/clientService';
import {
  useDispatchSomeClients,
  useRemoveOneClient,
} from '~/util/personHooks/clientHook';

export default function Clientes() {
  const [loading, setLoading] = useState(false);
  const clients = useSelector(state => state.Clients);
  const dispatchSomeClients = useDispatchSomeClients();
  const removeOneClient = useRemoveOneClient();
  const load = useCallback(init, []);
  const [activeItem, setActiveItem] = useState('');

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

  function setActiveItemHandler(item) {
    setActiveItem(item);
  }

  return (
    <Container>
      <AppBar title={'Clientes'} textAlign="left" showMenuIcon={true} />
      <List
        data={clients}
        extraData={clients}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ListClientsComponent
            item={item}
            onDelete={removeOneClient}
            isProcessing={setLoading}
            activeItem={activeItem}
            setActiveItem={setActiveItemHandler}
          />
        )}
      />
      <Loader display={loading} />
      <FloatingButtonGroup />
    </Container>
  );
}
