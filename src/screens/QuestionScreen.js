import { StyleSheet, Text, View } from 'react-native';

export default function QuestionScreen() {
  return (
    <View style={styles.container}>
      <Text>Question Screen</Text>
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
