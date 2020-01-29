import React, {useState} from 'react';
import {PanResponder, Dimensions} from 'react-native';
import {
  Container,
  OptionsContainer,
  OptionsCoverContainer,
  Text,
} from './styles';

export default function SwipeMenu() {
  const {width} = Dimensions.get('window');
  const [marginRight, setMarginRight] = useState(0);

  const _panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (event, gestureState) => true,
    onPanResponderMove: (event, gestureState) => {
      setMarginRight(width - gestureState.moveX);
    },
  });

  return (
    <Container {..._panResponder.panHandlers}>
      <OptionsContainer>
        <Text>oi meu chapa</Text>
      </OptionsContainer>
      <OptionsCoverContainer style={{right: marginRight}}>
        <Text>oi meu chapa</Text>
      </OptionsCoverContainer>
    </Container>
  );
}
