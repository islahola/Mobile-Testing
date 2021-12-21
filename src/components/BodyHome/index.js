import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Button from '../Atom/Button';
import Card from '../Atom/Card';

const BodyHome = ({navigation}) => {
  return (
    <View>
      <Card />
      {/* <Button
        nama="lihat daftar list Buku"
        link={() => {
          navigation.navigate('Jurnal');
        }}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default BodyHome;
