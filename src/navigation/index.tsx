import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useAuthContext} from '../contexts/Auth';
import {
  Book,
  Change,
  Community,
  Forgot,
  Home,
  Library,
  Login,
  Notice,
  Notices,
  Profile,
  Signup,
  CommunityPost,
  Syllabus,
  RoutineScreen,
  ResultScreen,
  AttendanceScreen,
} from '../screens';
import BottomTabs from './bottom/BottomTabs';

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
        tabBarActiveTintColor: 'white',
        tabBarActiveBackgroundColor: '#090C13',
        tabBarInactiveBackgroundColor: '#090C13',
        headerShown: false,
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
      {/* {access_token ? (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="HomeScreen" component={PrivateStack} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Notice" component={Notice} />
          <Stack.Screen name="CommunityPost" component={CommunityPost} />
          <Stack.Screen name="Book" component={Book} />
          <Stack.Screen name="Calendar" component={AcademicCalendarScreen} />
          <Stack.Screen name="Syllabus" component={Syllabus} />
          <Stack.Screen name="Routine" component={RoutineScreen} />
          <Stack.Screen name="ChangePassword" component={Change} />
          <Stack.Screen name="Result" component={ResultScreen} />
          <Stack.Screen name="Attendance" component={AttendanceScreen} />
        </Stack.Navigator>
      ) : (
        <PublicStack />
      )} */}

      <BottomTabs />
    </NavigationContainer>
  );
}
