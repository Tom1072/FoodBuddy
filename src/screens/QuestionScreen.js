import React from "react";
import { StyleSheet, ScrollView, StatusBar } from "react-native";
import CheckBoxField from "../components/CheckBoxField";
import TextField from "../components/TextField";
import { Button } from "react-native-paper";
import { ScreenTitle } from "../components/Typography";
import { SafeAreaView } from "react-native-safe-area-context";

export default function QuestionScreen() {
  const [area, setArea] = React.useState("");
  const [budgets, setBudgets] = React.useState({
    "Inexpensive ($)": true,
    "Moderately expensive ($$)": true,
    "Expensive ($$$)": true,
    "Very expensive ($$$$)": true,
  });
  const [cuisines, setCuisines] = React.useState({
    Asian: true,
    American: true,
    European: true,
    African: true,
    Oceanic: true,
  });

  const handleChangeCheckBox = (key, list, setter) => {
    setter({
      ...list,
      [key]: !list[key],
    });
  };

  const handleSubmit = () => {
    // TODO: check if area is empty or not
    // if yes, set to All or Anywhere (or based on the API query)
    console.log("Area:", !area ? "Anywhere" : area);
    console.log("Cuisines:", cuisines);
    console.log("Budgets:", budgets);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView
        style={styles.mainContainer}
        contentContainerStyle={styles.contentContainer}
      >
        <ScreenTitle>Preferences</ScreenTitle>
        <TextField
          title="Area"
          placeholder="Anywhere"
          value={area}
          onChange={(text) => setArea(text)}
        />
        <CheckBoxField
          title="Cuisines"
          values={cuisines}
          onChange={(key) => handleChangeCheckBox(key, cuisines, setCuisines)}
        />
        <CheckBoxField
          title="Budget"
          values={budgets}
          onChange={(key) => handleChangeCheckBox(key, budgets, setBudgets)}
        />
        <Button
          mode="contained"
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          Done
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },

  mainContainer: {
    padding: 30,
    backgroundColor: "#fff",
  },

  contentContainer: {
    paddingBottom: 90,
  },

  textField: {
    backgroundColor: "#F0F5FF",
  },

  submitButton: {
    marginVertical: 20,
    backgroundColor: "#6f92d9",
  },
});
