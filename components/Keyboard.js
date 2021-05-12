import { StyleSheet, View } from 'react-native';
import React, { useContext } from 'react';
import { Key } from './Key';
import { MyContext } from '../context/index';
import { addSymbol, compute, deleteAll, deleteSymbol } from '../actions';

export function Keyboard() {
  const { dispatch } = useContext(MyContext);

  return (
    <View style={styles.keyboard}>
      <View style={styles.div}>
        <Key texte="7" action={() => dispatch(addSymbol(7))} />
        <Key texte="8" action={() => dispatch(addSymbol(8))} />
        <Key texte="9" action={() => dispatch(addSymbol(9))} />
        <Key texte="4" action={() => dispatch(addSymbol(4))} />
        <Key texte="5" action={() => dispatch(addSymbol(5))} />
        <Key texte="6" action={() => dispatch(addSymbol(6))} />
        <Key texte="1" action={() => dispatch(addSymbol(1))} />
        <Key texte="2" action={() => dispatch(addSymbol(2))} />
        <Key texte="3" action={() => dispatch(addSymbol(3))} />
        <Key texte="0" action={() => dispatch(addSymbol(0))} />
        <Key texte="AC" action={() => dispatch(deleteSymbol())} />
        <Key texte="C" action={() => dispatch(deleteAll())} />
      </View>

      <View style={styles.div}>
        <Key texte="%" action={() => dispatch(addSymbol('%'))} />
        <Key texte="/" action={() => dispatch(addSymbol('/'))} />
        <Key texte="x" action={() => dispatch(addSymbol('x'))} />
        <Key texte="-" action={() => dispatch(addSymbol('-'))} />
        <Key texte="+" action={() => dispatch(addSymbol('+'))} />
        <Key texte="=" action={() => dispatch(compute())} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    flexDirection: 'column',
  },
  div: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default Keyboard;
