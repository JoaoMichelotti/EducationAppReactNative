import React, {useState} from "react";
import { View, Text, TextInput, ScrollView, Pressable } from "react-native";
import Tela1 from "../components/Tela1";
import estilo from "../styles/estilo";
import Entrar from "../functions/Entrar";
export default function Login(props) {

    const [formulario, setFormulario] = useState({
        user: "",
        pass: ""
    })

    function SalvarFormulario() {

        if (formulario.user == "" || formulario.pass == "") {

            alert("Preencha todos os campos!")
        }
        else {
            Entrar(formulario)
                .then((resultado) => {
                    if (resultado) {
                        props.navigation.navigate("Home"); // Navega apenas com login válido
                    } else {
                        alert("Credenciais inválidas. Tente novamente.");
                    }
                })
                .catch((erro) => {
                    console.error("Erro ao tentar salvar formulário:", erro);
                    alert("Ocorreu um erro. Tente novamente mais tarde.");
                });
        }
    }

    return(
        <Tela1>
                <View style={estilo.inputFields}>

                    <Text style={{
                        fontSize: 20
                    }}>Login</Text>

                    <TextInput 
                    onChangeText={ (user) => setFormulario({...formulario, user: user})}
                    placeholder="usuário"
                    value={formulario.user}
                    style={estilo.input}/>

                    <TextInput 
                    onChangeText={ (pass) => setFormulario({...formulario, pass: pass})}
                    placeholder="senha"
                    value={formulario.pass}
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