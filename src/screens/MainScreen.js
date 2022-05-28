import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import FoodCard from '../components/FoodCard.js';
export default function MainScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Image source={{uri: 'https://media.istockphoto.com/photos/vietnamese-pho-noodle-soup-dish-picture-id535168737?k=20&m=535168737&s=612x612&w=0&h=z0TiQPx6KtkQK2ZDXaLk22WyBUa1y-WDTxeg16ALYOE='}}
          style={styles.photo} />
        <Text style={styles.address}>
          Address
        </Text>
        <Text style={styles.name}>
          Name
        </Text>
        <Text style={styles.price}>
          Price 
        </Text>
      </View>
      {/* <View>
        <View>
          <Image source={{uri: 'https://purepng.com/public/uploads/large/heart-icon-y1k.png'}}
          style={styles.heart}/>
          
        </View>

      </View> */}
      <ScrollView style={styles.cards}>
        <FoodCard name='abc' image='https://purepng.com/public/uploads/large/heart-icon-y1k.png' 
          tags='Sweet' location='vn' price='11' />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  hero: {
    display: 'flex',
    flexDirection: 'column'
  },
  photo: {
    width: 400,
    height: 300,
    alignSelf: 'center'
  },
  address: {
    color: '#f01a1a',
    position: 'absolute',
    top: 250,
    left: 10
  },
  name: {
    color: '#f01a1a',
    position: 'absolute',
    bottom: 5,
    left: 10,
    fontSize: 25
  },
  price: {
    color: '#f01a1a',
    position: 'absolute',
    bottom: 5,
    right: 10,
    fontSize: 25
  },
  heart: {
    width: 20,
    height: 20
  },
  cards: {
    
  }
});

