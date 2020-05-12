import React, {useState} from 'react';
import {Container, MainContainer, ButtonContainer} from './styles';

import AppBar from '~/components/appBar';
import FormItem from '~/components/formItems';
import MaskedField from '~/components/maskedField';
import {DatePicker} from '~/components/datePicker';
import ConfirmButton from '~/components/buttons';
import SelecionarEstabelecimentoModal from '~/components/selecionarEstabelecimentoModal';
import SelecionarClienteModal from '~/components/selecionarClienteModal';
import Loader from '~/components/loader';

import {alert} from '~/service/alertService';
import vendasFactory from '~/factory/vendasFactory';
import {IconsNames} from '~/Icons';

import VendasService from '~/service/vendasService';
import vendasService from '~/service/vendasService';
const Index = () => {
    const [debit, setDebit] = useState(0);
    const [saleDate, setSaleDate] = useState();
    const [estabelecimento, setEstabelecimento] = useState();
    const [description, setDescription] = useState('');
    const [displaLoader, setDisplaLoader] = useState(false);
    const [
        displayModalEstabelecimento,
        setDisplayModalEstabelecimento,
    ] = useState(false);
    const [cliente, setCliente] = useState();
    const [displayClienteModal, setDisplayClienteModal] = useState(false);

    const getSaleDate = async () => {
        const date = await DatePicker();
        setSaleDate(date);
    };

    const save = async () => {
        setDisplaLoader(true);

        if (validateBeforeSave()) {
            const {generateVendas} = vendasFactory;

            const venda = generateVendas({
                value: formatValueToSave(debit),
                cliente: cliente,
                estabelecimento,
                saleDate,
            });

            console.log(venda);

            const isSaved = await vendasService.store(venda);

            isSaved
                ? clearFields()
                : alert({
                      title: 'Erro',
                      message:
                          'Erro ao salvar os dados verifique a conexão com a internet',
                  });
        }

        setDisplaLoader(false);
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
            message.push(
                '- Favor informar a data que a venda foi realizada \n',
            );
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
    };

    const formatValueToSave = value => {
        return value.replace(/,/g, '');
    };

    return (
        <Container>
            <AppBar title="Cadastrar Venda" showBackIcon={true} />
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
                    onContainerPress={() =>
                        setDisplayModalEstabelecimento(true)
                    }
                />
                <FormItem
                    placeHolder="selecionar um cliente"
                    iconName={IconsNames.Clients}
                    value={cliente?.name}
                    disabled={true}
                    onContainerPress={() => setDisplayClienteModal(true)}
                />
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
