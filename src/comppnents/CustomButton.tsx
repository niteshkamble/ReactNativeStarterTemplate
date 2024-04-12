import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';

const CustomButton = ({navigation}:any) => {
  return (
    <TouchableOpacity
    style={styles.button}
      onPress={() => {
        navigation.navigate('Detail');
      }}>
      <Text style={styles.text}>GoTo Detail Page</Text>
      <Icon
          type="MaterialIcons"
          name="trending-flat"
          size={26}
          color='#fff'
          style={{marginHorizontal: 8}}
        />

    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    text:{color:'#FFF',fontWeight:'bold',letterSpacing:1.2},
  button:{flexDirection:"row",padding:16,alignItems:'center',justifyContent:'center',backgroundColor:'#1679AB',width:"50%",borderRadius:24}
})