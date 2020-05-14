import React from 'react';

import {Container} from './styles';
import LottieView from 'lottie-react-native';
import LoadImage from '~/assets/loader.json';
import propTypes from 'prop-types';

function Loader({display}) {
    return (
        (display && (
            <Container>
                <LottieView source={LoadImage} autoPlay loop />
            </Container>
        )) ||
        null
    );
}

Loader.propTypes = {
    display: propTypes.bool,
};

export default Loader;
