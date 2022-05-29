import React from "react";
import { StyleSheet, Text } from "react-native";

export function ScreenTitle({ children, color="#000", style }) {
  return <Text style={{ ... styles.screenTitle, color, ...style }}>{children}</Text>;
}

export function SectionTitle({ children, color="#000", style }) {
  return <Text style={{ ... styles.sectionTitle, color, ...style }}>{children}</Text>;
}

export function Subtitle({ children, color="#000", style }) {
  return <Text style={{ ... styles.subtitle, color, ...style }}>{children}</Text>;
}

const styles = StyleSheet.create({
  screenTitle: {
    fontSize: 30,
    fontWeight: "700",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
  },

  subtitle: {
    fontSize: 17,
    fontWeight: "300",
  },
});
