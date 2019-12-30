import styled from 'styled-components/native';
import Pallet from '../../pallet';

export const Container = styled.TouchableOpacity`
  height: ${props => props.height || 55};
  width: ${props => props.width || 55};
  position: absolute;
  justify-content: center;
  align-items: center;
  right: 13;
  bottom: ${props => props.bottom + 55 || 13};
  border-radius: 100px;
  background: ${props => props.color || Pallet.primaryColor};
  transform: ${props => `rotate(${props.rotation || 0}deg)`};
`;
