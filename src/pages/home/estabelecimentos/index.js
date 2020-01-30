import React, {useCallback, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useFocusEffect} from 'react-navigation-hooks';
import {Container, List} from './styles';
import AppBar from '../../../components/appBar';
import ListItemComponent from '../../../components/ListItemComponent';

import EstabelecimentoService from '../../../service/estabelecimentoService';
import ActionFactory from '../../../factory/actionFactory';
import {Types} from '../../../store/ducks/estabelecimentos';

export default function Estabelecimentos() {
  const storedEstabelecimentos = useSelector(state => state.Estabelecimentos);
  const [estabelecimentos, setEstabelecimentos] = useState([]);

  const dispacth = useDispatch();

  const onLoad = useCallback(init, []);

  useFocusEffect(onLoad);

  function init() {
    getAllEstabelecimentos();
  }

  async function getAllEstabelecimentos() {
    if (storedEstabelecimentos.length > 0) {
      setEstabelecimentos(storedEstabelecimentos);
      return;
    }

    const data = await EstabelecimentoService.getAll();
    storeFetchedEstabelecimentos(data);
    setEstabelecimentos(data);
  }

  function storeFetchedEstabelecimentos(estabelecimentosToStore) {
    dispacth(
      ActionFactory.generateActionPayload({
        type: Types.ADD_ESTABELECIMENTO,
        payload: estabelecimentosToStore,
      }),
    );
  }

  return (
    <Container>
      <AppBar title={'Estabelecimentos'} textAlign="left" showMenuIcon={true} />
      <List
        data={estabelecimentos}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ListItemComponent item={item} />}
      />
    </Container>
  );
}
