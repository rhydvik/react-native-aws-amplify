import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Input } from 'react-native-elements';
import { yupResolver } from '@hookform/resolvers';
import { useForm } from 'react-hook-form';
import { get } from 'lodash';
import { Auth } from 'aws-amplify';

import styles from './styles';
import { authForm } from '../../lib/schemas';
import Button from '../../components/Button';

import Logo from '../../components/Logo/Logo';
import { setRoot } from '../../lib/navigationHelpers';

// type Props = {
// };

const AuthScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, setValue, handleSubmit, errors } = useForm({
    resolver: yupResolver(authForm),
  });

  useEffect(() => {
    register({ name: 'email' });
    register({ name: 'password' });
  }, [register]);

  const onFormSubmit = (data: any) => {
    console.log(data, 'data');
    setIsLoading(true);
    Auth.signIn({
      username: get(data, 'email').toLowerCase(),
      password: get(data, 'password'),
    })
      .then(res => {
        console.log(res);
        setRoot('Home');
      })
      .catch(console.log)
      .finally(() => setIsLoading(false));
    // setRoot('OTP');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Logo />
      <View style={styles.container}>
        <Text style={styles.header}>Sign in with your phone</Text>
        <Text style={styles.subHeader}>
          Enter your phone number to get started
        </Text>
        <View style={styles.inputContainer}>
          <Input
            autoFocus
            onChangeText={text => setValue('email', text)}
            errorMessage={get(errors, 'email.message')}
            // leftIcon={<Icon name="mobile" size={24} color={PRIMARY} />}
            inputContainerStyle={styles.inputContainerStyle}
          />
          <Input
            autoFocus
            onChangeText={text => setValue('password', text)}
            errorMessage={get(errors, 'password.message')}
            // leftIcon={<Icon name="mobile" size={24} color={PRIMARY} />}
            inputContainerStyle={styles.inputContainerStyle}
          />
          <Button
            label="Login"
            onPress={handleSubmit(onFormSubmit)}
            isLoading={isLoading}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AuthScreen;
