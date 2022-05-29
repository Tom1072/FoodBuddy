import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Animated,
  Easing,
  Linking
} from "react-native";
import { useEffect } from "react";
import bgColor from "../../assets/background.png";
import loadIcon from "../../assets/loading.png";
import { createMapLink } from "react-native-open-maps";
import { useRecommendation } from "../stores/generalStore";

export default function ConfirmationScreen() {
  let rotateValueHolder = new Animated.Value(0);
  const recommendation = useRecommendation();

  const _goToYosemite = () => {
    createMapLink({ provider: 'google', end: 'New York City, NY' })
  }

  useEffect(() => {
    const startImageRotateFunction = () => {
      rotateValueHolder.setValue(0);
      Animated.timing(rotateValueHolder, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(() => startImageRotateFunction());
    };

    startImageRotateFunction();

    setTimeout(() => {
      Linking.openURL("https://www.google.com/maps/search/?api=1&query=cn+tower")
    }, 2000);
  }, []);

  const RotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={bgColor}
        style={styles.topBackground}
      >
        <Text
          style={{
            color: "#0E3E7D",
            fontSize: 36,
            fontWeight: "700",
            alignSelf: "center",
            margin: 10,
          }}
        >
          {" "}
          Congratulation!{" "}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "400", alignSelf: "center" }}>
          {" "}
          You Matched With A Restaurant{" "}
        </Text>
      </ImageBackground>
      <View
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: 30,
          justifyContent: "center",
        }}
      >
        <Animated.Image
          source={loadIcon}
          style={[
            { margin: 10, alignSelf: "center" },
            { transform: [{ rotate: RotateData }] },
          ]}
        />
        <Text style={{ fontSize: 20, fontWeight: "400", alignSelf: "center" }}>
          {" "}
          Processing to Google Map{" "}
        </Text>
      </View>
      <Image source={bgColor} style={styles.bottomBackground} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  topBackground: {
    width: 400,
    height: 250,
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    justifyContent: "flex-end",
    padding: 25,
  },
  bottomBackground: {
    marginTop: "auto",
    width: 400,
    height: 250,
  },
});
