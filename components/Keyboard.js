import { StyleSheet, View, Button } from 'react-native';
import React from 'react';

export function Keyboard() {

    return (
        <View style={styles.keyboard}>
            <View style={styles.nums}>
                <Button title="7" />
                <Button title="8" />
                <Button title="9" />
                <Button title="4" />
                <Button title="5" />
                <Button title="6" />
                <Button title="1" />
                <Button title="2" />
                <Button title="3" />
                <Button title="0" />
                <Button title="AC" />
                <Button title="C" />
            </View>

            <View style={styles.operators}>
                <Button title="%" />
                <Button title="/" />
                <Button title="X" />
                <Button title="-" />
                <Button title="+" />
                <Button title="=" />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    keyboard: {
        flexDirection: "column",
    },
    nums: {
        flexDirection: "row",
        flexWrap: "wrap",
        
    },
    operators: {
        marginTop: 10
    }
});

export default Keyboard;