import {Alert} from 'react-native';

export const alert = ({title, message}) => Alert.alert(title, message);

export const alertWithConfirmButton = ({
  title,
  message,
  confirmButtonHandler,
}) => {
  Alert.alert(title, message, [
    {text: 'Confirmar', onPress: confirmButtonHandler},
  ]);
};
