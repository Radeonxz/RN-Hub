import React from 'react';
import {View, Image, StyleSheet, useWindowDimensions} from 'react-native';

import Logo from '../../../assets/images/Logo.png';
import Input from '../../components/Input';

const SignInScreen = () => {
  const {height} = useWindowDimensions();

  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />
      <Input />
      <Input />
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
