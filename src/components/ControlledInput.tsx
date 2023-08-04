import React, {forwardRef, Ref, useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Control, Controller} from 'react-hook-form';
import {Text} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

type ControlledInputProps = {
  // control: Control;
  control: any;
  name: string;
  icon: string;
  password?: boolean;
} & React.ComponentProps<typeof TextInput>;

const ControlledInput = (
  {
    control,
    password = false,
    name,
    icon,
    ...textInputProps
  }: ControlledInputProps,
  ref: Ref<TextInput>,
) => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: {value, onChange, onBlur},
        fieldState: {error, invalid},
      }) => (
        <View>
          {password ? (
            <View style={styles.inputContainer}>
              <Icon name={icon} size={20} color="gray" style={styles.icon} />
              <TextInput
                ref={ref}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                {...textInputProps}
                style={styles.input}
                placeholderTextColor="#999999"
                secureTextEntry={showPassword ? true : false}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={{paddingRight: 10}}>
                <Ionicons
                  name={showPassword ? 'eye-off' : 'eye'}
                  size={22}
                  color="#888"
                />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.inputContainer}>
              <Icon name={icon} size={20} color="gray" style={styles.icon} />
              <TextInput
                ref={ref}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                {...textInputProps}
                style={styles.input}
                placeholderTextColor="#aaaaaa"
              />
            </View>
          )}
          {invalid && <Text style={styles.errorText}>{error?.message}</Text>}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#212121',
  },
  input: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 15,
    color: '#fff',
  },
  icon: {
    paddingLeft: 20,
  },
  errorText: {
    color: 'red',
    textAlign: 'right',
    marginBottom: 10,
  },
});

export default forwardRef(ControlledInput);
