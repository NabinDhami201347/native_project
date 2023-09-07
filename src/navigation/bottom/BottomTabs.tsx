import CustomBottomTab from './components/shared/BottomTabs/CustomBottomTab';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  CalendarScreen,
  Community,
  CommunityPost,
  Home,
  Library,
  Profile,
} from '../../screens';
import NoticesTabs from '../NoticesTabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeS" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Calendar" component={CalendarScreen} />
    </Stack.Navigator>
  );
};

const CommunityStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="CommunityS"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="CommunityS" component={Community} />
      <Stack.Screen name="CommunityPost" component={CommunityPost} />
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
          component={CommunityStack}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};
export default BottomTabs;
