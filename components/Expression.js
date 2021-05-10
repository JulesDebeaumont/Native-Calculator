import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

export function Expression(props) {
  // eslint-disable-next-line react/prop-types
  const { expr } = props;

  return (
    <View style={styles.expressionView}>
      <Text style={styles.expressionText}>expr: {expr} </Text>
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

Expression.defaultProps = {
  expr: PropTypes.string,
};

export default Expression;
