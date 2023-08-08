import {StyleSheet, View} from 'react-native';
import React from 'react';

import ProfileIcon from '../components/profile/ProfileCard';
import Slider from '../components/custom/CustomSlider';
import {useAuthContext} from '../contexts/Auth';
import {LargeHeading} from '../components/custom/CustomHeading';
import HomeItems from '../components/home/HomeItems';

const Home = () => {
  const {user} = useAuthContext();

  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <LargeHeading>{user?.name}</LargeHeading>
        <ProfileIcon />
      </View>

      <View style={{marginTop: 100}}>
        <Slider />
        <HomeItems />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090C13',
  },
  topbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#212121',
    justifyContent: 'space-between',
    padding: 20,
  },
});
