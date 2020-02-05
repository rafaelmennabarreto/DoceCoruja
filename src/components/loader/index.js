import React from 'react';

import {Container} from './styles';
import LottieView from 'lottie-react-native';
import LoadImage from '~/assets/loader.json';
export default function Loader({display}) {
  return (
    (display && (
      <Container>
        <LottieView source={LoadImage} autoPlay loop />
      </Container>
    )) ||
    null
  );
}
