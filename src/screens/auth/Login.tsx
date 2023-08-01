import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import {useForm} from 'react-hook-form';
import {z, ZodType} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';

import CustomButton from '../../components/CustomButton';
import ControlledInput from '../../components/ControlledInput';
import {publicInstance} from '../../api';
import {useAuthContext} from '../../contexts/Auth';

const UserSchema = z.object({
  email: z.string().email('Invalid email address:'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

type UserType = ZodType<typeof UserSchema>;

const Login = ({navigation}: any) => {
  const [error, setError] = useState('');
  const {control, handleSubmit} = useForm<UserType>({
    resolver: zodResolver(UserSchema),
  });
  const {setTokens} = useAuthContext();

  const emailInputRef = useRef<TextInput | null>(null);
  const passwordInputRef = useRef<TextInput | null>(null);

  const handlePress = async (user: UserType) => {
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
        icon="user"
        name="email"
        control={control}
        ref={emailInputRef}
        placeholder="Enter your email address"
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
