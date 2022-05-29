import { useState, useEffect } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { TextInput, Button } from "react-native-paper";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import TextField from "../components/TextField";
import { SectionTitle } from "../components/Typography";
import { useLoggedIn } from "../stores/generalStore";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const loggedIn = useLoggedIn();

  useEffect(() => {
    if (loggedIn) navigation.navigate("MainScreen");
    // console.log(route)
  }, []);

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
    // <ImageBackground source={require("../../assets/Group 27.png")} style={styles.container}>
    <ImageBackground source={require("../../assets/login_signup_bg.png")} style={styles.container}>
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
        color="rgba(0, 0, 0, 0.4)"
        uppercase={false}
      >
        <SectionTitle color="#fff" style={{ fontSize: 18, fontWeight: "700" }}>
          Login
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
    display: "flex",
    flexDirection: "row",
  },
  button: {
    marginVertical: 20,
    borderRadius: 70,
    marginBottom: 200
  },
});
