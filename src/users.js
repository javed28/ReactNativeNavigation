import { Button, Text } from "react-native"
import { useNavigation, useRoute } from '@react-navigation/native'

const Users = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { id, data } = route.params;

    return (
        <>
            <Text>Users:{data}</Text>
            <Text>ID:{id}</Text>
            <Button title="Go Back" onPress={() => navigation.navigate('Home', { active: 'yes' })}></Button>
            <Button onPress={() => navigation.setOptions({ title: 'something else' })} title="Change title"></Button>
        </>
    )
}

export default Users