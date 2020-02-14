import styled from 'styled-components/native';
import Config from '../../config/systemConfig';

export const Container = styled.View`
  width: 100%;
  padding: 10px;
  border-bottom-width: 1px;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const Text = styled.Text`
  font-size: ${Config.fontSize};
  font-weight: 900;
`;
