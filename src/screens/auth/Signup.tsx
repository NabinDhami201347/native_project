import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
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
        placeholder="name"
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

      <CustomButton title="Sign up" onPress={handleSubmit(handlePress)} />

      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <View>
          <Text style={styles.note}>Already have an account?</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.linkText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.note}>
        By signing up, you agree to our Terms of Service and Privacy Policy.
      </Text>
    </ScrollView>
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

export default Signup;
