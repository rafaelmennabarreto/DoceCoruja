import React from 'react';
import {Container} from './styles';
import {PlusIcon} from '../../Icons';
import Pallet from '../../pallet';

export default function FloatingButtom(props) {
  return (
    <>
      {props.display && (
        <Container {...props}>
          {props.children || (
            <PlusIcon size={48} color={Pallet.appBarTextColor} />
          )}
        </Container>
      )}
    </>
  );
}
