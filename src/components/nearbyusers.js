import { Text, TouchableOpacity, View, FlatList } from "react-native"
import { useRoute } from '@react-navigation/native'
import { useEffect, useState } from "react";




const NearByUserItem = (props) => {
    const data = props.data
    return (
        <TouchableOpacity>
            <View>
                <Text>
                    {data.id}
                </Text>
            </View>
        </TouchableOpacity>

    )
}


const NearByUsers = () => {

    const route = useRoute();
    const { id, data } = route.params


    const [fetchUserData, setUserData] = useState(undefined);

    const getAPIData = async () => {
        const url = ("https://jsonplaceholder.typicode.com/posts")
        let result = await fetch(url)
        result = await result.json();
        setUserData(result)
    }

    useEffect(() => {
        getAPIData()
    }, []);

    return (
        <>
            <Text> id : {id} </Text>
            <Text> near By : {data}</Text>
            {
                fetchUserData ?
                    <FlatList
                        data={fetchUserData}
                        keyExtractor={item => { item.id }}
                        renderItem={({ item }) => <NearByUserItem data={item}></NearByUserItem>}
                    />
                    :
                    <Text>
                        No Data Exits
                    </Text>
            }
        </>

    )
}

export default NearByUsers
