import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Uin from '../../../asset/image/banner.jpg';

const Card = () => {
  return (
    <View style={styles.container}>
      <Image source={Uin} style={styles.image} />
      <Text style={styles.textSmall}>Tranding Collection</Text>
      <Text style={styles.textHeader}>Pilih Artikel Terbaru Kalian</Text>
      <Text style={styles.textDesc}>
        Segera pilih Artikel pilihan Kalian sebelum kehabisan dan stok terbatas
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  image: {width: 261, height: 220},
  textSmall: {fontSize: 14, paddingVertical: 10},
  textDesc: {
    fontSize: 14,
    paddingVertical: 10,
    width: 243,
    textAlign: 'center',
  },
  textHeader: {
    fontSize: 24,
    color: '#A24032',
    fontWeight: 'bold',
    width: 185,
    textAlign: 'center',
  },
});

export default Card;
