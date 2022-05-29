import { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
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
            navigation.navigate("QuestionScreen", { loggedIn: true });
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
    <ImageBackground source={require("../../assets/login_signup_bg.png")} style={styles.container}>
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
        color="rgba(0, 0, 0, 0.4)"
      >
        <SectionTitle color="#fff" style={{ fontSize: 17, fontWeight: "700" }}>
          Sign up
        </SectionTitle>
      </Button>
    </ImageBackground>
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
    borderRadius: 70,
    marginVertical: 20,
    marginBottom: 200
  },
});
