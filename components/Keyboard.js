import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import Key from './Key';

export function Keyboard() {

    return (
        <View style={styles.keyboard}>
            <View style={styles.div}>
                <Key texte="7" />
                <Key texte="8" />
                <Key texte="9" />
                <Key texte="4" />
                <Key texte="5" />
                <Key texte="6" />
                <Key texte="1" />
                <Key texte="2" />
                <Key texte="3" />
                <Key texte="0" />
                <Key texte="AC" />
                <Key texte="C" />
            </View>

            <View style={styles.div}>
                <Key texte="%" />
                <Key texte="/" />
                <Key texte="X" />
                <Key texte="-" />
                <Key texte="+" />
                <Key texte="=" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    keyboard: {
        flexDirection: "column",
    },
    div: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: 20
    }
});

export default Keyboard;