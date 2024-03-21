import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { ScreenContainer } from 'react-native-screens';
import Users from './src/users';
import Home from './src/home';
import NearByUsers from './src/components/nearbyusers';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createNativeStackNavigator();

const DrawerStack = () => (
    <Drawer.Navigator>
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='Users' component={TabStack} />
        <Drawer.Screen name='Posts'>
            {props => <Text>Posts main</Text>}
        </Drawer.Screen>
    </Drawer.Navigator>
)


const Tab = createBottomTabNavigator();
const TabStack = () => (
    <Tab.Navigator>
        <Tab.Screen name='Users' component={Users} initialParams={{ id: 20, data: 'By default' }} options={{ headerShown: false }} />
        <Tab.Screen name='Users_Settings' options={{ headerShown: false }}>
            {props => <Text> Users Settingss</Text>}
        </Tab.Screen>
        <Tab.Screen name='Users_Pssts' options={{ headerShown: false }}>
            {props => <Text>Users Postss</Text>}
        </Tab.Screen>
    </Tab.Navigator>
)

const Drawer = createDrawerNavigator();

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

            <Stack.Navigator>
                <Stack.Screen name='Home' component={DrawerStack} options={{ headerShown: false }} />
                <Stack.Screen name='NearByUsers' component={NearByUsers} />
                <Stack.Screen name='Home_settings'>
                    {props => <Text>Home Settings</Text>}
                </Stack.Screen>
                <Stack.Screen name='Home_posts'>
                    {props => <Text>Home Posts</Text>}
                </Stack.Screen>
            </Stack.Navigator >

        </NavigationContainer >
    )
}

export default App