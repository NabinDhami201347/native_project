import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

import {useAuthContext} from '../contexts/Auth';

import ProfileCard from '../components/profile/ProfileCard';
import CustomCard from '../components/custom/CustomCard';
import CustomButton from '../components/custom/CustomButton';
import {COLORS} from '../constants/colors';

const ProfileScreen = ({navigation}: any) => {
  const {removeTokens} = useAuthContext();
  const handleLogout = () => {
    removeTokens();
  };

  const handlePress = () => {
    navigation.navigate('ChangePassword');
  };

  return (
    <View style={styles.container}>
      <ProfileCard />

      <View style={{flexDirection: 'row'}}>
        <CustomCard
          title="Department"
          icon="home"
          content="Computer Engineering"
        />
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        <CustomCard title="Semester" icon="calendar" content="Eight" />
        <CustomCard title="Library Books" icon="book" content="6" />
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        <CustomCard title="Total Subjects" icon="calendar" content="24" />
        <CustomCard title="Subject Passed" icon="book" content="24" />
      </View>

      <TouchableOpacity style={{flexDirection: 'row'}} onPress={handlePress}>
        <CustomCard
          title="Change Password"
          icon="lock"
          content="Change your password freqeuntly!!"
        />
      </TouchableOpacity>

      <View style={{flexDirection: 'row'}}>
        <CustomButton title="Logout" onPress={handleLogout} />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.BACKGROUND_DARK,
    paddingHorizontal: 20,
  },
});
