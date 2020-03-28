import styled from 'styled-components/native';

export const ModalContainer = styled.Modal`
  background: black;
  justify-content: space-around;
`;

export const ItemContainer = styled.ScrollView`
  flex: 1;
`;

export const ModalItem = styled.TouchableOpacity`
  padding: 10px 5px;
  border-bottom-width: 1px;
`;

export const CloseButton = styled.Button`
  height: 60px;
`;
