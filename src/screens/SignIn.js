import React, { useState} from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import Tela1 from "../components/Tela1";
import estilo from "../styles/estilo";
import criarUser from "../functions/CriarUser";
export default function SignIn(props){

    const [registro, setRegistro] = useState({
        user: "",
        pass: "",
        passAgain: ""
    })


    function Enviar() {

        if (registro.user != "" && registro.pass != "" && registro.passAgain != "") {

            if (registro.pass == registro.passAgain) {
                criarUser(registro.user, registro.pass).then(() => {

                    alert("Registro criado com sucesso!")
                    props.navigation.navigate("Login")
                }).catch(() => {

                    alert("Ocorreu algum erro!")


                })
            }
            else {
                alert("As senhas não coincidem")
            }
        }else {
            alert("Preencha todos os campos!")
        }
    }


    return(
        <Tela1>
            <View style={estilo.inputFields}>
                <Text style={{fontSize: 20}}>Registrar</Text>

                <TextInput
                placeholder="usuário"
                style={estilo.input}
                value={registro.user}
                onChangeText={ (user) => setRegistro({...registro, user: user})}
                />

                <TextInput
                placeholder="senha"
                secureTextEntry={true}
                style={estilo.input}
                value={registro.pass}
                onChangeText={ (pass) => setRegistro({...registro, pass: pass})}/>

                <TextInput
                placeholder="repita a senha"
                secureTextEntry={true}
                style={estilo.input}
                value={registro.passAgain}
                onChangeText={ (passAgain) => setRegistro({...registro, passAgain: passAgain})}/>

                <Pressable style={estilo.press}
                onPress={Enviar}>
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