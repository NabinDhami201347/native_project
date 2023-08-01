import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import React, {useState, useRef} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {publicInstance} from '../../api';
import {useAuthContext} from '../../contexts/Auth';
import CustomButton from '../../components/CustomButton';

interface Error {
  field: string;
  message: string;
}

const Login = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Error[]>([]);
  const emailInputRef = useRef<TextInput | null>(null);
  const passwordInputRef = useRef<TextInput | null>(null);

  const {setTokens} = useAuthContext();

  const handlePress = async () => {
    try {
      setErrors([]); // Clear any previous errors
      const {data} = await publicInstance.post('/auth/login', {
        email,
        password,
      });
      setTokens(data.access_token, data.refresh_token);
    } catch (error: any) {
      if (error.response && error.response.data) {
        if (error.response.data.errors) {
          const responseErrors: Error[] = error.response.data.errors;
          setErrors(responseErrors); // Set the errors array with specific field errors
        } else if (error.response.data.error) {
          setErrors([
            {
              field: 'general',
              message: error.response.data.error,
            },
          ]); // Set the error message with the key "error"
        } else {
          setErrors([
            {
              field: 'general',
              message: 'An error occurred. Please try again.',
            },
          ]); // Fallback error message
        }
      } else {
        setErrors([
          {
            field: 'general',
            message: 'An error occurred. Please try again.',
          },
        ]); // Fallback error message
      }
    }
  };

  const getErrorMessageForField = (field: string) => {
    const fieldError = errors.find(err => err.field === field);
    return fieldError ? fieldError.message : '';
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="gray" style={styles.icon} />
        <TextInput
          ref={emailInputRef}
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          onSubmitEditing={() => passwordInputRef.current?.focus()}
        />
      </View>
      {getErrorMessageForField('body.email') !== '' && (
        <Text style={styles.errorText}>
          {getErrorMessageForField('body.email')}
        </Text>
      )}

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="gray" style={styles.icon} />
        <TextInput
          ref={passwordInputRef}
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          onSubmitEditing={handlePress}
        />
      </View>
      {getErrorMessageForField('body.password') !== '' && (
        <Text style={styles.errorText}>
          {getErrorMessageForField('body.password')}
        </Text>
      )}

      {getErrorMessageForField('general') !== '' && (
        <Text style={styles.errorText}>
          {getErrorMessageForField('general')}
        </Text>
      )}

      <CustomButton title="Sign in" onPress={handlePress} />

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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#fff', // White background for input containers
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: '#000', // Black text color for inputs
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
    marginTop: 10,
  },
});

export default Login;
