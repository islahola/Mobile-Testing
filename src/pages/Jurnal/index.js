import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const Jurnal = ({navigation}) => {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const res = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          country: 'id',
          apiKey: '4f317f081f534f3b8004047ef047ff7c',
        },
      });
      console.log(res);
      setData(res.data.articles);
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      {/* {console.log(data)} */}
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          marginVertical: 20,
          textAlign: 'center',
        }}>
        {' '}
        Halaman Daftar Buku
      </Text>
      <ScrollView>
        {data &&
          data.map((item, i) => {
            return (
              <>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('DetailJurnal', {data: item})
                  }>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginHorizontal: 20,
                      marginVertical: 10,
                    }}>
                    <Image
                      style={{width: 100, height: 150}}
                      source={{uri: item.urlToImage}}
                    />
                    <Text style={{paddingHorizontal: 10, width: 280}}>
                      {item.title}
                    </Text>
                  </View>
                </TouchableOpacity>
              </>
            );
          })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Jurnal;

// 4f317f081f534f3b8004047ef047ff7c
