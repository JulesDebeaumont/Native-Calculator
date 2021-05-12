import { StyleSheet, View, Text } from 'react-native';
import React, { useContext } from 'react';
import { MyContext } from '../context/index';

export function Expression() {
  // eslint-disable-next-line react/prop-types
  const { state } = useContext(MyContext);

  return (
    <View style={styles.expressionView}>
      <Text style={styles.expressionText}>expr: {state.expression} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  expressionView: {
    backgroundColor: '#d0d0d0',
    padding: 10,
  },
  expressionText: {
    color: '#505050',
    textAlign: 'left',
    fontSize: 20,
  },
});

export default Expression;
