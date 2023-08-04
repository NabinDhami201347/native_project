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
import LoginImage from '../../assets/svgs/LoginImage';

const Login = ({navigation}: any) => {
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <LoginImage />
      </View>

      <View style={{marginTop: 50}}>
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
          control={control}
          placeholder="password"
          ref={passwordInputRef}
          onSubmitEditing={handleSubmit(handlePress)}
        />
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}

      <CustomButton title="Sign in" onPress={handleSubmit(handlePress)} />

      <View
        style={{
          flexDirection: 'column',
          paddingLeft: 80,
          marginVertical: 10,
          gap: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}>
          <Text style={{color: 'white'}}>Don't have an account ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.linkText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.linkText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
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
  linkText: {
    color: '#B508F1',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  errorText: {
    color: 'red',
    textAlign: 'right',
    marginBottom: 10,
  },
});

export default Login;
