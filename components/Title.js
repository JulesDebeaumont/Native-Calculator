import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

export function Title(props)
{
  // eslint-disable-next-line react/prop-types
    const { title } = props;

    return(
        <View style={styles.firstView}>
            <Text style={styles.titleText}>{title}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    firstView: {
      backgroundColor: "#e39612",
      width: "100%",
      padding: 15,
      marginTop: 25,
     },
    titleText: {
        color: "#FFFFFF",
        fontSize: 40,
        textAlign: "center"
    }
});

Title.defaultProps = {
    title: PropTypes.string,
  };

export default Title;