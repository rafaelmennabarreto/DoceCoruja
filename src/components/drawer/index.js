import React from 'react';
import {DrawerItems} from 'react-navigation-drawer';
import {useSelector} from 'react-redux';
import {Container, UserData, UserImage, Text} from './styles';
import Pallet from '../../pallet';

import DefaultUserImage from '~/assets/noProfileImage.jpg';

const Drawer = props => {
  const user = useSelector(state => state.User);

  return (
    <Container>
      <UserData colors={[Pallet.primaryColor, Pallet.ligthBlue]}>
        {user.photoUrl ? (
          <UserImage source={{uri: user.photoUrl}} resizeMethod="resize" />
        ) : (
          <UserImage source={DefaultUserImage} resizeMethod="resize" />
        )}
        <Text>{user.name}</Text>
      </UserData>
      <DrawerItems {...props} activeTintColor={Pallet.primaryColor} />
    </Container>
  );
};

export default Drawer;
