import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import { ImageBackground } from 'react-native';

const Auth = createStackNavigator();
 
const AuthRoutes: React.FC = () => (
  <Auth.Navigator 
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: '#111c17',
      }
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
  </Auth.Navigator>
)


export default AuthRoutes;