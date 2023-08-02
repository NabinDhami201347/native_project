import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Change,
  Forgot,
  Home,
  Profile,
  Login,
  Signup,
  Notices,
  Department,
  College,
  University,
  Notice,
  Posts,
  Post,
  Library,
  Book,
} from '../screens';

import ProfileIcon from '../components/ProfileIcon';
import {useAuthContext} from '../contexts/Auth';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const MaterialTopTab = createMaterialTopTabNavigator();

const NoticeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Notices" component={NoticeTabs} />
      <Stack.Screen name="Notice" component={Notice} />
    </Stack.Navigator>
  );
};

const NoticeTabs = () => {
  return (
    <MaterialTopTab.Navigator
      screenOptions={{tabBarItemStyle: {padding: 0}}}
      sceneContainerStyle={{backgroundColor: 'black'}}>
      <MaterialTopTab.Screen name="All" component={Notices} />
      <MaterialTopTab.Screen name="Department" component={Department} />
      <MaterialTopTab.Screen name="College" component={College} />
      <MaterialTopTab.Screen name="University" component={University} />
    </MaterialTopTab.Navigator>
  );
};

const CommunityStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerRight: () => <ProfileIcon />}}>
      <Stack.Screen name="Community" component={Posts} />
      <Stack.Screen name="Post" component={Post} />
    </Stack.Navigator>
  );
};

const LibraryStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerRight: () => <ProfileIcon />}}>
      <Stack.Screen name="Library" component={Library} />
      <Stack.Screen name="Book" component={Book} />
    </Stack.Navigator>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerRight: () => <ProfileIcon />,
        tabBarActiveTintColor: 'red',
        tabBarIcon: ({color, size, focused}) => {
          let iconName: string = ''; // Initialize with
          let IconComponent: any;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            IconComponent = Ionicons;
          } else if (route.name === 'NoticeHome') {
            iconName = focused ? 'notifications' : 'notifications-outline';
            IconComponent = Ionicons;
          } else if (route.name === 'CommunityStack') {
            iconName = focused ? 'chat' : 'chat-outline';
            IconComponent = MaterialCommunityIcons;
          } else if (route.name === 'LibraryHome') {
            iconName = focused ? 'book' : 'book-outline';
            IconComponent = Ionicons;
          }
          return <IconComponent name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} options={{title: 'Home'}} />
      <Tab.Screen
        name="NoticeHome"
        component={NoticeStack}
        options={{headerShown: false, title: 'Notices'}}
      />
      <Tab.Screen
        name="LibraryHome"
        component={LibraryStack}
        options={{headerShown: false, title: 'Library'}}
      />
      <Tab.Screen
        name="CommunityStack"
        component={CommunityStack}
        options={{headerShown: false, title: 'NCIT Society'}}
      />
    </Tab.Navigator>
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
const PrivateStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={Tabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerBackTitleVisible: false}}
      />
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
