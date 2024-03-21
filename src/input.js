import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"


const Inputs = () => {

    const [myInput, setMyInput] = useState('');
    const [names, setNames] = useState(['Javed', 'Siddiqui']);

    const onChangeTextInput = (event) => {
        setMyInput(event)
    }

    const onAddUser = () => {
        const newState = [...names, myInput];
        setNames(newState);
        setMyInput('');
    }
    return (
        <><TextInput
            style={inputStyle.textInput}
            value={myInput}
            onChangeText={(e) => onChangeTextInput(e)}>
        </TextInput>
            <Button title="Submit" onPress={onAddUser} />
            <View>
                {
                    names.map(
                        name => (<Text style={inputStyle.user}>{name}</Text>)
                    )
                }
            </View>
        </>

    )

}

const inputStyle = StyleSheet.create({
    textInput: {
        width: '100%',
        backgroundColor: '#f2f2f2',
        marginTop: 20,
        borderColor: '#f2f2f2',
        borderRadius: 5,

    },

    user: {
        borderWidth: 1,
        fontSize: 20,
        borderColor: '#f3f2f4',
        padding: 10,
        marginBottom: 10,

    }
})

export default Inputs