import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Pallet from '../../pallet';

const gradientPadding = 5;

export const Gradiente = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-left: ${gradientPadding};
  padding-right: ${gradientPadding};
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 36px;
  color: white;
`;
