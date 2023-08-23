import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useAuthContext} from '../../contexts/Auth';
import {imageuri} from '../../api';

const ProfileIcon = () => {
  const navigation = useNavigation();
  const {user} = useAuthContext();

  const handlePress = () => {
    // @ts-ignore
    navigation.navigate('Profile');
  };

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={handlePress}>
        {user?.profile && user.profile.photo ? (
          <Image
            source={{uri: `${imageuri}${user?.profile.photo}`}}
            style={styles.image}
            resizeMode="cover"
          />
        ) : (
          <Image
            source={{
              uri: `https://avatars.githubusercontent.com/u/95552086?v=4`,
            }}
            style={styles.image}
            resizeMode="cover"
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ProfileIcon;

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
});
