import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Jurnal from '../pages/Jurnal';
import DetailJurnal from '../pages/DetailJurnal';

const Stack = createNativeStackNavigator();

function Navigasi() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Jurnal" component={Jurnal} />
        <Stack.Screen name="DetailJurnal" component={DetailJurnal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigasi;
