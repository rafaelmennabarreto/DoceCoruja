import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const padding = '10px';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  padding-bottom: 15px;
  align-items: center;
`;

export const MainContainer = styled.ScrollView`
  height: 100%;
  padding-left: 10px;
  max-width: ${width};
  padding-right: ${padding};
`;

export const ItemContainer = styled.KeyboardAvoidingView``;

export const ButtonContainer = styled.View`
  width: ${width};
  padding: 0px ${padding};
`;
