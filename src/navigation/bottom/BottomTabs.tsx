import {Text, View} from 'react-native';
import CustomBottomTab from './components/shared/BottomTabs/CustomBottomTab';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CalendarScreen} from '../../screens';

const Library = () => {
  return (
    <View style={{backgroundColor: 'green', flex: 1}}>
      <Text>Books</Text>
    </View>
  );
};
const Home = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#272829'}}>
      <Text>Home</Text>
    </View>
  );
};

const NotificationTopTabs = () => {
  return <Text>Notifiations</Text>;
};

const Tab = createBottomTabNavigator();

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
          component={Home}
        />
        <Tab.Screen
          options={{tabBarLabel: 'Notification'}}
          name="Notification"
          component={NotificationTopTabs}
        />

        <Tab.Screen
          options={{tabBarLabel: 'Calendar'}}
          name="Calendar"
          component={CalendarScreen}
        />
        <Tab.Screen
          options={{tabBarLabel: 'Library'}}
          name="Library"
          component={Library}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};
export default BottomTabs;
