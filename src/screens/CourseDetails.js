import React from "react";
import TelasGerais from "../components/TelasGerais";
import { View, Text } from "react-native";

export default function CourseDetails(props) {

    const {name} = props.route.params;

    return (
        <TelasGerais>
            <View>
                <Text>{name}</Text>
            </View>


        </TelasGerais>

    )
}