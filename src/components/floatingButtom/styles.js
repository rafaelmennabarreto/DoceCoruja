import styled from 'styled-components/native';
import Pallet from '../../pallet';

export const Container = styled.TouchableOpacity`
  height: ${props => props.height || 60};
  width: ${props => props.width || 60};
  position: absolute;
  justify-content: center;
  align-items: center;
  right: 15;
  bottom: ${props => props.bottom + 60 || 15};
  border-radius: 100px;
  background: ${Pallet.primaryColor};
  transform: ${props => `rotate(${props.rotation || 0}deg)`};
`;
