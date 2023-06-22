import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '../types';
import LandingScreen from './LandingScreen';
import {SignUpScreen} from './SignUpScreen';
import {LoginScreen} from './LoginScreen';
import BackArrowIcon from '../../assets/svg/backArrowIcon';

const RootStack = createStackNavigator<RootStackParamList>();
export const RootNavigation: React.FC = () => {
  return (
    <RootStack.Navigator
      initialRouteName="LandingScreen"
      screenOptions={() => {
        return {
          headerTitleAlign: 'center',
          headerBackground: () => {
            return <View style={{backgroundColor: '#EE8433', flex: 1}} />;
          },
        };
      }}>
      <RootStack.Screen name="LandingScreen" component={LandingScreen} />
      <RootStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={({navigation}) => ({
          headerTitle: 'Sign Up',
          headerLeft: () => (
            <TouchableOpacity
              style={{marginLeft: 10}}
              onPress={() => navigation.navigate('LandingScreen')}>
              <BackArrowIcon />
            </TouchableOpacity>
          ),
        })}
      />
      <RootStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={({navigation}) => ({
          headerTitle: 'Login',
          headerLeft: () => (
            <TouchableOpacity
              style={{marginLeft: 10}}
              onPress={() => navigation.navigate('LandingScreen')}>
              <BackArrowIcon />
            </TouchableOpacity>
          ),
        })}
      />
    </RootStack.Navigator>
  );
};
