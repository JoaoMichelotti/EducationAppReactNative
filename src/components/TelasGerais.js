import React from "react";
import { ScrollView, View, Text } from "react-native";

export default function TelasGerais(props) {

    return(
        <ScrollView style={{padding: 10, backgroundColor: "#fbf0d0"}} contentContainerStyle={{paddingBottom: 20}}>
             {props.children}
        </ScrollView>
    )



}