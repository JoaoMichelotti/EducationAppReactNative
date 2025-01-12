import React, {useState, useEffect} from "react";
import { ScrollView, View, Text, Image } from "react-native";
import Entrar from "../functions/Entrar";
export default function Home(props) {

    const [isLogged, setIsLogged] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect( () => {

        Entrar().then( (res) => {

            if (res) {
                setIsLogged(res)
            }
            else {
                props.navigation.navigate("Login")
            }
        })
        .catch((erro) => {
            props.navigation.navigate("Login")
        }) 
    }, [])

    return(
        <ScrollView>
            
        </ScrollView>
    )
}