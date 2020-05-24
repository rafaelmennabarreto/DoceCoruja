import React, {useState, useRef} from 'react';
import {PanResponder, Dimensions, TouchableOpacity} from 'react-native';
import propTypes from 'prop-types';
import {
  Container,
  OptionsContainer,
  OptionsCoverContainer,
  Text,
  ButtonContainer,
} from './styles';

const {width} = Dimensions.get('window');
const SwipeMenu = ({buttonComponent, detailsComponent, onTextClick}) => {
  const [clickPosition, setClickPosition] = useState(0);
  const [marginRight, setMarginRight] = useState(0);
  const [maxSize, setMaxSize] = useState(width);
  const [allowClick, setAllowClick] = useState(true);

  const _panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (event, gestureState) => true,
    onPanResponderMove: (event, gestureState) => {
      const position = clickPosition - gestureState.moveX;

      if (position >= maxSize) {
        return;
      }

      if (position < 5) {
        setMarginRight(0);
        return;
      }

      setAllowClick(false);
      setMarginRight(position);
    },
    onPanResponderStart: (event, gestureState) => {
      setClickPosition(event.nativeEvent.locationX);
    },
    onPanResponderEnd: (event, gestureState) => {
      const midiunSize = maxSize / 2;

      if (marginRight >= midiunSize) {
        setMarginRight(maxSize);
        return;
      }

      setAllowClick(true);
      setMarginRight(0);
    },
  });

  const onPress = () => {
    if (allowClick) {
      onTextClick && onTextClick();
    }
  };

  return (
    <Container {..._panResponder.panHandlers}>
      <OptionsCoverContainer style={{right: marginRight}} onTouchEnd={onPress}>
        {detailsComponent}
      </OptionsCoverContainer>
      <OptionsContainer>
        <ButtonContainer
          onLayout={event => setMaxSize(event.nativeEvent.layout.width)}>
          {buttonComponent}
        </ButtonContainer>
      </OptionsContainer>
    </Container>
  );
};

SwipeMenu.propTypes = {
  buttonComponent: propTypes.element,
  detailsComponent: propTypes.element,
  onTextClick: propTypes.func,
};

export default SwipeMenu;
