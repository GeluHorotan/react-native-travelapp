import React from 'react';
import Home from './src/screens/Home';

// Navigation
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import 'react-native-gesture-handler';

// Screens
import AttractionDetails from './src/screens/AttractionDetails';
import Gallery from './src/screens/Gallery';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  const appTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff',
    },
  };

  return (
    <NavigationContainer theme={appTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AttractionDetails" component={AttractionDetails} />
        <Stack.Screen name="Gallery" component={Gallery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
