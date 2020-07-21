import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image, SafeAreaView, Button} from 'react-native';

export default function App() {
  return (


    <SafeAreaView style={styles.container}>
      
      <Button 
      color = "green"
      alignItems = "top"
    justifyContent = "middle"

      title="Click Me" onPress = {() => alert (" You have tapped the button")}/>

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
