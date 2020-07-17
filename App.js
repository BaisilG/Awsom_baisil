import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image, SafeAreaView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Praise to God</Text>

      {/* <Image source={require("./assets/icon.png")}/> */}

      <Image source={{
        Text : 'my name is baisil',
        width: 100,
        height : 100,
        uri: 'https://reactnative.dev/img/tiny_logo.png',}} />
      
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
