import React, {useState} from 'react';
import {View, Image, StyleSheet, useWindowDimensions} from 'react-native';

import Logo from '../../../assets/images/Logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignInScreen = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    console.log('Signing in...');
  };

  return (
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
    </View>
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
