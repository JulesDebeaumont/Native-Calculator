import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { MyContext } from '../context/index';
import { shuffleColors } from '../actions';

export function Title(props) {
  // eslint-disable-next-line react/prop-types
  const { title } = props;
  const { state, dispatch } = useContext(MyContext);
  const bgStyle = StyleSheet.create({
    bg: {
      backgroundColor: state.color,
    },
  });

  return (
    <TouchableOpacity style={[styles.firstView, bgStyle.bg]} onPress={() => dispatch(shuffleColors())}>
      <Text style={styles.titleText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  firstView: {
    width: '100%',
    padding: 15,
    marginTop: 25,
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 40,
    textAlign: 'center',
  },
});

Title.defaultProps = {
  title: PropTypes.string,
};

export default Title;
