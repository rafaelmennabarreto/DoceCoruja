import styled from 'styled-components/native';
import Pallet from '../../pallet';

export const BaseButton = styled.TouchableOpacity`
  width: 50px;
  justify-content: center;
  align-items: center;
  background: ${prop => prop.color || Pallet.primaryColor};
`;
