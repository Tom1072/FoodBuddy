import { StyleSheet, Text, View, ImageBackground, Image, Animated, Easing } from 'react-native';
import { useEffect } from 'react';
import bgColor from '../../assets/background.png';
import loadIcon from '../../assets/loading.png';

export default function ConfirmationScreen() {
  let rotateValueHolder = new Animated.Value(0);
  useEffect(() => {
    const startImageRotateFunction = () => {
      rotateValueHolder.setValue(0);
      Animated.timing(rotateValueHolder, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false
      }).start(() => startImageRotateFunction())
    }
    startImageRotateFunction();
  }, []);

  const RotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  return (
    <View style={styles.container}>
      <ImageBackground
          resizeMode="cover"
          source={bgColor}
          style={styles.topBackground}
      >
        <Text style={{ color: '#0E3E7D', fontSize: 36, fontWeight:'700', alignSelf: 'center', margin: 10}}> Congratulation! </Text>
        <Text style={{ fontSize: 20, fontWeight:'400', alignSelf: 'center' }}> You Matched With A Restaurant </Text>
      </ImageBackground>
      <View style={{ display: 'flex', flexDirection: 'column', padding: 30 }}>
        <Animated.Image
            source={loadIcon}
            style={[{ margin: 10, alignSelf: 'center'},
                    {transform: [{ rotate: RotateData }]}]}
        />
        <Text style={{ fontSize: 20, fontWeight:'400', alignSelf: 'center' }}> Processing to Google Map </Text>
      </View>
      <Image
          source={bgColor}
          style={styles.bottomBackground}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  topBackground: {
    width: 400,
    height: 200,
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    justifyContent: 'flex-end',
    padding: 25,
  },
  bottomBackground: {
    marginTop: 'auto',
    width: 400,
    height: 200,
  }
});

