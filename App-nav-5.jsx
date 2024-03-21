

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { ScreenContainer } from 'react-native-screens';
import Users from './src/users';
import Home from './src/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const defaultHeader = {
    headerTitleAlign: 'center',
    headerStyle: {
        backgroundColor: 'red',
        borderBottomWidth: '6',
        borderBottomColor: 'blue'
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        textDecorationLine: 'line-through'
    }
}


const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{
                activeTintColor: 'red', inactiveTintColor: 'green', activeBackgroundColor: 'blue',
                style: { backgroundColor: 'grey' },
                labelStyle: { fontSize: 20 }
            }}>
                <Tab.Screen name='Home' component={Home} options={{ tabBarLabel: 'Homeeee' }} />
                <Tab.Screen name='Users' component={Users} initialParams={{ id: 20, data: 'dasdadsa' }} />
            </Tab.Navigator>
        </NavigationContainer >
    )
}

export default App