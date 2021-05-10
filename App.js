import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Calculatrice from './components/Calculatrice';
import Title from './components/Title';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <StatusBar style="light" />
        <Title title="Ma Calculatrice" />
      </View>
      <View >
        <Calculatrice />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: '#FFFFFF',
    flex: 1,
  },
  bar: {
    backgroundColor: '#707070',
  }
});
