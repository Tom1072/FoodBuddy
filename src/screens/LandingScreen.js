import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useTheme, Button } from 'react-native-paper'

import QuestionScreen from './QuestionScreen';

export default function LandingScreen({ navigation }) {
  const theme = useTheme();
  return (
      <View style={styles.container}>
        <Button onPress={() => {navigation.navigate('LoginScreen')}}> Login </Button>
        <Button onPress={() => {navigation.navigate('RegisterScreen')}} > Register </Button>
        <Button onPress={() => {navigation.navigate('QuestionScreen')}} > Question </Button>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
