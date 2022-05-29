import {
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  Image,
  Text
} from "react-native";
import { useEffect } from "react";
import { ScreenTitle, SectionTitle, Subtitle } from "../components/Typography";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { Rating } from "react-native-ratings";
import { Chip } from "react-native-paper";
import NavBar from "../components/NavBar";
import { useLoggedIn } from "../stores/generalStore";


// import FoodCard from '../components/FoodCard.js';

export default function MainScreen({ navigation }) {
  const loggedIn = useLoggedIn();
  const image = {
    uri: "https://media.istockphoto.com/photos/vietnamese-pho-noodle-soup-dish-picture-id535168737?k=20&m=535168737&s=612x612&w=0&h=z0TiQPx6KtkQK2ZDXaLk22WyBUa1y-WDTxeg16ALYOE=",
  };

  useEffect(() => {
    if (!loggedIn) navigation.navigate("LandingScreen");
    // console.log(route)
  }, []);

  const renderTitleField = () => (
    <View style={styles.titleField}>
      <Subtitle color="#fff">1 Ts Gang Rd, Ottawa, Ontario</Subtitle>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <ScreenTitle color="#fff">Ts Gang Pho</ScreenTitle>
        <ScreenTitle color="#fff">$$$</ScreenTitle>
      </View>
    </View>
  );

  const renderChip = (text) => {
    return (
      <Chip
        key={text}
        onPress={() => {}}
        textStyle={{ fontSize: 12 }}
        style={{ margin: 2 }}
      >
        {text}
      </Chip>
    );
  };

  const renderFoodDetail = (title) => {
    return (
      <View style={{ display: "flex", flexDirection: "row", width: "100%"}}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 20 }}
          alternative
          source={{
            uri: "https://img.taste.com.au/bJGGTjzJ/taste/2017/01/vietnamese-spicy-meatball-banh-mi-120038-2.jpg",
          }}
        />
        <View style={{ marginLeft: 15, flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <SectionTitle style={{ marginHorizontal: 5 }}>{title}</SectionTitle>
            {renderChip("Healthy Food")}
          </View>
          <View style={{ alignItems: "flex-end", justifyContent: "flex-end" }}>
            <Subtitle style={{ fontSize: 12 }}>$ 7,99</Subtitle>
          </View>
        </View>
      </View>
    );
  };

  const renderCard = (elements) => {
    return (
      <View
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.2,
          shadowRadius: 5,
          backgroundColor: "#fff",
          marginVertical: 10,
          padding: 10,
          borderRadius: 20,
          flexDirection: "row",
          justifyContent: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {elements}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <NavBar navigateToLanding={() => navigation.navigate("LandingScreen")} />
      <ImageBackground
        resizeMode="cover"
        source={image}
        style={styles.background}
      >
        {renderTitleField()}
      </ImageBackground>
      <ScrollView style={styles.details}>
        <View style={styles.ratingContainer}>
          <Button color="#fff" style={styles.heartButton}>
            <Icon name={"heart"} size={25} />
          </Button>
          <View style={{ display: "flex", alignItems: "flex-start" }}>
            <SectionTitle>Popular Restaurant</SectionTitle>
            <Rating
              type="custom"
              readonly
              style={styles.rating}
              ratingColor="#FA5D5D"
              imageSize={20}
            />
          </View>
        </View>
        <SectionTitle>Tags</SectionTitle>
        {renderCard([
          renderChip("Vietnamese Cuisine"),
          renderChip("Very expensive"),
          renderChip("Hot Soup"),
          renderChip("Healthy Food"),
          renderChip("Best in Winter"),
        ])}
        <SectionTitle>Popular choices</SectionTitle>
        {renderCard(renderFoodDetail("Banh my"))}
        <View style={{ marginBottom: 50 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    zIndex: -10
  },

  background: {
    width: 400,
    height: 300,
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    justifyContent: "flex-end",
    padding: 25,
  },

  titleField: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 10,
    padding: 10,
  },

  details: {
    padding: 25,
  },

  heartButton: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#FA5D5D",
    width: 50,
    height: 60,
    borderRadius: 10,
    shadowColor: "rgba(255, 113, 33, 0.5)",
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
    marginRight: 20,
  },

  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  rating: {
    marginTop: 5,
  },

  address: {
    color: "#f01a1a",
    position: "absolute",
    top: 250,
    left: 10,
  },
  name: {
    color: "#f01a1a",
    position: "absolute",
    bottom: 5,
    left: 10,
    fontSize: 25,
  },
});
