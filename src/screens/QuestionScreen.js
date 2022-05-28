import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TextInput } from "react-native-paper";
import TextField from "../components/TextField";

export default function QuestionScreen() {
  const [area, setArea] = React.useState("");

  return (
    <View style={styles.container}>
      <TextField
        title="Area"
        placeholder="Enter the area where you want to eat"
        value={area}
        onChange={(text) => setArea(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
  },

  title: {
    // fontSize: 20
  },

  textField: {
    backgroundColor: "#F0F5FF",
  },
});
