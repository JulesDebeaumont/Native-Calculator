import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Key } from './Key';

export function Memory() {
  return (
    <View style={styles.memory}>
      <Key texte="MS" />
      <Key texte="MC" />
      <Key texte="MR" />
    </View>
  );
}

const styles = StyleSheet.create({
  memory: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
});

export default Memory;
