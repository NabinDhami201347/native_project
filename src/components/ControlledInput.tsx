import React, {forwardRef, Ref} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Control, Controller} from 'react-hook-form';
import {Text} from 'react-native-paper';

type ControlledInputProps = {
  // control: Control;
  control: any;
  name: string;
  icon: string;
} & React.ComponentProps<typeof TextInput>;

const ControlledInput = (
  {control, name, icon, ...textInputProps}: ControlledInputProps,
  ref: Ref<TextInput>,
) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: {value, onChange, onBlur},
        fieldState: {error, invalid},
      }) => (
        <View>
          <View style={styles.inputContainer}>
            <Icon name={icon} size={20} color="gray" style={styles.icon} />
            <TextInput
              ref={ref}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              {...textInputProps}
              style={styles.input}
            />
          </View>
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
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 15,
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
});

export default forwardRef(ControlledInput);
