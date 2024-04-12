import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from '../pages/Home';
import {NavigationContainer} from '@react-navigation/native';
import {NativeStackScreenProps, createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailPage from '../pages/DetailPage';
import { SafeAreaProvider } from 'react-native-safe-area-context';

type RootStackParamList = { 
  Home:undefined,
  Detail:undefined
}
const Stack = createNativeStackNavigator<RootStackParamList>();

export type HomeScreenParamProps = NativeStackScreenProps<RootStackParamList,"Home"> 
export type DetailScreenParamProps = NativeStackScreenProps<RootStackParamList,"Detail"> 

const App = () => {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={DetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
