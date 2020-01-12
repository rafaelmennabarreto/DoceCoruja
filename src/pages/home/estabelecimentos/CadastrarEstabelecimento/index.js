import React, {useState} from 'react';
import {Container, ItemContainer} from './styles';

import AppBar from '../../../../components/appBar';
import FormItem from '../../../../components/formItems';
import MaskedField from '../../../../components/maskedField';
import {IconsNames} from '../../../../Icons';

export default function CadastrarEstabelecimentos() {
  const [phone, setPhone] = useState('');

  return (
    <Container>
      <AppBar title="Cadastrar Estabelecimento" showBackIcon={true} />
      <ItemContainer>
        <FormItem
          iconName={IconsNames.Estabelecimento}
          placeHolder="Nome do estabelecimento"
        />
        <FormItem iconName={IconsNames.Phone}>
          <MaskedField
            placeHolder="oi meu chapa"
            mask="(99)99999-9999"
            placeholder="(51)99999-9999"
          />
        </FormItem>
      </ItemContainer>
    </Container>
  );
}
