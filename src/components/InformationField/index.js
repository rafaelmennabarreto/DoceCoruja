import React from 'react';
import {Container, LabelField, ValueField} from './styles';
// import DisplayMoney from '../../components/MaskMoney/displayMoney';
import DisplayMoney from '~/components/maskMoney/displayMoney';
export default function InformationField({title, value, isMonetary = false}) {
  return (
    <>
      <Container>
        <LabelField>{title || ''}</LabelField>
        <ValueField>
          {isMonetary ? <DisplayMoney value={value} /> : value}
        </ValueField>
      </Container>
    </>
  );
}
