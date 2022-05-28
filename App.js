import { StyleSheet, View } from 'react-native';
import QuestionScreen from './src/screens/QuestionScreen';
import LoginSignupScreen from './src/screens/LoginSignupScreen';
import MainScreen from './src/screens/MainScreen';
import ConfirmationScreen from './src/screens/ConfirmationScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LoginSignupScreen /> */}
      {/* <QuestionScreen /> */}
      {/* <MainScreen /> */}
      {/* <ConfirmationScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
