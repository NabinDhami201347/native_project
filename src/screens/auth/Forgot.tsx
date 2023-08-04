import {StyleSheet, Text, TextInput, View} from 'react-native';
import {zodResolver} from '@hookform/resolvers/zod';
import React, {useRef, useState} from 'react';
import {useForm} from 'react-hook-form';

import {publicInstance} from '../../api';
import CustomButton from '../../components/CustomButton';
import ControlledInput from '../../components/ControlledInput';

import {ForgotInput, forgotUserSchema} from '../../schema/forgot';

const Forgot = ({navigation}: any) => {
  const [error, setError] = useState('');
  const {control, handleSubmit} = useForm<ForgotInput>({
    resolver: zodResolver(forgotUserSchema),
  });
  const emailInputRef = useRef<TextInput | null>(null);
  const passwordInputRef = useRef<TextInput | null>(null);
  const passwordConfirmationInputRef = useRef<TextInput | null>(null);

  const handlePress = async (data: ForgotInput) => {
    try {
      await publicInstance.post('/auth/forgot', data);
      navigation.navigate('SignIn');
    } catch (error: any) {
      setError(error.response.data.error);
      console.error(error.response.data.error);
    }
  };

  return (
    <View style={styles.container}>
      <ControlledInput
        icon="envelope"
        name="email"
        control={control}
        ref={emailInputRef}
        placeholder="email"
        onSubmitEditing={() => passwordInputRef.current?.focus()}
      />

      <ControlledInput
        password
        icon="lock"
        name="password"
        secureTextEntry
        control={control}
        placeholder="password"
        ref={passwordInputRef}
        onSubmitEditing={() => passwordConfirmationInputRef.current?.focus()}
      />
      <ControlledInput
        password
        icon="lock"
        name="passwordConfirmation"
        secureTextEntry
        control={control}
        placeholder="confirm password"
        ref={passwordConfirmationInputRef}
        onSubmitEditing={handleSubmit(handlePress)}
      />

      {error && <Text style={styles.errorText}>{error}</Text>}

      <CustomButton
        title="Change Password"
        onPress={handleSubmit(handlePress)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090C13',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  errorText: {
    color: 'red',
    textAlign: 'right',
    marginBottom: 10,
  },
  linkText: {
    color: '#B508F1',
    marginHorizontal: 10,
    fontSize: 16,
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontWeight: '600',
  },
  note: {
    textAlign: 'center',
    color: '#888',
  },
});

export default Forgot;
