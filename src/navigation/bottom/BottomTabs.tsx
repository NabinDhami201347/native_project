import {Text, View} from 'react-native';
import CustomBottomTab from './components/shared/BottomTabs/CustomBottomTab';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Books = () => {
  return (
    <View style={{backgroundColor: 'green', flex: 1}}>
      <Text>Books</Text>
    </View>
  );
};
const Calendar = () => {
  return <Text>Calander</Text>;
};
const Home = () => {
  return <Text>Home</Text>;
};
const NotificationTopTabs = () => {
  return <Text>Notifiations</Text>;
};

const Tab = createBottomTabNavigator();

const BottomTabs = ({navigation}: any) => {
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
          component={Calendar}
        />
        <Tab.Screen
          options={{tabBarLabel: 'Books'}}
          name="book"
          component={Books}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};
export default BottomTabs;
