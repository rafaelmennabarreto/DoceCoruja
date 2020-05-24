import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {useNavigation} from 'react-navigation-hooks';
import {Container, Text} from './styles';
import {BackIcon, MenuIcon} from '../../Icons';

const AppBar = props => {
  const {toggleDrawer, goBack, navigate} = useNavigation();

  return (
    <Container style={styles.boxShadow}>
      {props.showBackIcon && <BackIcon {...props} onPress={() => goBack()} />}
      {props.showMenuIcon && <MenuIcon {...props} onPress={toggleDrawer} />}
      {props.children || (
        <Text textAlign={props.textAlign}> {props.title} </Text>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 6,
  },
});

AppBar.propTypes = {
  title: PropTypes.string.isRequired,
  textAlign: PropTypes.string,
  showMenuIcon: PropTypes.bool,
  showBackIcon: PropTypes.bool,
};

export default AppBar;
