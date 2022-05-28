import React from "react";
import { StyleSheet, Text } from "react-native";

export function ScreenTitle({ children }) {
  return <Text style={styles.screenTitle}>{children}</Text>;
}

export function SectionTitle({ children }) {
  return <Text style={styles.sectionTitle}>{children}</Text>;
}

const styles = StyleSheet.create({
  screenTitle: {
    fontSize: 30,
    fontWeight: "900",
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "900",
  },
});
