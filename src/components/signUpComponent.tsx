import React, {useContext} from 'react';
import {
  Button,
  Pressable,
  processColor,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, {G, Path, Rect} from 'react-native-svg';

import {
  SignUpIconContainerComponent,
  FullWidthButton,
  CheckboxComponent,
} from './index';
import {SignUpScreenNavigationProp} from '../types';
import {AuthContext, AuthProvider} from '../Auth/authProvider';

type Props = {
  navigation: SignUpScreenNavigationProp;
};
export const SignUpComponent: React.FC<Props> = ({navigation}) => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [username, setUsername] = React.useState<string>('');
  const [isEmailFocused, setIsEmailFocused] = React.useState<boolean>(false);
  const [isUsernameFocused, setIsUsernameFocused] =
    React.useState<boolean>(false);
  const [isPasswordFocused, setIsPasswordFocused] =
    React.useState<boolean>(false);

  const {register, googleSignIn} = useContext(AuthContext);

  return (
    <View>
      <View>
        <Text style={[styles.inputHeading, {marginLeft: 2}]}>Email</Text>
      </View>
      <View style={{marginTop: 10}}>
        <View style={[StyleSheet.absoluteFill, {zIndex: 1}, styles.emailIcon]}>
          <Svg
            width="20px"
            height="20px"
            viewBox="0 0 1920 1920"
            fill="#EE8433">
            <Path
              d="M0 1694.235h1920V226H0v1468.235zM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57zM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57z"
              fillRule="evenodd"
            />
          </Svg>
        </View>
        <TextInput
          onFocus={() => setIsEmailFocused(true)}
          onBlur={() => setIsEmailFocused(false)}
          style={[styles.textInputStyle, isEmailFocused && styles.focusedStyle]}
          placeholder="Enter your email address"
          placeholderTextColor="gray"
          keyboardType="email-address"
          returnKeyType="next"
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View>
        <Text style={[styles.inputHeading, {marginLeft: 2, marginTop: 15}]}>
          Username
        </Text>
      </View>
      <View style={{marginTop: 10}}>
        <View style={[StyleSheet.absoluteFill, {zIndex: 1}, styles.emailIcon]}>
          <Svg width="20px" height="20px" viewBox="0 0 32 32" fill="#EE8433">
            <Path d="M15.992 2c3.396 0 6.998 2.86 6.998 4.995v4.997c0 1.924-.8 5.604-2.945 7.293a2 2 0 00.402 3.389l8.703 4.127c.068.031.834.16.834 1.23l.001 1.952-27.984.002v-2.029c0-.795.596-1.045.835-1.154l8.782-4.145a1.997 1.997 0 00.416-3.376c-2.078-1.668-3.046-5.335-3.046-7.287V6.997c.001-2.089 3.638-4.995 7.004-4.995zm0-2c-4.416 0-9.004 3.686-9.004 6.996v4.997c0 2.184.997 6.601 3.793 8.847l-8.783 4.145S0 25.875 0 26.984v3.001c0 1.105.895 1.999 1.998 1.999h27.986a1.998 1.998 0 001.999-1.999v-3.001c0-1.175-1.999-1.999-1.999-1.999l-8.703-4.127c2.77-2.18 3.708-6.464 3.708-8.865V6.996c0-3.31-4.582-6.995-8.998-6.995z" />
          </Svg>
        </View>
        <TextInput
          style={[
            styles.textInputStyle,
            isUsernameFocused && styles.focusedStyle,
          ]}
          onFocus={() => setIsUsernameFocused(true)}
          onBlur={() => setIsUsernameFocused(false)}
          placeholder="Enter your Username"
          placeholderTextColor="gray"
          keyboardType="email-address"
          returnKeyType="next"
          onChangeText={text => setUsername(text)}
        />
      </View>
      <View style={{marginTop: 15, marginLeft: 2}}>
        <Text style={styles.inputHeading}>Password</Text>
      </View>
      <View style={{marginTop: 10}}>
        <View
          style={[
            StyleSheet.absoluteFill,
            {zIndex: 1, paddingLeft: 4},
            styles.emailIcon,
          ]}>
          <Svg width="20px" height="18px" viewBox="0 0 64 64">
            <G fill="#EE8433">
              <Path d="M52 24h-6V14c0-7.732-6.268-14-14-14S18 6.268 18 14v10h-6c-2.211 0-4 1.789-4 4v32c0 2.211 1.789 4 4 4h40c2.211 0 4-1.789 4-4V28c0-2.211-1.789-4-4-4zM20 14c0-6.627 5.373-12 12-12s12 5.373 12 12v10h-4V14a8 8 0 00-16 0v10h-4V14zm6 0a6 6 0 0112 0v10H26V14zm28 46a2 2 0 01-2 2H12a2 2 0 01-2-2v-4h44v4zm0-6H10V34h44v20zm0-22H10v-4a2 2 0 012-2h40a2 2 0 012 2v4z" />
              <Path d="M29 44.979V49a3 3 0 106 0v-4.021A4.973 4.973 0 0037 41c0-2.762-2.238-5-5-5s-5 2.238-5 5c0 1.631.791 3.066 2 3.979zM32 38a3 3 0 013 3 2.99 2.99 0 01-2 2.816V49a1 1 0 11-2 0v-5.184A2.99 2.99 0 0129 41a3 3 0 013-3z" />
            </G>
          </Svg>
        </View>
        <TextInput
          style={[
            styles.textInputStyle,
            isPasswordFocused && styles.focusedStyle,
          ]}
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
          placeholder="Enter your password"
          placeholderTextColor="gray"
          returnKeyType="next"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <View style={{marginTop: 70}}>
        <FullWidthButton
          onPress={() => register(email, password)}
          text="Sign Up"
        />
      </View>
      <View style={styles.orContainer}>
        <Text style={styles.lineStyle}>----------------</Text>
        <Text style={{color: 'gray', fontWeight: 'bold'}}>Or</Text>
        <Text style={styles.lineStyle}>----------------</Text>
      </View>
      <View>
        <SignUpIconContainerComponent onGooglePress={() => googleSignIn()} />
      </View>
      <View style={styles.alreadyContainer}>
        <Text style={styles.alreadyText}>Already have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation?.navigate('LoginScreen');
          }}>
          <Text style={styles.SignIn}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputHeading: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  textInputStyle: {
    padding: 10,
    paddingLeft: 50,
    borderRadius: 5,
    backgroundColor: 'lightgray',
    color: 'black',
  },
  focusedStyle: {
    borderColor: '#EE8433',
    borderWidth: 1,
  },
  emailIcon: {
    top: 15,
    left: 12,
    width: 30,
  },

  orContainer: {
    marginTop: 30,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineStyle: {
    paddingHorizontal: 10,
    fontSize: 20,
    color: 'lightgray',
  },
  alreadyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  alreadyText: {
    color: 'gray',
  },
  SignIn: {
    color: 'black',
    fontWeight: 'bold',
  },
});
