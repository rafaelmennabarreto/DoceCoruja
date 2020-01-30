import React, {useState} from 'react';
import {PanResponder, Dimensions} from 'react-native';
import propTypes from 'prop-types';
import {
  Container,
  OptionsContainer,
  OptionsCoverContainer,
  Text,
} from './styles';

const {width} = Dimensions.get('window');
const SwipeMenu = ({buttonComponent, detailsComponent}) => {
  const [clickPosition, setClickPosition] = useState(0);
  const [marginRight, setMarginRight] = useState(0);

  const _panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (event, gestureState) => true,
    onPanResponderMove: (event, gestureState) => {
      const position = clickPosition - gestureState.moveX;

      if (position < 5) {
        setMarginRight(0);
        return;
      }

      setMarginRight(position);
    },
    onPanResponderStart: (event, gestureState) => {
      console.log(event.nativeEvent.locationX);
      setClickPosition(event.nativeEvent.locationX);
    },
  });

  return (
    <Container {..._panResponder.panHandlers}>
      <OptionsCoverContainer style={{right: marginRight}}>
        {detailsComponent}
      </OptionsCoverContainer>
      <OptionsContainer>{buttonComponent}</OptionsContainer>
    </Container>
  );
};

SwipeMenu.propTypes = {
  buttonComponent: propTypes.element,
  detailsComponent: propTypes.element,
};

export default SwipeMenu;
