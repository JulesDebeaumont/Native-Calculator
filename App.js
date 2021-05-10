import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Calculatrice } from './components/Calculatrice';

export default function App() {
  return (
    <View style={styles.container}>
      <Calculatrice />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: '#FFFFFF',
    flex: 1,
  },
});
