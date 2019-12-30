import React from 'react';

import {Container, LabelField, ValueField} from './styles';
import DisplayMoney from '../../components/MaskMoney/displayMoney';

export default function InformationField({title, value}) {
  return (
    <>
      <Container>
        <LabelField>{title || ''}</LabelField>
        <ValueField>
          <DisplayMoney value={5} />
        </ValueField>
      </Container>
    </>
  );
}
