import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TextInput } from "react-native-paper";

export default function TextField(props) {
  const { title, value, onChange, placeholder } = props;

  return (
    <>
      <Text style={styles.title}>{title}:</Text>
      <TextInput
        dense
        mode="outlined"
        placeholder={placeholder}
        value={value}
        style={styles.textField}
        outlineColor="transparent"
        activeOutlineColor="#3773ed"
        onChangeText={onChange}
      />
    </>
  );
}

const styles = StyleSheet.create({
  textField: {
    backgroundColor: "#F0F5FF",
  },
});
