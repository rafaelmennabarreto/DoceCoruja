import React from 'react';
import propTypes from 'prop-types';
import {StyleSheet, Text} from 'react-native';
import {Container, PaidButton, NotPaidButton} from './styles';
import Pallet from '~/pallet';

const styles = StyleSheet.create({
  paid: {
    backgroundColor: Pallet.green500,
  },
  noPaid: {
    backgroundColor: Pallet.red700,
  },
});

const IsPaid = ({onPress, isPaid}) => {
  const toogle = isPaidSelect => {
    onPress && onPress(isPaidSelect);
  };

  return (
    <Container>
      <PaidButton
        onPress={() => toogle(true)}
        style={isPaid ? styles.paid : null}>
        <Text> Pago </Text>
      </PaidButton>

      <NotPaidButton
        onPress={() => toogle(false)}
        style={isPaid === false ? styles.noPaid : null}>
        <Text>Não Pago</Text>
      </NotPaidButton>
    </Container>
  );
};

IsPaid.propTypes = {
  onPress: propTypes.func,
  isPaid: propTypes.bool,
};

export default IsPaid;
