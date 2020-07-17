import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image, SafeAreaView} from 'react-native';

export default function App() {
  return (


    <SafeAreaView style={styles.container}>
      <Text>Praise to God</Text>
      {/* <Image source={require("./assets/icon.png")}/> */}
     <Image 

      blurRadius = {0.1}
      fadeDuration = {4000}
      source={{        
        width: 100,
        height : 100,
        uri: 'https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',}} />
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blanchedalmond',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
