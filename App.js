import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useUser, useSetUser, useSetLoggedIn } from './src/stores/generalStore';

import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, query, collection, where, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDixJIB6o-N7JvNNDaPEHH2lIFtz-jXVJI",
  authDomain: "foodbuddy-15a8f.firebaseapp.com",
  projectId: "foodbuddy-15a8f",
  storageBucket: "foodbuddy-15a8f.appspot.com",
  messagingSenderId: "752732115680",
  appId: "1:752732115680:web:5591c55d45a3c827def685",
  measurementId: "G-4ZP9BNPYVN"
};

import LandingScreen from './src/screens/LandingScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import QuestionScreen from './src/screens/QuestionScreen';
import MainScreen from './src/screens/MainScreen';
import ConfirmationScreen from './src/screens/ConfirmationScreen';

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = [useUser(), useSetUser()];
  const setLoggedIn = useSetLoggedIn();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        const allUsers = collection(firestore, "users");
        const q = query(allUsers, where("email", "==", user.email))
        getDocs(q).then(docs => {
          // setUser(doc);
          docs.forEach(doc => {
            setUser(doc.data())
          })
        })
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LandingScreen'
        screenOptions={{
          header: () => null
        }}
      >
        <Stack.Screen name='LandingScreen' component={LandingScreen} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
        <Stack.Screen name='QuestionScreen' component={QuestionScreen} />
        <Stack.Screen name='MainScreen' component={MainScreen} />
        <Stack.Screen name='ConfirmationScreen' component={ConfirmationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
