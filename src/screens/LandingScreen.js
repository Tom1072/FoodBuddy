import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { Button } from "react-native-paper";
import { SectionTitle } from "../components/Typography";

import QuestionScreen from './QuestionScreen';

export default function LandingScreen({ navigation }) {
  // const theme = useTheme();

  return (
    <ImageBackground
      source={require("../../assets/login_signup_bg.png")}
      style={styles.container}
    >
      <Button
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
        mode="contained"
        style={styles.button}
        uppercase={false}
        color="rgba(255, 255, 255, 0.7)"
      >
        <SectionTitle color="#380e45" style={{ fontSize: 18, fontWeight: "900" }}>
          Login
        </SectionTitle>
      </Button>
      <Button
        onPress={() => {
          navigation.navigate("RegisterScreen");
        }}
        mode="contained"
        color="rgba(255, 255, 255, 0.7)"
        style={styles.button}
        uppercase={false}
      >
        <SectionTitle color="#380e45" style={{ fontSize: 18, fontWeight: "900" }}>
          Sign up 
        </SectionTitle>
      </Button>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 200,
  },
  button: {
    marginVertical: 20,
    borderRadius: 70,
    width: 200
  },
});
