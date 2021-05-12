import { StyleSheet, View } from 'react-native';
import React, { useContext } from 'react';
import { Key } from './Key';
import { MyContext } from '../context/index';
import { memoryClear, memoryRestore, memoryStore } from '../actions';

export function Memory() {
  const { state, dispatch } = useContext(MyContext);

  return (
    <View style={styles.memory}>
      <Key texte="MS" action={() => dispatch(memoryStore(state.expression))} />
      <Key texte="MC" disabled={state.memory !== null} action={() => dispatch(memoryClear())} />
      <Key texte="MR" disabled={state.memory !== null} action={() => dispatch(memoryRestore())} />
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
