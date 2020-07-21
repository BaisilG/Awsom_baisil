import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image, Alert, SafeAreaView, Platform, Button} from 'react-native';

export default function App() {
  return (


    <SafeAreaView style={[styles.container, containerStyle]}>
      
      <Button 
      title="Click Me" onPress = {() => 
      
      Alert.prompt("Title", "My message is ", (text)=> console.log(text)) 
    
    }  
      />

    </SafeAreaView>
  );
}
const containerStyle = {backgroundColor: "tomato"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blanchedalmond',
    paddingTop : Platform.OS === "android" ? 30 : 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
