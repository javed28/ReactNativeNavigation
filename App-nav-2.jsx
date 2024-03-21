/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { ScreenContainer } from 'react-native-screens';
import Users from './src/users';
import Home from './src/home';
import LogoTitle from './src/utils/logotitle';


const Stack = createNativeStackNavigator()

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


const App2 = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{
                ...defaultHeader,
                headerTitle: props => LogoTitle(props)
            }}>
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
                <Stack.Screen name="Users" component={Users}
                    initialParams={{ id: 10, data: 'from default' }}
                //options={{ headerTitle: props => LogoTitle(props) }}
                ></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default App2


// const App = () => {

//   const [hello, setHello] = useState(true);

//   //const [names, setNames] = useState["test", "hello test"];

//   return (
//     <View style={styles.mainView}>
//       <ScrollView style={{ width: '100 %' }}>
//         <Image source={Testimage} style={styles.mountains} resizeMode='contain'></Image>
//         <View >
//           <Text >Hello</Text>
//         </View>
//         <View>
//           <Text >Hello</Text>
//         </View>
//         <Inputs>
//         </Inputs>
//         {
//           hello ? <Text>Hello Everybidy</Text> : null
//         }
//       </ScrollView>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   mainView: {
//     flex: 1,
//     paddingTop: 50,
//     alignItems: 'flex-start',
//     justifyContent: 'flex-start',
//   },
//   mountains: {
//     width: '100%',
//     height: 100,
//     marginTop: 10,

//   }
// })

// export default App;
