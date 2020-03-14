import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Repost from './src/pages/Repost';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Repost" component={Repost} options={{ headerBackTitle: 'Voltar', }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;