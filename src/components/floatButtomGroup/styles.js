import styled from 'styled-components/native';

export const PillText = styled.Text`
  color: ${props => props.color || 'white'};
  font-weight: bold;
  padding-left: 8px;
`;
