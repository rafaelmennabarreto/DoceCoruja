import React from 'react';
import {BaseButton} from './styles';
import {Text} from 'react-native';
import proptypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

function GenerateIcon({name, iconColor}) {
  return <Icon name={name} size={36} color={iconColor} style={{width: 50}} />;
}

const IconButton = ({iconName, color, iconColor, onPress, text}) => {
  return (
    <BaseButton color={color} onPress={onPress}>
      <GenerateIcon name={iconName} iconColor={iconColor} />
      <Text style={{marginLeft: 8, fontSize: 24}}>{text}</Text>
    </BaseButton>
  );
};

IconButton.propTypes = {
  iconName: proptypes.string,
  color: proptypes.string,
  text: proptypes.string,
  iconColor: proptypes.string,
  onPress: proptypes.func,
};

export default IconButton;
