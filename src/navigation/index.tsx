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
  CalendarScreen,
} from '../screens';
import BottomTabs from './bottom/BottomTabs';

const Stack = createNativeStackNavigator();

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
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default function Routes() {
  const {access_token} = useAuthContext();

  return (
    <NavigationContainer>
      {access_token ? <BottomTabs /> : <PublicStack />}
    </NavigationContainer>
  );
}
