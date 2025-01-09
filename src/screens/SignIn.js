import React from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import Tela1 from "../components/Tela1";
import estilo from "../styles/estilo";
export default function SignIn(){

    return(
        <Tela1>
            <View style={estilo.inputFields}>
                <Text style={{fontSize: 20}}>Registrar</Text>

                <TextInput
                placeholder="usuário"
                style={estilo.input}
                />

                <TextInput
                placeholder="senha"
                secureTextEntry={true}
                style={estilo.input}/>

                <TextInput
                placeholder="repita a senha"
                secureTextEntry={true}
                style={estilo.input}/>

                <Pressable style={estilo.press}>
                    <Text style={
                                    {
                                        paddingVertical: 16,
                                        textAlign: "center",
                                        fontSize: 15,
                                        color: "#fbf8d5"
                                    }} >Criar</Text>
                </Pressable>
                
            </View>
        </Tela1>
    )


}