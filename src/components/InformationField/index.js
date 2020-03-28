import React from 'react';
import {Container, LabelField, ValueField} from './styles';
import propTypes from 'prop-types';

import DisplayMoney from '~/components/MaskMoney/displayMoney';
const InformationField = ({title, value, isMonetary = false}) => {
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
};

InformationField.propType = {
  title: propTypes.string,
  value: propTypes.number,
  isMonetary: propTypes.bool,
};

export default InformationField;
