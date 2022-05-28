import { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore"; 

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  async function signUp() {
    console.log("sign up");
    const auth = getAuth();
    const firestore = getFirestore();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        console.log(userCredential.user)
        addDoc(collection(firestore, "users"), {
          email: email,
          name: name
        }).then(() => {
          console.log("Document successfully written!");
        }).catch((error) => {
          console.error("Error writing document: ", error);
        })
      })
      .catch((error) => {
        console.log(error)
        // ..
      });
  }

  function signUpUsingGoogle() {
    console.log("sign up using google");
  }

  return (
    <View>
      <TextInput
        label="Name"
        value={name}
        onChangeText={text => setName(text)}
        autoCorrect={false}
      />
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
        <Button onPress={signUp}>Sign up</Button>
        <Button onPress={signUpUsingGoogle}>Sign in using Google</Button>
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
