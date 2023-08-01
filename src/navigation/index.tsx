import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {Change, Forgot, Home, Profile, Login, Signup} from '../screens';
import ProfileIcon from '../components/ProfileIcon';
import {useAuthContext} from '../contexts/Auth';

const Stack = createNativeStackNavigator();

const PrivateStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => <ProfileIcon />,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ChangePassword" component={Change} />
    </Stack.Navigator>
  );
};

const PublicStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={Login} />
      <Stack.Screen name="SignUp" component={Signup} />
      <Stack.Screen name="ForgotPassword" component={Forgot} />
    </Stack.Navigator>
  );
};

export default function Routes() {
  const {access_token} = useAuthContext();
  return (
    <NavigationContainer>
      {access_token ? <PrivateStack /> : <PublicStack />}
    </NavigationContainer>
  );
}
