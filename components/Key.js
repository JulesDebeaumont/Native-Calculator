import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

export function Key(props) {
  // eslint-disable-next-line react/prop-types
  const { texte, disabled = false, action } = props;

  return (
    <TouchableOpacity style={styles.item} disabled={disabled === false} onPress={action}>
      <Text style={[styles.text, disabled === false ? null : styles.enabled]}>{texte}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    width: 130,
    textAlign: 'center',
    borderColor: '#404040',
    borderWidth: 1,
    borderStyle: 'solid',
    color: '#404040',
    alignItems: 'center',
  },
  text: {
    fontSize: 23,
  },
  disabled: {
    color: '#F0F0F0',
  },
  enabled: {
    color: '#101010',
  }
});

Key.defaultProps = {
  texte: PropTypes.string,
  disabled: PropTypes.bool,
  action: PropTypes.func,
};

export default Key;
