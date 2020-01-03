import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Pallet from '../../pallet';

const gradientPadding = 5;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Label = styled.Text`
  flex: 1;
  color: white;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  background: ${Pallet.googleButtonColor};
  align-items: center;
  border-radius: 5px;
  flex-direction: row;
  padding: 5px 10px;
  border: 1px black;
`;

export const Gradiente = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
  padding-left: ${gradientPadding};
  padding-right: ${gradientPadding};
`;
