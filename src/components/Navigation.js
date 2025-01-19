import React from "react";
import {View, Image, Pressable} from "react-native"

export default function Navigation(props) {

    return (
        <View style={{flexDirection: "row", justifyContent: "flex-start", 
        }}>
            <Pressable onPress={() => props.navegacao.navigate("Home")}>
                <Image source={require("../../assets/leftArrow.png")}
                style={{width: 30, height: 30}} />
            </Pressable>   
        </View>
    )


}