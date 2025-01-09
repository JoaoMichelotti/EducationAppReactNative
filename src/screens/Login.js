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
                
                <Text style={estilo.tituloLogin}>Bem-vindo ao GeeksEdu</Text>

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

                    <Text style={estilo.infoFinal}>
                        Não possui conta? 
                        <Text style={{textDecorationLine: "underline",
                        }}>registrar-se</Text>
                    </Text>


                </View>
        </Tela1>

    )



}