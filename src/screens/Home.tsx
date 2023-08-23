import {StyleSheet, View} from 'react-native';

import ProfileIcon from '../components/profile/ProfileIcon';
import Slider from '../components/custom/CustomSlider';
import {useAuthContext} from '../contexts/Auth';
import {LargeHeading} from '../components/custom/CustomHeading';
import HomeItems from '../components/home/HomeItems';
import {COLORS} from '../constants/colors';

const Home = () => {
  const {user} = useAuthContext();

  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <LargeHeading>{user?.name}</LargeHeading>
        <ProfileIcon />
      </View>

      <View>
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
    backgroundColor: COLORS.BACKGROUND_DARK,
  },
  topbar: {
    padding: 20,
    marginVertical: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#212121',
    justifyContent: 'space-between',
  },
});
