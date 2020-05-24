import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
`;

const BaseButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  padding: 10px 0px;
  border-width: 1px;
  border-radius: 5px;
`;

export const PaidButton = styled(BaseButton)`
  width: 90%;
`;

export const NotPaidButton = styled(BaseButton)`
  margin-left: 5px;
`;
