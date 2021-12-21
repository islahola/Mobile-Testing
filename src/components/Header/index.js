import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Header = () => {
  return (
    <View>
      <Text style={styles.text}>Kelompok 7</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text : {textAlign:'center', fontSize:21, marginTop:45,marginBottom:25, fontWeight:'bold'}
})

export default Header;
