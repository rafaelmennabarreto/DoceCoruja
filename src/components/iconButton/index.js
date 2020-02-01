import React from 'react';
import {BaseButton} from './styles';
import proptypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

function GenerateIcon({name, iconColor}) {
  return <Icon name={name} size={36} color={iconColor} />;
}

const IconButton = ({iconName, color, iconColor, onPress}) => {
  return (
    <BaseButton color={color} onPress={onPress}>
      <GenerateIcon name={iconName} iconColor={iconColor} />
    </BaseButton>
  );
};

IconButton.propTypes = {
  iconName: proptypes.string,
  color: proptypes.string,
  iconColor: proptypes.string,
  onPress: proptypes.func,
};

export default IconButton;
