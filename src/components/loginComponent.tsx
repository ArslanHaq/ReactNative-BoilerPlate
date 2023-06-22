import React, {useContext} from 'react';
import {LoginScreenNavigationProp} from '../types';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';
import {CheckboxComponent} from './checkboxComponent';
import {FullWidthButton} from './fullWidthButton';
import {SignUpIconContainerComponent} from './signUpIconContainerComponent';
import {AuthContext} from '../Auth/authProvider';

type Props = {
  navigation: LoginScreenNavigationProp;
};
export const LoginComponent: React.FC<Props> = ({navigation}) => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [isEmailFocused, setIsEmailFocused] = React.useState<boolean>(false);
  const [isPasswordFocused, setIsPasswordFocused] =
    React.useState<boolean>(false);
  const {user, login} = useContext(AuthContext);
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
          style={[styles.textInputStyle, isEmailFocused && styles.focusedStyle]}
          onFocus={() => setIsEmailFocused(true)}
          onBlur={() => setIsEmailFocused(false)}
          placeholder="Enter your email address"
          placeholderTextColor="gray"
          keyboardType="email-address"
          returnKeyType="next"
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View>
        <Text style={[styles.inputHeading, {marginLeft: 2, marginTop: 20}]}>
          Password
        </Text>
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
      <View style={styles.checkboxContainer}>
        <View>
          <CheckboxComponent />
        </View>
        <TouchableOpacity>
          <Text style={styles.inputHeading}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 70}}>
        <FullWidthButton text="Login" onPress={() => login(email, password)} />
      </View>
      <View style={styles.orContainer}>
        <Text style={styles.lineStyle}>----------------</Text>
        <Text style={{color: 'gray', fontWeight: 'bold'}}>Or</Text>
        <Text style={styles.lineStyle}>----------------</Text>
      </View>
      <View>
        <SignUpIconContainerComponent />
      </View>
      <View style={styles.alreadyContainer}>
        <Text style={styles.alreadyText}>Already have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation?.navigate('SignUpScreen');
          }}>
          <Text style={styles.SignIn}>Create here</Text>
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
  emailIcon: {
    top: 15,
    left: 12,
    width: 30,
  },
  checkboxContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forgotPassword: {
    color: 'gray',
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
  focusedStyle: {
    borderColor: '#EE8433',
    borderWidth: 1,
  },
});
