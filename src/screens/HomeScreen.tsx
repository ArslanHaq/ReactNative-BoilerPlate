import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FullWidthButton} from '../components';
import {AuthContext} from '../Auth/authProvider';

export const HomeScreen: React.FC = () => {
  const {user, logout, googleSignOut} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>{user.email}</Text>
      <Text>{user.name}</Text>
      <Text>{user.id}</Text>

      <FullWidthButton
        text="Logout"
        onPress={() => {
          logout();
          googleSignOut();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'teal',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
