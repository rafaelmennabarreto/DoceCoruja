import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import Pallet from '~/pallet';
import propTypes from 'prop-types';

function CancelButton({Title, onPress}) {
    return (
        <TouchableOpacity style={styles.touchable} onPress={onPress || null}>
            <View style={styles.container}>
                <Text style={styles.text}>{Title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    touchable: {
        height: 50,
        width: '100%',
    },
    container: {
        flex: 1,
        backgroundColor: Pallet.red700,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
});

CancelButton.propTypes = {
    title: propTypes.string.isRequired,
    onPress: propTypes.func,
};

export default CancelButton;
