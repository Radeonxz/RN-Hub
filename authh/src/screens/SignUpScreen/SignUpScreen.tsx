import React, {useState} from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import Input from '../../components/Input';
import Button from '../../components/Button';
import SocialSignInButtons from '../../components/SocialSignInButtons';

const SignUpScreen = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const navigation = useNavigation();

  const onSignUpPressed = () => {
    console.warn('Signing up...');
    navigation.navigate('ConfirmEmail');
  };

  const onSignInPressed = () => {
    console.warn('Signing in...');
    navigation.navigate('SignIn');
  };

  const onTermsOfUsePressed = () => {
    console.warn('Terms of use pressed...');
  };

  const onPrivacyPressed = () => {
    console.warn('Privacy pressed...');
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
          value={email}
          setValue={setEmail}
          placeholder="Email"
          secureTextEntry={false}
        />
        <Input
          value={password}
          setValue={setPassword}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Input
          value={confirmPassword}
          setValue={setConfirmPassword}
          placeholder="Confirm password"
          secureTextEntry={true}
        />

        <Button onPress={onSignUpPressed} text="Sign up" />

        <Text style={styles.text}>
          By signing up, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>

        <SocialSignInButtons />

        <Button
          onPress={onSignInPressed}
          text="Already have an account? Sign in here!"
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
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default SignUpScreen;
