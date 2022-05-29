import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TextInput } from "react-native-paper";
import { SectionTitle } from "./Typography";

export default function TextField(props) {
  const { title, value, onChange, placeholder, ...others } = props;

  return (
    <View style={styles.container}>
      <View style={{ width: "100%", alignItems: "center", marginVertical: 5}}>
        <SectionTitle style={{ fontWeight: "700", color: "white"}}>{title}</SectionTitle>
      </View>
      <TextInput
        dense
        mode="outlined"
        placeholder={placeholder}
        value={value}
        style={styles.textField}
        outlineColor="transparent"
        activeOutlineColor="#3773ed"
        onChangeText={onChange}
        theme={{ roundness: 20 }}
        {...others}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },

  textField: {
    backgroundColor: "#F0F5FF",
    fontWeight: "700"
  },
});
