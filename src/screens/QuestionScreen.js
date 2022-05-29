import React from "react";
import CheckBoxField from "../components/CheckBoxField";
import TextField from "../components/TextField";

import { StyleSheet, Text, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { ScreenTitle, SectionTitle } from "../components/Typography";
import { SafeAreaView } from "react-native-safe-area-context";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { FlatList } from "react-native-gesture-handler";

export default function QuestionScreen({ navigation }) {
  const [area, setArea] = React.useState(null);
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
    navigation.navigate('MainScreen');
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <FlatList
        data={[{}]}
        keyExtractor={() => null}
        style={styles.mainContainer}
        contentContainerStyle={styles.contentContainer}
        renderItem={() => (
          <>
            <ScreenTitle style={{ marginBottom: 10 }}>Preferences</ScreenTitle>
            <SectionTitle>Area</SectionTitle>
            <GooglePlacesAutocomplete
              styles={{
                textInput: styles.placeTextField,
              }}
              debounce={300}
              placeholder="Anywhere"
              onPress={(data, details = null) => {
                setArea(data)
              }}
              query={{
                key: "AIzaSyA8GPNfwLECbIQSl8jGUR7N_o41-YBYbM0",
                language: "en",
              }}
            />
            <CheckBoxField
              title="Cuisines"
              values={cuisines}
              onChange={(key) =>
                handleChangeCheckBox(key, cuisines, setCuisines)
              }
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
          </>
        )}
      />
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

  placeTextField: {
    backgroundColor: "#F0F5FF",
    fontWeight: "700"
  },

  submitButton: {
    marginVertical: 20,
    backgroundColor: "#6f92d9",
  },
});
