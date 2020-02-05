import React, {useCallback, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useFocusEffect} from 'react-navigation-hooks';
import {Container, List} from './styles';
import AppBar from '../../../components/appBar';
import ListItemComponent from '../../../components/ListItemComponent';
import Loader from '~/components/loader';

import EstabelecimentoService from '../../../service/estabelecimentoService';
import ActionFactory from '../../../factory/actionFactory';
import {Types} from '../../../store/ducks/estabelecimentos';

export default function Estabelecimentos() {
  const storedEstabelecimentos = useSelector(state => state.Estabelecimentos);
  const [estabelecimentos, setEstabelecimentos] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [refreshList, setRefreshList] = useState(false);

  const dispacth = useDispatch();

  const onLoad = useCallback(init, []);

  useFocusEffect(onLoad);

  function init() {
    getAllEstabelecimentos();
  }

  async function getAllEstabelecimentos() {
    setShowLoader(true);

    if (storedEstabelecimentos.length > 0) {
      setEstabelecimentos(storedEstabelecimentos);
      setShowLoader(false);
      return;
    }

    const data = await EstabelecimentoService.getAll();
    dispatchEstabelecimentos(data, Types.ADD_ESTABELECIMENTO);
    setEstabelecimentos(data);
    setShowLoader(false);
  }

  function dispatchEstabelecimentos(estabelecimentosToStore, type) {
    dispacth(
      ActionFactory.generateActionPayload({
        type: type,
        payload: estabelecimentosToStore,
      }),
    );
  }

  function onDelete(estabelecimentoDeleted) {
    if (estabelecimentoDeleted) {
      dispatchEstabelecimentos(
        estabelecimentoDeleted,
        Types.REMOVE_ESTABELECIMENTO,
      );
    }

    setEstabelecimentos(
      estabelecimentos.filter(i => i.id !== estabelecimentoDeleted.id),
    );

    setRefreshList(true);
  }

  return (
    <Container>
      <AppBar title={'Estabelecimentos'} textAlign="left" showMenuIcon={true} />
      <List
        data={estabelecimentos}
        extraData={refreshList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ListItemComponent key={item.id} item={item} onDelete={onDelete} />
        )}
      />
      <Loader display={showLoader} />
    </Container>
  );
}
