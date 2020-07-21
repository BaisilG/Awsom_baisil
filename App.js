import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image, Alert, SafeAreaView, Button} from 'react-native';

export default function App() {
  return (


    <SafeAreaView style={containerStyle}>
      
      <Button 
      color = "orange"
      title="Click Me" onPress = {() => 
      
      Alert.prompt("Title", "My message is ", (text)=> console.log(text)) 
    
    }  
      />

    </SafeAreaView>
  );
}

const containerStyle = {backtoudcolor:"orange"};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blanchedalmond',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
