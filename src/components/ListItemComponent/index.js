import React, {useState} from 'react';
import {Linking, TouchableOpacity} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Container,
  ButtonContainer,
  CloseButtonContainer,
  CustomModal,
  CustomText,
  CustomTextModal,
  ModalContainer,
  ModalItemContainer,
} from './styles';
import propTypes from 'prop-types';

import Pallet from '../../pallet';
import {alertWithOptions} from '~/service/alertService';
import estabelecimentoService from '~/service/estabelecimentoService';

import IconButton from '../../components/iconButton';

const ListItemComponent = ({item, onDelete, isProcessing}) => {
  const [display, setDisplay] = useState(false);
  const {navigate} = useNavigation();

  function makeCall(number) {
    const url = `tel:0${number}`;
    Linking.openURL(url);
  }

  function goToEdit() {
    navigate('CadastrarEstabelecimentos', {estabelecimento: item});
  }

  function removeEstabelecimento(
    estabelecimento,
    callBack,
    isProcessingCallback,
  ) {
    alertWithOptions({
      title: estabelecimento.name,
      message: 'Deseja realmente deletar este estabelecimento ?',
      confirmButtonHandler: () =>
        remove(estabelecimento, callBack, isProcessingCallback),
      cancelHandler: () => null,
    });
  }

  async function remove(estabelecimento, callBack, isProcessingCallback) {
    isProcessingCallback(true);
    const estabelecimentoDeleted = await estabelecimentoService.delete(
      estabelecimento,
    );
    if (callBack) {
      callBack(estabelecimentoDeleted);
      isProcessingCallback(false);
    }

    isProcessingCallback(false);
    // callBack(estabelecimento);
  }

  const Buttons = () => (
    <ButtonContainer>
      <IconButton
        iconName="ios-call"
        color={Pallet.secondaryColor}
        text="Chamar"
        onPress={() => makeCall(item.telefone)}
      />
      <IconButton
        iconName="ios-create"
        color={Pallet.green500}
        text="Editar"
        onPress={goToEdit}
      />
      <IconButton
        iconName="ios-trash"
        color={Pallet.red700}
        text="Deletar"
        iconColor=""
        onPress={() => removeEstabelecimento(item, onDelete, isProcessing)}
      />
    </ButtonContainer>
  );

  const CloseButton = () => (
    <CloseButtonContainer onPress={() => setDisplay(false)}>
      <Icon name="ios-close" size={38} color="white" />
    </CloseButtonContainer>
  );

  return (
    <>
      <TouchableOpacity onLongPress={goToEdit} onPress={() => setDisplay(true)}>
        <Container>
          <CustomText>{item.name}</CustomText>
        </Container>
      </TouchableOpacity>
      <CustomModal
        visible={display}
        transparent
        animationType="slide"
        onRequestClose={() => setDisplay(false)}>
        <ModalContainer>
          <ModalItemContainer>
            <CustomTextModal> {item.name} </CustomTextModal>
            <Buttons />
            <CloseButton />
          </ModalItemContainer>
        </ModalContainer>
      </CustomModal>
    </>
  );
};

ListItemComponent.propTypes = {
  item: propTypes.object,
  onDelete: propTypes.func,
  isProcessing: propTypes.func,
};

export default ListItemComponent;
