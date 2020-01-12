import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Input} from 'react-native-elements';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 15px;
`;

export const FormIcon = styled(Icon)`
  min-width: 20px;
  font-size: 38px;
`;

export const FormInput = styled(Input)`
  flex: 1;
`;
