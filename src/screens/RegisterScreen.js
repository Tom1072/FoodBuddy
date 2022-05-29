import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { SectionTitle } from "../components/Typography";

import TextField from "../components/TextField";

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
        console.log(userCredential.user);
        addDoc(collection(firestore, "users"), {
          email: email,
          name: name,
        })
          .then(() => {
            console.log("Document successfully written!");
            navigation.navigate("MainScreen", { loggedIn: true });
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      })
      .catch((error) => {
        console.log(error);
        // ..
      });
  }

  function signUpUsingGoogle() {
    console.log("sign up using google");
  }

  return (
    <View style={styles.container}>
      <TextField
        title="Name"
        placeholder="Name"
        onChange={(text) => setName(text)}
        value={name}
        autoCorrect={false}
      />
      <TextField
        title="Email"
        placeholder="Email"
        onChange={(text) => setEmail(text)}
        value={email}
        autoCorrect={false}
      />
      <TextField
        title="Password"
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={!showPassword}
        right={
          <TextInput.Icon
            name="eye"
            onPress={() => setShowPassword((curr) => !curr)}
          />
        }
      />
      <Button
        onPress={signUp}
        mode="contained"
        style={styles.button}
        uppercase={false}
        color="#6f92d9"
      >
        <SectionTitle color="#fff" style={{ fontSize: 15 }}>
          Sign up
        </SectionTitle>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 35,
    justifyContent: "center",
  },
  alternativeLayoutButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    marginVertical: 20,
  },
});
