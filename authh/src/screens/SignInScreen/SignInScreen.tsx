import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import Logo from '../../../assets/images/Logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import SocialSignInButtons from '../../components/SocialSignInButtons';

const SignInScreen = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const {height} = useWindowDimensions();

  const navigation = useNavigation();

  const onSignInPressed = () => {
    console.warn('Signing in...');
    navigation.navigate('Home');
  };

  const onSignUpPressed = () => {
    console.warn('Signing up...');
    navigation.navigate('SignUp');
  };

  const onResetPasswordPressed = () => {
    console.warn('Reset password');
    navigation.navigate('ResetPassword');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
        <Input
          value={username}
          setValue={setUsername}
          placeholder="Username"
          secureTextEntry={false}
        />
        <Input
          value={password}
          setValue={setPassword}
          placeholder="Password"
          secureTextEntry={true}
        />

        <Button onPress={onSignInPressed} text="Sign in" />
        <Button
          onPress={onResetPasswordPressed}
          text="Reset Password"
          type="TERTIARY"
        />

        <SocialSignInButtons />

        <Button
          onPress={onSignUpPressed}
          text="Don't have an account? Creat one!"
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    height: 200,
  },
});

export default SignInScreen;
