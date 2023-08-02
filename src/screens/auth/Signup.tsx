import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import React, {useRef, useState} from 'react';
import {publicInstance} from '../../api';
import CustomButton from '../../components/CustomButton';
import ControlledInput from '../../components/ControlledInput';
import {zodResolver} from '@hookform/resolvers/zod';
import {RegisterInput, registerUserSchema} from '../../schema/register';
import {useForm} from 'react-hook-form';

const Signup = ({navigation}: any) => {
  const [error, setError] = useState('');
  const {control, handleSubmit} = useForm<RegisterInput>({
    resolver: zodResolver(registerUserSchema),
  });

  const nameInputRef = useRef<TextInput | null>(null);
  const emailInputRef = useRef<TextInput | null>(null);
  const passwordInputRef = useRef<TextInput | null>(null);
  const passwordConfirmationInputRef = useRef<TextInput | null>(null);

  const handlePress = async (data: RegisterInput) => {
    try {
      await publicInstance.post('/auth/register', data);
      navigation.navigate('SignIn');
    } catch (error: any) {
      setError(error.response.data.error);
      console.error(error.response.data.error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ControlledInput
        icon="user"
        name="name"
        control={control}
        ref={nameInputRef}
        placeholder="email"
        onSubmitEditing={() => emailInputRef.current?.focus()}
      />
      <ControlledInput
        icon="envelope"
        name="email"
        control={control}
        ref={emailInputRef}
        placeholder="email"
        onSubmitEditing={() => passwordInputRef.current?.focus()}
      />

      <ControlledInput
        icon="lock"
        name="password"
        secureTextEntry
        control={control}
        placeholder="password"
        ref={passwordInputRef}
        onSubmitEditing={() => passwordConfirmationInputRef.current?.focus()}
      />
      <ControlledInput
        icon="lock"
        name="passwordConfirmation"
        secureTextEntry
        control={control}
        placeholder="confirm password"
        ref={passwordConfirmationInputRef}
        onSubmitEditing={handleSubmit(handlePress)}
      />

      {error && <Text style={styles.errorText}>{error}</Text>}

      <CustomButton title="Sign up" onPress={handleSubmit(handlePress)} />
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.linkText}>Already have an account? Sign in</Text>
      </TouchableOpacity>
      <Text style={styles.note}>
        By signing up, you agree to our Terms of Service and Privacy Policy.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: '#000',
  },
  icon: {
    paddingLeft: 20,
  },
  errorText: {
    color: 'red',
    textAlign: 'right',
    marginBottom: 10,
  },
  linkText: {
    color: 'blue',
    textAlign: 'center',
    marginBottom: 10,
  },
  note: {
    textAlign: 'center',
    color: '#888',
  },
});

export default Signup;
