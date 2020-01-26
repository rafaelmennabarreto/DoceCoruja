import {Alert} from 'react-native';

export const alert = ({title, message}) => Alert.alert(title, message);

export const alertWithConfirmButton = ({
  titlte,
  message,
  confirmButtonHandler,
}) => {
  Alert.alert(titlte, message, [
    {text: 'Confirmar', onPress: confirmButtonHandler},
  ]);
};
