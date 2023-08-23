import CustomBottomTab from './components/shared/BottomTabs/CustomBottomTab';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Community, Home, Library, Profile} from '../../screens';
import NoticesTabs from '../NoticesTabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeS" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const BottomTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomBottomTab {...props} />}>
      <Tab.Group
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          options={{tabBarLabel: 'Home'}}
          name="Home"
          component={StackNav}
        />
        <Tab.Screen
          options={{tabBarLabel: 'Notification'}}
          name="Notification"
          component={NoticesTabs}
        />
        <Tab.Screen
          options={{tabBarLabel: 'Library'}}
          name="Library"
          component={Library}
        />
        <Tab.Screen
          options={{tabBarLabel: 'Community'}}
          name="Community"
          component={Community}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};
export default BottomTabs;
