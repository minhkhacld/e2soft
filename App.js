import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import routes from './src/router/routes';
import { HomeTab, QuizzGameTab, SettingTab } from './src/components/pages/index';


const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStackScreen2 = () => {
  return (
    <Tab.Navigator
      initialRouteName='HomeTab'
      tabBarPosition="bottom"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'HomeTab') {
            iconName = focused
              ? 'home-edit-outline'
              : 'home';
          } else if (route.name === 'QuizGameTab') {
            iconName = focused ? 'gamepad-variant-outline' : 'gamepad-variant-outline';
          }
          else if (route.name === 'SettingTab') {
            iconName = focused ? 'cog-sync-outline' : 'cog';
          }
          // You can return any component that you like here!
          return <Icon name={iconName}
            size={focused ? 25 : 22}
            color={color} />;
        },
        tabBarActiveTintColor: route.name === 'HomeTab' ? "tomato"
          : route.name === 'QuizzGameTab' ? "white" : "white",
        tabBarInactiveTintColor: route.name === 'HomeTab' ? "grey" : "white",
        tabBarHideOnKeyboard: true,
        tarBarIndicatorStyle: {
          backgroundColor: 'white',
        },
        tabBarIndicatorStyle: {
          backgroundColor: route.name === 'HomeTab' ? "tomato" : 'white', height: 3
        },
        tabBarPressOpacity: { backgroundColor: 'tomato' },
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: route.name === 'HomeTab' ? "white"
            : "#009DAE",
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          height: 50,
          // height:hp('5%'),
          position: 'absolute',
          left: 0,
          bottom: 0,
          right: 0,
        },
        tabBarPressColor: route.name === 'HomeTab' ? '#8946A6' : "#D47AE8",
        elevation: 0,
        tabBarShowLabel: false,
      }
      )}
    >
      <Tab.Screen name="HomeTab" options={{ headerShown: false }} component={HomeTab} />
      <Tab.Screen name="QuizGameTab" options={{ headerShown: false }} component={QuizzGameTab} />
      <Tab.Screen name="SettingTab" options={{ headerShown: false }} component={SettingTab} />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name="HomeScreen" options={{ headerShown: false }} component={HomeStackScreen2} />
        {
          routes.map((route, index) => (
            <Stack.Screen name={route.name} key={index}
              options={route.option}
              component={route.component} />
          ))
        }

      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
