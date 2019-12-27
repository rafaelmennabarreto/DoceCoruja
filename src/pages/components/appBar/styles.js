import styled from 'styled-components/native';
import pallet from '../../pallet';

export const Container = styled.View`
  height: 55px;
  flex-direction: row;
  align-items: center;
  background: ${pallet.primaryColor};
`;

export const Text = styled.Text`
  flex: 1;
  font-size: 22;
  font-weight: bold;
  text-align: ${props => props.textAlign || 'left'};
  color: ${pallet.appBarTextColor};
`;
