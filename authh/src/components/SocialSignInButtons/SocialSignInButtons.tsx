import React from 'react';
import {View} from 'react-native';

import Button from '../Button';

const SocialSignInButtons = () => {
  const onSignInOAuthPressed = (partner: string) => {
    console.warn('Signing in with ', partner);
  };

  return (
    <View>
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
    </View>
  );
};

export default SocialSignInButtons;
