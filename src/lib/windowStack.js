import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './../screens/Login/Login';
import { Chat } from '../screens/Chat/Chat';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name="Login" component={Login} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name="Chat" component={Chat} options={{
                    headerShown: false,
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;