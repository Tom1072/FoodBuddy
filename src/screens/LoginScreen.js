import { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";

import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import TextField from "../components/TextField";
import { SectionTitle } from "../components/Typography";
import Divider from "../components/Divider";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function signIn() {
    console.log("sign in");
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential.user);
        navigation.navigate("QuestionScreen", { loggedIn: true });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <View style={styles.container}>
      <TextField
        title="Email"
        placeholder="Email"
        onChange={(text) => setEmail(text)}
        value={email}
        autoCapitalize={"none"}
        autoCorrect={false}
      />
      <TextField
        title="Password"
        placeholder="Password"
        onChange={(text) => setPassword(text)}
        value={password}
        secureTextEntry={!showPassword}
        right={
          <TextInput.Icon
            name={showPassword ? "eye" : "eye-off"}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />

      <Button
        onPress={signIn}
        mode="contained"
        style={styles.button}
        color="#6f92d9"
        uppercase={false}
      >
        <SectionTitle color="#fff" style={{ fontSize: 15 }}>
          Login
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
    display: "flex",
    flexDirection: "row",
  },
  button: {
    marginVertical: 20,
  },
});
