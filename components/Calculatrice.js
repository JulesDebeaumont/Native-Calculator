import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import Expression from './Expression';
import Keyboard from './Keyboard';

export function Calculatrice()
{

    return(
        <View>
            <Expression expr = "expression"/>
            <Keyboard />
        </View>
    );
}


const styles = StyleSheet.create({
    firstView: {
      
     }
});

export default Calculatrice;