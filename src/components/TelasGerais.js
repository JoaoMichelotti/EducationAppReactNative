import React from "react";
import { ScrollView, View, Text } from "react-native";

export default function TelasGerais(props) {

    return(
        <ScrollView style={{padding: 10}}>
            
             {props.children}
        
        </ScrollView>
    )



}