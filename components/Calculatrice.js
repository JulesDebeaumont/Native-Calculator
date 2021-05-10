import { StyleSheet, View } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Expression } from './Expression';
import { Keyboard } from './Keyboard';
import { Memory } from './Memory';
import { Title } from './Title';

export function Calculatrice() {
  return (
    <View>
      <View style={styles.bar}>
        <StatusBar style="light" />
        <Title title="Ma Calculatrice" />
      </View>
      <Expression expr="expression" />
      <Memory />
      <Keyboard />
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#707070',
  },
});

export default Calculatrice;
