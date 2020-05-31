import styled from 'styled-components/native';
import Config from '../../config/systemConfig';
import {Dimensions} from 'react-native';

const {height: WindowHeight} = Dimensions.get('window');

export const Container = styled.View`
  width: 100%;
  padding: 12px 2px;
  border-bottom-width: 1px;
`;

export const ButtonContainer = styled.View`
  flex-direction: column;
  height: 160px;
  justify-content: space-between;
`;

export const CustomModal = styled.Modal``;

export const CustomText = styled.Text`
  font-size: ${Config.fontSize};
  font-weight: 900;
`;

export const CustomTextModal = styled.Text`
  font-size: 26px;
  font-weight: 900;
`;
export const ModalContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  height: ${WindowHeight};
  background: rgba(0, 0, 0, 0.6);
`;

export const ModalItemContainer = styled.View`
  flex-direction: column;
  background: white;
  justify-content: space-between;
  min-height: ${WindowHeight * 0.35};
  border-radius: 10px;
  z-index: 15;
`;

export const CloseButtonContainer = styled.TouchableOpacity`
  position: absolute;
  right: -1;
  top: -6;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 30px;
  background: black;
`;
