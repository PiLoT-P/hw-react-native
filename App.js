import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Registration from './Screens/RegistrationScreen';
import { useFonts } from 'expo-font';
import Login from './Screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Home from './Screens/signedIn/Home';
import { useState } from 'react';
import Comments from './Screens/signedIn/CommentsScreen';
import Map from './Screens/signedIn/MapScreen';

const MainStack = createStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  const [isSignedIn, setIsSignedIn] = useState(true);

  if (!fontsLoaded) {
    return null;
  }

  if (isSignedIn == true) {
    return (
      <NavigationContainer>
        <MainStack.Navigator>
          <MainStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <MainStack.Screen name="Comments" component={Comments} options={{
            title: "Коментарі",
            headerStyle: {
              borderBottomWidth: 0.5,
              borderBottomColor: '#0000004d',
            },  
            headerTitleStyle: {
              marginLeft: '40%',
              color: '#212121',
              fontFamily: 'Roboto-Medium',
              fontSize: 17,
              fontWeight: 500,
              lineHeight: 22,
            },
          }} />
          <MainStack.Screen name="Map" component={Map} options={{
            title: "Карта",
            headerStyle: {
              borderBottomWidth: 0.5,
              borderBottomColor: '#0000004d',
            },  
            headerTitleStyle: {
              marginLeft: '51%',
              color: '#212121',
              fontFamily: 'Roboto-Medium',
              fontSize: 17,
              fontWeight: 500,
              lineHeight: 22,
            },
          }}/>
        </MainStack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="Login">
          <MainStack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <MainStack.Screen name="Registration" component={Registration} options={{headerShown: false}}/>
        </MainStack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
