import { StyleSheet, Text, View } from "react-native";

export default function Divider({ text }) {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={styles.line} />
      {text ? (
        <>
          <Text style={styles.text}>{text}</Text>
          <View style={styles.line} />
        </>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    backgroundColor: "#616161",
    height: 1,
    flex: 1,
    alignSelf: "center",
  },
  text: {
    alignSelf: "center",
    paddingHorizontal: 5,
    fontSize: 12,
    color: "#616161"
  },
});
