import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image, Alert, SafeAreaView, Button} from 'react-native';

export default function App() {
  return (


    <SafeAreaView style={styles.container}>
      
      <Button 
      color = "green"
      alignItems = "top"
    justifyContent = "middle"

      title="Click Me" onPress = {() => 
      
      Alert.alert ("Are you Intrested with this app?", "Please put your Answers Yes/No", [
        {text: "yes",onPress:() => Alert(" this is mentioned", "You clicked Yes")},
        {text: "No" ,onPress: ()=> Alert("yes", " You clicked No")},
      ])}/>

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
