import { StyleSheet, View } from 'react-native';
import React, { useReducer } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Expression } from './Expression';
import { Keyboard } from './Keyboard';
import { Memory } from './Memory';
import { Title } from './Title';
import reducer, { defaultState } from '../reducer/index';
import { MyContext } from '../context/index';

export function Calculatrice() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <View>
        <View style={styles.bar}>
          <StatusBar style="light" />
          <Title title="Ma Calculatrice" />
        </View>
        <Expression />
        <Memory />
        <Keyboard />
      </View>
    </MyContext.Provider>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#707070',
  },
});

export default Calculatrice;
