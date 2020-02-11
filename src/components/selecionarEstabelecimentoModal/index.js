import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {SearchBar} from 'react-native-elements';
import {ModalContainer, ModalItem, ItemContainer, CloseButton} from './styles';
import propTypes from 'prop-types';

import Loader from '~/components/loader';

import Pallet from '~/pallet';
import estabelecimentoService from '~/service/estabelecimentoService';
import {useDispatchSomeEstabelecimentos} from '~/util/personHooks/estabelecimentoHook';

const SelecionarEstabelecimento = ({display, closePress, onSelectItem}) => {
  const estabelecimentos = useSelector(state => state.Estabelecimentos);
  const [displaLoader, setDisplaLoader] = useState(false);
  const dipatchSomeEstabelecimentos = useDispatchSomeEstabelecimentos();

  async function init() {
    setDisplaLoader(true);
    console.log(estabelecimentos);
    if (estabelecimentos.length === 0) {
      const savedEstebelecimentos = await estabelecimentoService.getAll();
      savedEstebelecimentos
        ? dipatchSomeEstabelecimentos(savedEstebelecimentos)
        : null;
    }

    setDisplaLoader(false);
  }

  function selectItem(item) {
    onSelectItem && onSelectItem(item);
  }

  return (
    <ModalContainer
      animationType="slide"
      visible={display}
      transparent={false}
      onShow={init}>
      <SearchBar
        value={'casa'}
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
      />

      <ItemContainer>
        {estabelecimentos &&
          estabelecimentos.map(i => (
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

SelecionarEstabelecimento.propType = {
  display: propTypes.bool,
  closePress: propTypes.func,
  onSelectItem: propTypes.func,
};

export default SelecionarEstabelecimento;
