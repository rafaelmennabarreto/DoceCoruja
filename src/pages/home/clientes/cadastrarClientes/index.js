import React, {useState, useCallback, useContext} from 'react';
import {useFocusEffect, useNavigation} from 'react-navigation-hooks';
import {
    Container,
    ItemContainer,
    MainContainer,
    ButtonContainer,
} from './styles';
import ConfirmButton from '~/components/buttons';

import AppBar from '~/components/appBar';
import SelecionarEstabelecimentoModal from '~/components/selecionarEstabelecimentoModal';
import FormparamClient from '~/components/formItems';
import MaskedField from '~/components/maskedField';
import Loader from '~/components/loader';
import {IconsNames} from '~/Icons';

import clientFactory from '~/factory/clientFactory';
import {
    useDispatchOneClient,
    useDispatchUpdateOneClient,
} from '~/util/personHooks/clientHook';
import {alert} from '~/service/alertService';
import clientService from '~/service/clientService';
import estabelecimentoService from '~/service/estabelecimentoService';

export default function CadastrarEstabelecimentos() {
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [street, setStreet] = useState('');
    const [mail, setMail] = useState('');
    const [estabelecimento, setEstabelecimento] = useState('');
    const [screenTitle, setScreenTitle] = useState('');
    const [displayModal, setDisplayModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const {getParam} = useNavigation();
    const dispatchSaveClient = useDispatchOneClient();
    const dispatchUpdateOneClient = useDispatchUpdateOneClient();
    const paramClient = getParam('Cliente');

    const titleInit = useCallback(selectTitle, []);

    useFocusEffect(titleInit);

    function selectTitle() {
        if (paramClient) {
            setScreenTitle('Editar Cliente');
            loadItemData();
        } else {
            setScreenTitle('Cadastrar Cliente');
        }
    }

    async function loadItemData() {
        setIsLoading(true);
        setMail(paramClient.email);
        setName(paramClient.name);
        setPhone(paramClient.telefone);
        setStreet(paramClient.street);
        setNumber(paramClient.number);

        const savedEstabelecimento = await estabelecimentoService.getById(
            paramClient.idEstabelecimento,
        );

        if (savedEstabelecimento) setEstabelecimento(savedEstabelecimento);
        setIsLoading(false);
    }

    async function save() {
        setIsLoading(true);

        const clientCreated = clientFactory.generateClient({
            name: name,
            email: mail,
            telefone: phone,
            idEstabelecimento: estabelecimento.id,
            street,
            number,
        });

        const isUpdate = !!paramClient;

        const clientToSave = paramClient
            ? {...clientCreated, id: paramClient.id}
            : clientCreated;

        persisData(clientToSave, isUpdate);
        setIsLoading(false);
    }

    async function persisData(clientToSave, isUpdate) {
        if (isUpdate) {
            console.log('atualizou');
            await clientService.update(clientToSave);
            dispatchUpdateOneClient(clientToSave);
        }

        if (!isUpdate) {
            console.log('salvou novo');
            const savedClient = await clientService.store(clientToSave);
            dispatchSaveClient(savedClient);
            cleanFields();
        }
    }

    function onSelectEstabelecimento(value) {
        setEstabelecimento(value);
        setDisplayModal(false);
    }

    function cleanFields() {
        setPhone('');
        setStreet('');
        setName('');
        setNumber('');
        setMail('');
        setEstabelecimento('');
    }

    return (
        <Container>
            <AppBar title={screenTitle} showBackIcon={true} />
            <MainContainer>
                <ItemContainer>
                    <FormparamClient
                        value={name}
                        iconName={IconsNames.User}
                        placeHolder="ex .: João Pedro"
                        onChange={text => setName(text)}
                    />
                    <FormparamClient iconName={IconsNames.Phone}>
                        <MaskedField
                            value={phone}
                            mask={['(99)99999-9999', '(99)9999-9999']}
                            placeholder="ex .: (51)99999-9999"
                            onChange={text => setPhone(text)}
                        />
                    </FormparamClient>

                    <FormparamClient
                        value={street}
                        iconName={IconsNames.Location}
                        placeHolder="ex .: Dorival candido de oliveira"
                        onChange={text => setStreet(text)}
                    />

                    <FormparamClient
                        value={number}
                        iconName={IconsNames.Number}
                        placeHolder="ex.: 1070"
                        keyboardType="numeric"
                        onChange={text => setNumber(text)}
                    />

                    <FormparamClient
                        value={mail}
                        iconName={IconsNames.Mail}
                        placeHolder="ex.: cliente@gmail.com"
                        onChange={text => setMail(text)}
                    />

                    <FormparamClient
                        value={estabelecimento?.name}
                        iconName={IconsNames.Estabelecimento}
                        placeHolder="Selecione um estabelecimento"
                        keyboardType="numeric"
                        disabled={true}
                        onContainerPress={() => setDisplayModal(true)}
                    />
                </ItemContainer>
            </MainContainer>
            <ButtonContainer>
                <ConfirmButton title="Salvar" onPress={save} />
            </ButtonContainer>
            <SelecionarEstabelecimentoModal
                display={displayModal}
                closePress={() => setDisplayModal(false)}
                onSelectItem={onSelectEstabelecimento}
            />
            <Loader display={isLoading} />
        </Container>
    );
}
