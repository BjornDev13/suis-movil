import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import LoginScreen from './app/pages/LoginSceen';
import PrincipalPages from './app/pages/PrincipalPages';
import Form from './app/pages/Form';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GlobalContextProvider from './app/context/MyContext';
const Stack = createStackNavigator();
export default function App() {
  return (
    <GlobalContextProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
          />
          <Stack.Screen name="PrincipalPages" component={PrincipalPages} />
          <Stack.Screen name="Form" component={Form} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </GlobalContextProvider>
  );
}


