import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {SearchBar} from 'react-native-elements';
import {ModalContainer, ModalItem, ItemContainer, CloseButton} from './styles';
import propTypes from 'prop-types';

import Loader from '~/components/loader';

import Pallet from '~/pallet';
import clienteService from '~/service/clientService';
import {useDispatchSomeClients} from '~/util/personHooks/clientHook';

const SelecionarCliente = ({
  display,
  closePress,
  onSelectItem,
  estabelecimentoId,
}) => {
  const clientes = useSelector(state => state.Clients);
  const [displaLoader, setDisplaLoader] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [filteredClientes, setFilterClientes] = useState([]);
  const dipatchSomeClients = useDispatchSomeClients();

  async function init() {
    setDisplaLoader(true);
    if (clientes.length === 0) {
      const savedClients = await clienteService.getAll();
      savedClients ? dipatchSomeClients(savedClients) : null;
      runFilterClients(savedClients);
    } else {
      runFilterClients(clientes);
    }

    setDisplaLoader(false);
  }

  function selectItem(item) {
    onSelectItem && onSelectItem(item);
  }

  function runFilterClients(clients) {
    if (estabelecimentoId) {
      setFilterClientes(
        clients.filter(c => c.idEstabelecimento === estabelecimentoId),
      );
    } else {
      clients.length > 0 && setFilterClientes(clients);
    }
  }

  function filterClients(text) {
    if (estabelecimentoId) {
      const filteredClients = clientes.filter(
        c =>
          c.idEstabelecimento === estabelecimentoId &&
          c.name.toUpperCase().match(text.toUpperCase()),
      );
      setFilterClientes(filteredClients);
    } else {
      const filteredClients = clientes.filter(c =>
        c.name.toUpperCase().match(text.toUpperCase()),
      );
      setFilterClientes(filteredClients);
    }
    setFilterText(text);
  }

  return (
    <ModalContainer
      animationType="slide"
      visible={display}
      transparent={false}
      onShow={init}>
      <SearchBar
        value={filterText}
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
        onChangeText={filterClients}
      />

      <ItemContainer>
        {filteredClientes?.map(i => (
          <ModalItem key={i.id} onPress={() => selectItem(i)}>
            <Text> {i.name.toUpperCase()} </Text>
          </ModalItem>
        ))}
      </ItemContainer>

      <CloseButton
        title="Fechar"
        color={Pallet.red700}
        onPress={() => closePress && closePress()}
      />
      <Loader display={displaLoader} />
    </ModalContainer>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: Pallet.primaryColor,
  },
  inputContainer: {
    backgroundColor: Pallet.appBarTextColor,
  },
  input: {
    color: 'black',
  },
});

SelecionarCliente.propType = {
  display: propTypes.bool,
  closePress: propTypes.func,
  onSelectItem: propTypes.func,
  idEstabelecimento: propTypes.number,
};

export default SelecionarCliente;
