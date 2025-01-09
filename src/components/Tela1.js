import React from "react";
import { View, StatusBar, Image, ScrollView, Text } from "react-native";
import estilo from "../styles/estilo"

export default function Tela1(props){

    return(
        <ScrollView style={estilo.tela1}>

            <StatusBar barStyle={"light-content"}/>

            <View style={{height: "250"}}>
                <Image
                source={require("../../assets/LoginImg.jpeg")}
                style={estilo.imgLogin}/>
            </View>

             <Text style={estilo.tituloLogin}>Bem-vindo ao GeeksEdu</Text>

            {props.children}
        </ScrollView>

    )


}