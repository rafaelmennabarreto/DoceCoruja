import React, {useState, useCallback} from 'react';
import {useNavigation, useFocusEffect} from 'react-navigation-hooks';
import {Container, MainContainer, ButtonContainer} from './styles';

import AppBar from '~/components/appBar';
import FormItem from '~/components/formItems';
import MaskedField from '~/components/maskedField';
import {DatePicker} from '~/components/datePicker';
import ConfirmButton from '~/components/buttons';
import SelecionarEstabelecimentoModal from '~/components/selecionarEstabelecimentoModal';
import SelecionarClienteModal from '~/components/selecionarClienteModal';
import IsPaid from '~/components/isPaid';
import Loader from '~/components/loader';

import {alert, alertWithConfirmButton} from '~/service/alertService';
import vendasFactory from '~/factory/vendasFactory';
import {IconsNames} from '~/Icons';

import vendasService from '~/service/vendasService';
const Index = () => {
  const [debit, setDebit] = useState(0);
  const [saleDate, setSaleDate] = useState();
  const [estabelecimento, setEstabelecimento] = useState();
  const [description, setDescription] = useState('');
  const [isPaid, setIsPaid] = useState(undefined);
  const [displaLoader, setDisplayLoader] = useState(false);
  const [
    displayModalEstabelecimento,
    setDisplayModalEstabelecimento,
  ] = useState(false);
  const [cliente, setCliente] = useState();
  const [displayClienteModal, setDisplayClienteModal] = useState(false);
  const [title, setTitle] = useState('');

  // Editar Venda Options
  const {goBack} = useNavigation();
  const vendaParam = useNavigation().getParam('Venda');

  const mapVendaToScreensField = venda => {
    setDisplayLoader(true);
    if (venda) {
      setSaleDate(new Date(venda.saleDate));
      setDebit(venda.value);
      setDescription(venda.description);
      setEstabelecimento(venda.estabelecimento);
      setCliente(venda.cliente);
      setIsPaid(venda.isPaid);
    } else {
      setIsPaid(false);
    }
    setDisplayLoader(false);
  };
  const toogleTitle = () => {
    if (vendaParam) {
      setTitle('Editar Venda');
    } else {
      setTitle('Cadastrar Venda');
    }
  };

  const init = () => {
    toogleTitle();
    mapVendaToScreensField(vendaParam);
  };

  useFocusEffect(useCallback(init, []), []);

  const getSaleDate = async () => {
    const date = await DatePicker();
    setSaleDate(date);
  };

  const save = async () => {
    setDisplayLoader(true);

    if (validateBeforeSave()) {
      const {generateVendas} = vendasFactory;

      const venda = generateVendas({
        value: formatValueToSave(debit),
        cliente: cliente,
        estabelecimento,
        description,
        saleDate,
        isPaid,
      });

      const isSaved = persistData(venda);

      if (isSaved && !vendaParam) {
        clearFields();
      }

      isSaved &&
        alertWithConfirmButton({
          title: 'Venda salva',
          message: 'Venda salva com Sucess',
          confirmButtonHandler: () => goBack(),
        });

      !isSaved &&
        alert({
          title: 'Erro',
          message:
            'Erro ao salvar os dados verifique a conexão com a internet',
        });
    }
    setDisplayLoader(false);
  };

  const persistData = async venda => {
    if (vendaParam) {
      return await vendasService.update({...venda, id: vendaParam.id});
    }
    return await vendasService.store(venda);
  };

  const onSelectEstabelecimento = value => {
    setEstabelecimento(value);
    setDisplayModalEstabelecimento(false);
    setCliente('');
  };

  const onSelectClient = value => {
    setCliente(value);
    setDisplayClienteModal(false);
  };

  const validateBeforeSave = () => {
    const message = [];

    if (!debit) {
      message.push('- Favor preencher o valor da venda \n');
    }

    if (!saleDate) {
      message.push('- Favor informar a data que a venda foi realizada \n');
    }

    if (!cliente) {
      message.push('- Favor selecionar um cliente para cadastar a venda');
    }

    const isValid = message.length === 0;
    const concatMessage = message.join().replace(/,/g, '');

    if (!isValid) {
      alert({
        title: 'Campos em branco',
        message: concatMessage,
      });
    }

    return isValid;
  };

  const clearFields = () => {
    setSaleDate('');
    setDebit('');
    setDescription('');
    setEstabelecimento('');
    setCliente('');
    setIsPaid(false);
  };

  const formatValueToSave = value => {
    return value.replace(/,/g, '');
  };

  return (
    <Container>
      <AppBar title={title} showBackIcon={true} />
      <MainContainer>
        <FormItem iconName={IconsNames.Money}>
          <MaskedField
            mask={['9,99', '99,99', '999,99', '9999,99']}
            value={debit}
            placeholder="ex .: 50,00"
            onChange={value => setDebit(value)}
          />
        </FormItem>
        <FormItem
          placeHolder="clique para selecionar a data"
          iconName={IconsNames.Date}
          onContainerPress={getSaleDate}
          value={saleDate ? saleDate.toLocaleDateString() : ''}
          disabled={true}
        />
        <FormItem
          placeHolder="ex.: Enroladinho"
          iconName={IconsNames.Description}
          value={description}
          onChange={val => setDescription(val)}
        />
        <FormItem
          placeHolder="selecionar o estabelecimento"
          iconName={IconsNames.Estabelecimento}
          value={estabelecimento?.name}
          disabled={true}
          onContainerPress={() => setDisplayModalEstabelecimento(true)}
        />
        <FormItem
          placeHolder="selecionar um cliente"
          iconName={IconsNames.Clients}
          value={cliente?.name}
          disabled={true}
          onContainerPress={() => setDisplayClienteModal(true)}
        />

        <IsPaid isPaid={isPaid} onPress={setIsPaid} />
      </MainContainer>
      <ButtonContainer>
        <ConfirmButton title="Salvar" onPress={save} />
      </ButtonContainer>

      <SelecionarEstabelecimentoModal
        display={displayModalEstabelecimento}
        closePress={() => setDisplayModalEstabelecimento(false)}
        onSelectItem={onSelectEstabelecimento}
      />

      <SelecionarClienteModal
        display={displayClienteModal}
        closePress={() => setDisplayClienteModal(false)}
        onSelectItem={onSelectClient}
        estabelecimentoId={estabelecimento?.id}
      />
      <Loader display={displaLoader} />
    </Container>
  );
};

export default Index;
