import { StyleSheet, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

export function Key(props)
{
    const { texte, disabled } = props;

    return(
        <Text style={styles.item} >{texte}</Text>
    );
}

const styles = StyleSheet.create({
    item : {
        width: 130,
        textAlign: "center",
        fontSize: 20,
        borderColor: '#404040',
        borderWidth: 1,
        borderStyle: 'solid',
        color: "#404040",
    }
});

Key.defaultProps = {
    texte: PropTypes.string,
    disabled: PropTypes.bool,
  };

export default Key;