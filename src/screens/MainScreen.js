import {
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import { useEffect, useState } from "react";
import { ScreenTitle, SectionTitle, Subtitle } from "../components/Typography";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { Rating } from "react-native-ratings";
import { Chip } from "react-native-paper";
import NavBar from "../components/NavBar";
import { useLoggedIn, useChoice } from "../stores/generalStore";
import GestureRecognizer from "react-native-swipe-gestures";
import {
  useRecommendation,
  useSetRecommendation,
} from "../stores/generalStore";
import { findPlace } from "../utils/googlePlace";
// import FoodCard from '../components/FoodCard.js';

// const key = "AIzaSyA8GPNfwLECbIQSl8jGUR7N_o41-YBYbM0"
const key = "AIzaSyBCsE3YX42Sg6N5zDsLHXO52X7K1m5SIuY";
export default function MainScreen({ navigation }) {
  const budgetArr = ["$", "$$", "$$$", "$$$$", "$$$$$"];
  const budgetMap = {
    "($)": 0,
    "($$)": 1,
    "($$$)": 2,
    "($$$$)": 3,
    "($$$$$)": 4,
  };

  const chips = [
    "Vietnamese Cuisine",
    "Very expensive",
    "Hot Soup",
    "Healthy Food",
    "Best in Winter",
  ];

  const popularItems = [
    {
      image:
        "https://img.taste.com.au/bJGGTjzJ/taste/2017/01/vietnamese-spicy-meatball-banh-mi-120038-2.jpg",
      name: "Banh My",
      tag: "Healthy Food",
      price: 7.99,
    },
  ];

  const choice = useChoice();
  const [recommendation, setRecommendation] = [
    useRecommendation(),
    useSetRecommendation(),
  ];

  const loggedIn = useLoggedIn();
  const [restInfo, setRestInfo] = useState({
    name: recommendation?.name,
    address: recommendation?.formatted_address,
    reviews: recommendation?.user_ratings_total,
    rating: recommendation?.rating,
    // image: "https://media.istockphoto.com/photos/vietnamese-pho-noodle-soup-dish-picture-id535168737?k=20&m=535168737&s=612x612&w=0&h=z0TiQPx6KtkQK2ZDXaLk22WyBUa1y-WDTxeg16ALYOE=",
    image: `https://maps.googleapis.com/maps/api/place/photo?photo_reference=${recommendation?.photos[0].photo_reference}&key=${key}&maxwidth=400&maxheight=400`,
    budget: recommendation?.price_level,
  });

  useEffect(() => {
    if (!loggedIn) navigation.navigate("LandingScreen");
    // console.log(route)
  }, []);

  // TODO: load a new restaurant
  const handleSwipeLeft = () => {
    const { area, minBudget, maxBudget, cuisine } = choice;
    findPlace(area, minBudget, maxBudget, cuisine)
      .then((res) => {
        // console.log(res);
        setRecommendation(res);
        setRestInfo({
          name: res.name,
          address: res.formatted_address,
          reviews: res.user_ratings_total,
          rating: res.rating,
          image: `https://maps.googleapis.com/maps/api/place/photo?photo_reference=${res?.photos[0].photo_reference}&key=${key}&maxwidth=400&maxheight=400`,
          // image: `https://foodish-api.herokuapp.com/api/image`,
          budget: res.price_level,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log("Swiped Left");
    // console.log(recommendation.photos[0]);
  };

  const handleSwipeRight = () => {
    navigation.navigate("ConfirmationScreen");
  };

  const renderTitleField = (name, address, budget) => (
    <View style={styles.titleField}>
      <Subtitle color="#fff" style={{ fontSize: 15 }}>
        {address}
      </Subtitle>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <ScreenTitle style={{ fontSize: 23 }} color="#fff">
          {name}
        </ScreenTitle>
        <ScreenTitle style={{ fontSize: 23 }} color="#fff">
          {budgetArr[budget]}
        </ScreenTitle>
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

  const renderFoodDetail = (image, name, tag, price) => {
    return (
      <View style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 20 }}
          alternative
          source={{
            uri: image,
          }}
        />
        <View
          style={{
            marginLeft: 15,
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <SectionTitle style={{ marginHorizontal: 5 }}>{name}</SectionTitle>
            {renderChip(tag)}
          </View>
          <View style={{ alignItems: "flex-end", justifyContent: "flex-end" }}>
            <Subtitle style={{ fontSize: 12 }}>$ {price}</Subtitle>
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
    <GestureRecognizer
      style={{ height: "100%" }}
      onSwipeRight={handleSwipeRight}
      onSwipeLeft={handleSwipeLeft}
    >
      <View style={styles.container}>
        <NavBar
          navigateToLanding={() => navigation.navigate("LandingScreen")}
        />
        <ImageBackground
          resizeMode="cover"
          source={{ uri: restInfo.image }}
          style={styles.background}
        >
          {renderTitleField(restInfo.name, restInfo.address, restInfo.budget)}
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
                startingValue={restInfo.rating}
              />
            </View>
          </View>
          {/* <SectionTitle>Tags</SectionTitle> */}
          {/* {renderCard(chips.map((chip) => renderChip(chip)))} */}
          {/* <SectionTitle>Popular choices</SectionTitle> */}
          {/* {popularItems.map((item) =>
            renderCard(
              renderFoodDetail(item.image, item.name, item.tag, item.price)
            )
          )}
          <View style={{ marginBottom: 50 }} /> */}
        </ScrollView>
      </View>
    </GestureRecognizer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    zIndex: -10,
  },

  background: {
    width: 400,
    height: 600,
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
