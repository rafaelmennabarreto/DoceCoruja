import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useFocusEffect} from 'react-navigation-hooks';
import {Container, List} from './styles';
import AppBar from '../../../components/appBar';

import actionFactory from '~/factory/actionFactory';
import clientService from '~/service/clientService';

import {Types} from '~/store/ducks/clients';
export default function Clientes() {
  const dispatch = useDispatch();
  const clients = useSelector(state => state.Clients);
  const load = useCallback(init, []);

  useFocusEffect(load);

  function init() {
    getAllUsers();
  }

  async function getAllUsers() {
    console.log(clients);
    if (clients.length === 0) {
      const savedClients = await clientService.getAll();
      dispatchUser(savedClients, Types.ADD_USERS);
    }
  }

  function dispatchUser(payload, type) {
    dispatch(
      actionFactory.generateActionPayload({
        payload,
        type,
      }),
    );
  }

  return (
    <Container>
      <AppBar title={'Clientes'} textAlign="left" showMenuIcon={true} />
      <List
        data={clients}
        extraData={clients}
        keyExtractor={item => item.id}
        renderItem={() => {}}
      />
    </Container>
  );
}
