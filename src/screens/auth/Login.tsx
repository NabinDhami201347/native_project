import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import CustomButton from '../../components/CustomButton';
import ControlledInput from '../../components/ControlledInput';
import {publicInstance} from '../../api';
import {useAuthContext} from '../../contexts/Auth';
import {LoginInput, loginUserSchema} from '../../schema/login';

const Login = ({navigation}: any) => {
  const [error, setError] = useState('');
  const {control, handleSubmit} = useForm<LoginInput>({
    resolver: zodResolver(loginUserSchema),
  });
  const {setTokens} = useAuthContext();

  const emailInputRef = useRef<TextInput | null>(null);
  const passwordInputRef = useRef<TextInput | null>(null);

  const handlePress = async (user: LoginInput) => {
    try {
      const {data} = await publicInstance.post('/auth/login', user);

      setTokens(data.access_token, data.refresh_token);
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
        icon="lock"
        name="password"
        secureTextEntry
        control={control}
        placeholder="password"
        ref={passwordInputRef}
        onSubmitEditing={handleSubmit(handlePress)}
      />

      {error && <Text style={styles.errorText}>{error}</Text>}

      <CustomButton title="Sign in" onPress={handleSubmit(handlePress)} />

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.linkText}>Don't have an account?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.linkText}>Forgot Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Light gray background color
    justifyContent: 'center', // Center contents vertically
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  linkText: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    textAlign: 'right',
    marginBottom: 10,
  },
});

export default Login;
