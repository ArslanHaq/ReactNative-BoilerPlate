import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from './Auth/authProvider';
import auth from '@react-native-firebase/auth';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './screens/HomeScreen';
import {RootNavigation} from './screens/Root.navigation';

export const Routes: React.FC = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = React.useState(true);

  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    return auth().onAuthStateChanged(onAuthStateChanged); // unsubscribe on unmount
  }, []);
  if (initializing) return null;
  return (
    <NavigationContainer>
      {user ? <HomeScreen /> : <RootNavigation />}
    </NavigationContainer>
  );
};
