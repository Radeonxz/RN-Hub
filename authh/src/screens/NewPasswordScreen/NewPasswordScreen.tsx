import React, {useState} from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

const NewPasswordScreen = () => {
  const [confirmationCode, setConfirmationCode] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');

  const onSubmitPressed = () => {
    console.warn('Submitting new password...');
  };

  const onSignInPressed = () => {
    console.warn('Signing in...');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <Input
          value={confirmationCode}
          setValue={setConfirmationCode}
          placeholder="Confirmation code"
          secureTextEntry={false}
        />

        <Input
          value={newPassword}
          setValue={setNewPassword}
          placeholder="Enter new password"
          secureTextEntry={false}
        />

        <Button onPress={onSubmitPressed} text="Submit" />

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

export default NewPasswordScreen;
