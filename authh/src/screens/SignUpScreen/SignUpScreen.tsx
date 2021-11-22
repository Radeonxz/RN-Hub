import React, {useState} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  useWindowDimensions,
  Text,
} from 'react-native';

import Logo from '../../../assets/images/Logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUpScreen = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn('Signing in...');
  };

  const onSignUpPressed = () => {
    console.warn('Signing up...');
  };

  const onResetPasswordPressed = () => {
    console.warn('Reset password');
  };

  const onSignInOAuthPressed = (partner: string) => {
    console.warn('Signing in with ', partner);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
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

        <Button
          onPress={() => onSignInOAuthPressed('Apple')}
          text="Sign in with Apple"
          bgColor="#e3e3e3"
          fgColor="#363636"
        />
        <Button
          onPress={() => onSignInOAuthPressed('Facebook')}
          text="Sign in with Facebook"
          bgColor="#e7eaf4"
          fgColor="#4765a9"
        />
        <Button
          onPress={() => onSignInOAuthPressed('Google')}
          text="Sign in with Google"
          bgColor="#fae9ea"
          fgColor="#dd4d44"
        />

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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
});

export default SignUpScreen;
