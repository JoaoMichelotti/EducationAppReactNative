import React, {useState} from "react";
import { View, Text, TextInput, ScrollView, Pressable } from "react-native";
import Tela1 from "../components/Tela1";
import estilo from "../styles/estilo";
export default function Login(props) {

    const [formulario, setFormulario] = useState({
        usuario: "",
        senha: ""
    })

    function SalvarFormulario() {

    }

    return(
        <Tela1>
                <View style={estilo.inputFields}>

                    <Text style={{
                        fontSize: 20
                    }}>Login</Text>

                    <TextInput 
                    onChangeText={ (user) => setFormulario({...formulario, usuario: user})}
                    placeholder="usuário"
                    value={formulario.usuario}
                    style={estilo.input}/>

                    <TextInput 
                    onChangeText={ (pass) => setFormulario({...formulario, senha: pass})}
                    placeholder="senha"
                    value={formulario.senha}
                    style={estilo.input}/>

                    <Pressable onPress={ SalvarFormulario }
                    style={estilo.press}>
                                <Text style={
                                    {
                                        paddingVertical: 16,
                                        textAlign: "center",
                                        fontSize: 15,
                                        color: "#fbf8d5"
                                    }
                                }>Enviar</Text>
                    </Pressable>
                    
                    <View style={{flexDirection: "row", gap: 2, justifyContent: "center", alignItems: "center"}}>
                        <Text style={estilo.infoFinal}>
                            Não possui conta? 
                        </Text>

                        <Pressable onPress={() => props.navigation.navigate("Registrar")}>
                            <Text style={{textDecorationLine: "underline",
                            }}>registrar-se</Text>
                        </Pressable>
                    </View>

                </View>
        </Tela1>
    )
}