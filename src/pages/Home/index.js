import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Button} from 'react-native';
import BodyHome from '../../components/BodyHome';
import Header from '../../components/Header';

const Home = ({navigation}) => {
  const moveJurnal = () => {
    navigation.navigate('Jurnal');
  };
  return (
    <View>
      <Header />
      <BodyHome />
      <View style={{alignItems: 'center'}}>
        {/* <Button >Lihat List buku</Button> */}
        <TouchableOpacity testID="home-btn" onPress={moveJurnal}>
          <View style={styles.button}>
            <Text style={styles.text}>Lihat List Buku</Text>
          </View>
        </TouchableOpacity>
      </View>
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

export default Home;
