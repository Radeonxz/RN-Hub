import React, {useState} from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import Input from '../../components/Input';
import Button from '../../components/Button';

const ResetPasswordScreen = () => {
  const [username, setUsername] = useState<string>('');

  const navigation = useNavigation();

  const onSendPressed = () => {
    console.warn('Sending reset password email...');
    navigation.navigate('NewPassword');
  };

  const onSignInPressed = () => {
    console.warn('Signing in...');
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <Input
          value={username}
          setValue={setUsername}
          placeholder="Username"
          secureTextEntry={false}
        />

        <Button onPress={onSendPressed} text="Send" />

        <Button
          onPress={onSignInPressed}
          text="Back to Sign in"
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

export default ResetPasswordScreen;
