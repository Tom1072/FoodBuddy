import React from "react";
import { useLoggedIn, useUser, useSetUser } from "../stores/generalStore";
import { Appbar } from "react-native-paper";
import { getAuth } from "firebase/auth";
import { createNavigationContainerRef } from "@react-navigation/native";

export default function NavBar({ title, navigateToLanding }) {
  const loggedIn = useLoggedIn();
  const [user, setUser] = [useUser(), useSetUser()];

  function logout() {
    const auth = getAuth();
    auth.signOut();
    setUser(null);
    navigateToLanding();
  }

  return (
    <Appbar.Header
      style={{
        width: "100%",
        top: 40,
        position: "absolute",
        zIndex: 1,
        backgroundColor: "transparent",
      }}
    >
      <Appbar.Content title={title} />
      <Appbar.Content title={user?.name} />
      {loggedIn && <Appbar.Action color="white" icon="logout" onPress={logout} />}
    </Appbar.Header>
  );
}
