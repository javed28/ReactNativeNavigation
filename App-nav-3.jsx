
import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Users from './src/users';
import Home from './src/home';
import CustomeDrawer from './src/utils/customeDrawer';


const Drawer = createDrawerNavigator()


const App = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={(props) => <CustomeDrawer{...props} />}>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Users" component={Users} initialParams={{ id: 20, data: 'dasdas' }} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default App


