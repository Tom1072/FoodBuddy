import { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function signIn() {
    console.log("sign in");
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        console.log(userCredential.user)
      })
      .catch((error) => {
        console.log(error)
      });
  }

  function signInUsingGoogle() {
    console.log("sign in using google");
  }

  return (
    <View>
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        autoCapitalize={'none'}
        autoCorrect={false}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={!showPassword}
        right={
          <TextInput.Icon
            name="eye"
            onPress={() => setShowPassword(curr => !curr)}
          />
        }
      />
      <View style={styles.alternativeLayoutButtonContainer}>
        <Button onPress={signIn}>Sign in</Button>
        <Button onPress={signInUsingGoogle}>Sign in using Google</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alternativeLayoutButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});
