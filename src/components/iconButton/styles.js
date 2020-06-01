import styled from 'styled-components/native';
import Pallet from '../../pallet';

export const BaseButton = styled.TouchableOpacity`
  flex-direction: row;
  padding: 7px 5px;
  align-items: flex-end;
  background: ${prop => prop.color || Pallet.primaryColor};
`;
