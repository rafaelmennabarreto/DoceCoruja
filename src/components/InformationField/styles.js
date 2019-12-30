import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  border-left-color: black;
  border-left-width: 1px;
  border-right-color: black;
  border-right-width: 2px;
  border-bottom-color: black;
  border-bottom-width: 2px;
  padding: 2px 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const LabelField = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

export const ValueField = styled.Text``;
