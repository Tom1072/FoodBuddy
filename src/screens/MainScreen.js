import { StyleSheet, View, ScrollView, ImageBackground } from "react-native";
import { ScreenTitle, SectionTitle, Subtitle } from "../components/Typography";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { Rating } from "react-native-ratings";

// import FoodCard from '../components/FoodCard.js';

export default function MainScreen() {
  const image = {
    uri: "https://media.istockphoto.com/photos/vietnamese-pho-noodle-soup-dish-picture-id535168737?k=20&m=535168737&s=612x612&w=0&h=z0TiQPx6KtkQK2ZDXaLk22WyBUa1y-WDTxeg16ALYOE=",
  };

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

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={image}
        style={styles.background}
      >
        {renderTitleField()}
      </ImageBackground>
      <View style={styles.details}>
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
      </View>
      <ScrollView style={styles.cards}>
        {/* <FoodCard name='abc' image='https://purepng.com/public/uploads/large/heart-icon-y1k.png' 
          tags='Sweet' location='vn' price='11' /> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  price: {
    color: "#f01a1a",
    position: "absolute",
    bottom: 5,
    right: 10,
    fontSize: 25,
  },
  heart: {
    width: 20,
    height: 20,
  },
  cards: {},
});
