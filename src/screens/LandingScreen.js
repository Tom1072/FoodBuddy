import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export default function LandingScreen({ navigation }) {
  return (
      <View style={styles.container}>
        <Text>Landing Screen</Text>
        <Button
            title="Login"
            onPress={() => {navigation.navigate('LoginScreen')}} 
        />
        <Button
            title="Register"
            onPress={() => {navigation.navigate('RegisterScreen')}} 
        />
        <Button
            title="Main"
            onPress={() => {navigation.navigate('MainScreen')}} 
        />
        <Button
            title="Question"
            onPress={() => {navigation.navigate('QuestionScreen')}} 
        />
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
