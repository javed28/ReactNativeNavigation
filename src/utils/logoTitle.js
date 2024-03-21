import React from "react"
import { Image } from "react-native"

import Logo from '../assets/titlelogo.png'

const LogoTitle = () => {
    return (
        <Image source={Logo} style={{ width: 50, height: 50 }}></Image>
    )
}

export default LogoTitle