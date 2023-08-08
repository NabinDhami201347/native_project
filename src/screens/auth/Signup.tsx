import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {Picker as SelectPicker} from '@react-native-picker/picker';

import {publicInstance} from '../../api';
import CustomButton from '../../components/custom/CustomButton';
import ControlledInput from '../../components/custom/ControlledInput';
import {zodResolver} from '@hookform/resolvers/zod';

import {RegisterInput, registerUserSchema} from '../../schema';
import {useForm} from 'react-hook-form';

const Signup = ({navigation}: any) => {
  const [error, setError] = useState('');
  const {control, handleSubmit} = useForm<RegisterInput>({
    resolver: zodResolver(registerUserSchema),
  });

  const [font, setFont] = useState(14.5);
  const [semester, setSemester] = useState('');
  const [department, setDepartment] = useState('');
  const [colorSemester, setColorSemester] = useState('#999999');
  const [colorDepartment, setColorDepartment] = useState('#999999');

  const nameInputRef = useRef<TextInput | null>(null);
  const emailInputRef = useRef<TextInput | null>(null);
  const passwordInputRef = useRef<TextInput | null>(null);
  const passwordConfirmationInputRef = useRef<TextInput | null>(null);

  const handleDepartmentChange = (itemValue: any) => {
    setDepartment(itemValue);
    setColorDepartment(itemValue ? '#FFFFFF' : '#999999');
    setFont(14.5);
  };
  const handleSemesterChange = (itemValue: any) => {
    setSemester(itemValue);
    setColorSemester(itemValue ? '#FFFFFF' : '#999999');
    setFont(14.5);
  };

  const handlePress = async (data: RegisterInput) => {
    try {
      await publicInstance.post('/auth/register', data);
      navigation.navigate('SignIn');
    } catch (error: any) {
      setError(error.response.data.error);
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

      {/* <View style={styles.inputContainer}>
        <Ionicons name="school" size={22} color="#999999" style={styles.icon} />
        <View style={styles.pickerContainer}>
          <SelectPicker
            selectedValue={department}
            style={[styles.picker, {color: colorDepartment}]}
            onValueChange={handleDepartmentChange}>
            <SelectPicker.Item
              label="Select Department"
              value=""
              style={{fontSize: font}}
            />
            <SelectPicker.Item
              label="Computer"
              value="Computer"
              style={{fontSize: font}}
            />
            <SelectPicker.Item
              label="Civil"
              value="Civil"
              style={{fontSize: font}}
            />
            <SelectPicker.Item label="IT" value="IT" style={{fontSize: font}} />
            <SelectPicker.Item
              label="Electronics"
              value="Electronics"
              style={{fontSize: font}}
            />
            <SelectPicker.Item
              label="Software"
              value="Software"
              style={{fontSize: font}}
            />
            <SelectPicker.Item
              label="BCA"
              value="BCA"
              style={{fontSize: font}}
            />
          </SelectPicker>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Ionicons
          name="calendar"
          size={22}
          color="#999999"
          style={styles.icon}
        />
        <View style={styles.pickerContainer}>
          <SelectPicker
            selectedValue={semester}
            style={[styles.picker, {color: colorSemester}]}
            onValueChange={handleSemesterChange}>
            <SelectPicker.Item
              label="Select Semester"
              value=""
              style={{fontSize: font}}
            />
            <SelectPicker.Item
              label="Semester 1"
              value="semester1"
              style={{fontSize: font}}
            />
            <SelectPicker.Item
              label="Semester 2"
              value="semester2"
              style={{fontSize: font}}
            />
            <SelectPicker.Item
              label="Semester 3"
              value="semester3"
              style={{fontSize: font}}
            />
            <SelectPicker.Item
              label="Semester 4"
              value="semester4"
              style={{fontSize: font}}
            />
            <SelectPicker.Item
              label="Semester 5"
              value="semester5"
              style={{fontSize: font}}
            />
            <SelectPicker.Item
              label="Semester 6"
              value="semester6"
              style={{fontSize: font}}
            />
            <SelectPicker.Item
              label="Semester 7"
              value="semester7"
              style={{fontSize: font}}
            />
            <SelectPicker.Item
              label="Semester 8"
              value="semester8"
              style={{fontSize: font}}
            />
          </SelectPicker>
        </View>
      </View> */}

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

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    width: 370,
    height: 47.5,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#212121',
    fontSize: 14.5,
  },
  icon: {
    padding: 13,
  },
  pickerContainer: {
    flex: 1,
    marginLeft: -8,
  },
  picker: {
    color: 'white',
  },
});

export default Signup;
