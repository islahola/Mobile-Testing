import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';

const DetailJurnal = ({route, navigation}) => {
  const {width, height} = Dimensions.get('window');
  return (
    <View>
      <Image
        source={{uri: route.params.data.urlToImage}}
        style={{width: width, height: width}}
      />
      <Text style={{margin: 10, fontSize: 20, fontWeight: 'bold'}}>
        {route.params.data.title}
      </Text>
      <Text style={{marginHorizontal: 10}}>{route.params.data.author}</Text>
      <Text style={{marginHorizontal: 10}}>{route.params.data.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DetailJurnal;
