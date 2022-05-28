import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-ui-lib/src/components/button';

export default function LandingScreen({ navigation }) {
  return (
      <View style={styles.container}>
        <Button
            title="Login"
            onPress={() => {navigation.navigate('LoginScreen')}} 
        />
        <Button
            title="Register"
            onPress={() => {navigation.navigate('RegisterScreen')}} 
        />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
