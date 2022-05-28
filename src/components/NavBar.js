import React from 'react'
import { useLoggedIn, useUser, useSetUser } from '../stores/generalStore';
import { Appbar } from 'react-native-paper'
import { getAuth } from 'firebase/auth'

export default function NavBar({ title }) {
    const loggedIn = useLoggedIn();
    const [user, setUser] = [useUser(), useSetUser()];

    function logout() {
        const auth = getAuth();
        auth.signOut();
        setUser(null);
    }

    return (
        <Appbar.Header>
            <Appbar.Content title={title} />
            <Appbar.Content title={user?.name} />
            {loggedIn && <Appbar.Action icon="logout" onPress={logout} />}
        </Appbar.Header>
    )
}
