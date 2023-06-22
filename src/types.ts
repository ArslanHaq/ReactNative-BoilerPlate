import {NavigatorScreenParams} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  BottomTabs: NavigatorScreenParams<BottomTabsParamList>;
  LandingScreen: undefined;
  SignUpScreen: undefined;
  ExampleModal: undefined;
  LoginScreen: undefined;
};
export type LandingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'LandingScreen'
>;

export type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignUpScreen'
>;
export type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'LoginScreen'
>;

export type BottomTabsParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
  OtherTab: undefined;
};

export type HomeStackParamList = {
  FirstPage: undefined;
  SecondPage: undefined;
};
