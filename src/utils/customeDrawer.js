import React from "react"
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Text } from "react-native"

const CustomeDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <Text>HEllo User</Text>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

export default CustomeDrawer