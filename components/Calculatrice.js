import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { Expression } from './Expression';
import { Keyboard } from './Keyboard';
import { Memory } from './Memory';

export function Calculatrice() {
  return (
    <View>
      <Expression expr="expression" />
      <Memory />
      <Keyboard />
    </View>
  );
}

export default Calculatrice;
