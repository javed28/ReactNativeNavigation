import { Button, Text, TouchableOpacity, View, FlatList } from "react-native"
import Users from "./users"
import { Icon } from "react-native-elements"
import { useState } from "react";
import { useNavigation } from '@react-navigation/native'



const listData = [{
    name: 'Rent',
    id: '1'
}, {
    name: 'Buy',
    id: '2'
},
{
    name: 'Sell',
    id: '3'
}, {
    name: 'Heavy Deposite',
    id: '4'
}

]

const Item = (props) => {
    const navigation = useNavigation();
    const data = props.data
    return (
        <TouchableOpacity onPress={() => navigation.navigate('NearByUsers', { id: data.id, data: data.name })}>
            <View style={styles.item}>
                <Text >{data.name}</Text>
            </View>
        </TouchableOpacity>
    )
};

const Home = (props) => {
    const [selectId, setSelectId] = useState();
    return (
        <View>
            <FlatList
                numColumns={2}
                data={listData}
                renderItem={({ item }) => <Item data={item}></Item>}
                keyExtractor={item => item.id}
            />
        </View>
    )
}


const styles = {

    item: {
        flex: 1,// 100% devided by the number of rows you want
        alignItems: "center",
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 100,
        width: 100,
        // my visual styles; not important for the grid
        padding: 10,
        backgroundColor: "rgba(249, 180, 45, 0.25)",
        borderWidth: 1.5,
        borderColor: "#fff",
    }
};


export default Home