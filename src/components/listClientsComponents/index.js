import React, {useState} from 'react';
import {BackHandler, Linking, TouchableOpacity, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from 'react-navigation-hooks';
import {
  Container,
  ButtonContainer,
  CustomModal,
  ModalContainer,
  ModalItemContainer,
  CustomText,
  CloseButtonContainer,
  CustomTextModal,
} from './styles';
import CancelButton from '~/components/CancelButton';
import propTypes from 'prop-types';

import Pallet from '~/pallet';
import clientService from '~/service/clientService';

import IconButton from '~/components/iconButton';
import {alertWithOptions} from '~/service/alertService';

const ListClientsComponent = ({item, onDelete, isProcessing}) => {
  const {navigate} = useNavigation();
  const [display, setDisplay] = useState(false);

  function makeCall(number) {
    const url = `tel:0${number}`;
    setDisplay(false);
    Linking.openURL(url);
  }

  function goToEdit() {
    setDisplay(false);
    navigate('CadastrarCliente', {Cliente: item});
  }

  function deleteClient(cliente, callBack, isProcessingCallback) {
    alertWithOptions({
      title: cliente.name,
      message: 'Deseja realmente deletar este ciente ?',
      confirmButtonHandler: () =>
        remove(cliente, callBack, isProcessingCallback),
      cancelHandler: () => null,
    });
  }

  async function remove(cliente, callBack, isProcessingCallback) {
    isProcessingCallback && isProcessingCallback(true);

    const estabelecimentoDeleted = await clientService.delete(cliente);
    if (callBack) {
      callBack(estabelecimentoDeleted);
      isProcessingCallback(false);
    }

    setDisplay(false);
    isProcessingCallback && isProcessingCallback(false);
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
        onPress={() => deleteClient(item, onDelete, isProcessing)}
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

ListClientsComponent.propTypes = {
  item: propTypes.object,
  onDelete: propTypes.func,
  isProcessing: propTypes.func,
};

export default ListClientsComponent;
