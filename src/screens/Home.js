import React, {useState, useEffect} from "react";
import { ScrollView, View, Text, Image } from "react-native";
import isLogged from "../functions/isLogged";
import TelasGerais from "../components/TelasGerais";
import Slider from "../components/Slider";
export default function Home(props) {

    const [logado, setIsLogged] = useState("")
    useEffect( () => {

        isLogged().then( (res) => {

            if (res) {
                setIsLogged(res)
            }
            else {
                props.navigation.navigate("Login")
            }
        })
        .catch((erro) => {
            console.log(erro)
        }) 
    }, [])

    return(
        <TelasGerais>
            <View style={{flexDirection: "row", justifyContent: "space-between",
                alignItems: "center"
            }}>
                <View>
                    <Text style={{width: 100, fontSize: 20}}>Olá</Text>
                    <Text style={{fontSize: 22, fontWeight: "bold"}}>{logado}!</Text>
                </View> 
                <Image
                source={require("../../assets/userLogo.png")}
                style={{width: 50, height: 50, borderRadius: 50}}
                />
            </View>

            <View style={{height: 200, marginTop: 30}}>  
                <Image
                source={require("../../assets/Education.jpg")}
                style={{width: "100%", height: "100%", borderRadius: 10}}/>
            </View>

            <Slider titulo="Cursos em vídeo"/>

        </TelasGerais>
      
    )
}