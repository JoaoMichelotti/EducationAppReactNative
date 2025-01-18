import React from "react";
import TelasGerais from "../components/TelasGerais";
import { View, Text } from "react-native";
import Navigation from "../components/Navigation";

export default function CourseDetails(props) {

    const {name} = props.route.params;

    return (
        <TelasGerais>
            <View>
                <Navigation/>
                <Text>{name}</Text>
            </View>


        </TelasGerais>

    )
}