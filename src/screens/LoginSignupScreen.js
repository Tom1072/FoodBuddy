import { StyleSheet, Text, View } from 'react-native';

export default function LoginSignupScreen() {
  return (
    <View style={styles.container}>
      <Text>Login + Signup Screen</Text>
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
