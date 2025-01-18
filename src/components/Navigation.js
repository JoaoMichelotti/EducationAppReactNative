import React from "react";
import {View, Image} from "react-native"

export default function Navigation(props) {

    return (
        <View style={{flexDirection: "row", justifyContent: "flex-start"}}>
            <Image source={require("../../assets/leftArrow.png")} />
        </View>
    )


}