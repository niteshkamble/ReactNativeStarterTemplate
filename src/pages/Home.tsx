import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {HomeScreenParamProps} from '../app/App';
import CustomButton from '../comppnents/CustomButton';

const Home = ({navigation}: HomeScreenParamProps) => {
  return (
    <View style={styles.container}>
      <CustomButton navigation={navigation} />
    </View>
  );
};


export default Home;

const styles = StyleSheet.create({
  container:{flex:1,alignItems:'center',justifyContent:"center"},
  
});
