import styled from 'styled-components/native';
import Gradient from 'react-native-linear-gradient';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Text = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const UserData = styled(Gradient)`
  justify-content: space-evenly;
  padding-left: 12px;
  height: 150px;
`;

export const UserImage = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 40;
`;
