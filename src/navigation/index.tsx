import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Text} from 'react-native';
import {useAuthContext} from '../contexts/Auth';
import ProfileIcon from '../components/ProfileIcon';
import {Community, Notice, Notices, Profile} from '../screens';
import CommunityPost from '../screens/community/CommunityPost';

// Dummy Home screen
const Home = () => {
  return <Text>Hello from Home Screen</Text>;
};

// Dummy Login screen
const Login = () => {
  return <Text>Hello from Login Screen</Text>;
};

// Dummy Signup screen
const Signup = () => {
  return <Text>Hello from Signup Screen</Text>;
};

// Dummy Posts screen
const Posts = () => {
  return <Text>Hello from Posts Screen</Text>;
};

// Dummy Library screen
const Library = () => {
  return <Text>Hello from Library Screen</Text>;
};

const Forgot = () => {
  return <Text>Forgot Icon</Text>;
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const PublicStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={Login} />
      <Stack.Screen name="SignUp" component={Signup} />
      <Stack.Screen name="ForgotPassword" component={Forgot} />
    </Stack.Navigator>
  );
};

const PrivateStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerRight: () => <ProfileIcon />,
        tabBarActiveTintColor: 'red',
        tabBarIcon: ({color, size, focused}) => {
          let iconName = '';
          let IconComponent = null;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            IconComponent = Ionicons;
          } else if (route.name === 'Notices') {
            iconName = focused ? 'notifications' : 'notifications-outline';
            IconComponent = Ionicons;
          } else if (route.name === 'Community') {
            iconName = focused ? 'chat' : 'chat-outline';
            IconComponent = MaterialCommunityIcons;
          } else if (route.name === 'Library') {
            iconName = focused ? 'book' : 'book-outline';
            IconComponent = Ionicons;
          }

          return IconComponent ? (
            <IconComponent name={iconName} size={size} color={color} />
          ) : null;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Notices" component={Notices} />
      <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="Community" component={Community} />
    </Tab.Navigator>
  );
};

export default function Routes() {
  const {access_token} = useAuthContext();
  return (
    <NavigationContainer>
      {access_token ? (
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={PrivateStack}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Notice" component={Notice} />
          <Stack.Screen name="CommunityPost" component={CommunityPost} />
        </Stack.Navigator>
      ) : (
        <PublicStack />
      )}
    </NavigationContainer>
  );
}
