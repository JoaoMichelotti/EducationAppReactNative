import React, {useState} from "react";
import { View, Text, Image, Pressable } from "react-native";
import Navigation from "./Navigation";


export default function LessonsNavigations(props) {

    const [currentImagem, setCurrentImagem] = useState(0)


    return (
        <View>
      
            <Navigation navegacao={props.navegacao}/>
            <View style={{height: 500, width: window.width}}>
                <View style={{flex: 1}}>
                    <Image source={props.imagens[currentImagem]} style={{ height: "100%", width:"100%", borderRadius: 10}}
                    resizeMode="contain"/>
                </View> 
            </View>
            <View style={{flexDirection: "row", justifyContent: "center", marginHorizontal: 20}}>
                <Pressable>
                   {currentImagem + 1 == props.imagens.length ? <Text>Finalizar</Text>
                   : <Text>Próxima</Text>}
                </Pressable>
            </View>
        </View>
    )



}