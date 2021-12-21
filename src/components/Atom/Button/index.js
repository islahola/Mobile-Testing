import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = props => {
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity onPress={props.link}>
        <View style={styles.button}>
          <Text style={styles.text}>{props.nama}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {color: 'white', fontSize: 14},
  button: {
    backgroundColor: '#A24032',
    justifyContent: 'center',
    borderRadius: 30,
    width: 178,
    height: 28,
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Button;
