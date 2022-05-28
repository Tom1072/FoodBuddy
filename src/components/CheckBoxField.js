import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Checkbox } from "react-native-paper";
import { SectionTitle } from "./Typography";

export default function CheckBoxField(props) {
  const { title, values, onChange } = props;

  return (
    <View style={styles.container}>
      <SectionTitle>{title}</SectionTitle>

      {Object.entries(values).map(([key, val], index) => (
        <TouchableOpacity
          key={index}
          style={styles.checkBoxContainer}
          onPress={() => onChange(key)}
          activeOpacity={1}
        >
          <Checkbox.Android
            status={val ? "checked" : "unchecked"}
            onPress={() => onChange(key)}
            color="#6f92d9"
          />
          <Text style={styles.text}>{key}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },

  text: {
    fontWeight: "700",
  },

  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F5FF",
  },
});
