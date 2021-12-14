import React, {useState} from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import Input from '../../components/Input';
import Button from '../../components/Button';

const ConfirmEmailScreen = () => {
  const [confirmationCode, setConfirmationCode] = useState<string>('');

  const navigation = useNavigation();

  const onConfirmPressed = () => {
    console.warn('Confirming email...');
    navigation.navigate('Home');
  };

  const onResendPressed = () => {
    console.warn('Resending confirmation code...');
  };

  const onSignInPressed = () => {
    console.warn('Signing in...');
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>
        <Input
          value={confirmationCode}
          setValue={setConfirmationCode}
          placeholder="Enter email confirmation code"
          secureTextEntry={false}
        />

        <Button onPress={onConfirmPressed} text="Confirm" />

        <Button
          onPress={onResendPressed}
          text="Resend confirmation code"
          type="SECONDARY"
        />

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

export default ConfirmEmailScreen;
