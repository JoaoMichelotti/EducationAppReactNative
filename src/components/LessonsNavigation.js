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
                   {currentImagem + 1 == props.imagens.length ? 
                   <Pressable onPress={() => props.navegacao.goBack()} 
                   style={{backgroundColor: "#ed6d12", padding: 10, borderRadius: 8, elevation: 5, width: 180, borderColor: "black", borderWidth: 2}}
                   >
                        <Text style={{textAlign: "center",
                            color: "#fff", 
                            fontSize: 20
                        }}>Finalizar</Text>
                   </Pressable>
                   
                   : 
                   <Pressable
                   onPress={() => setCurrentImagem(currentImagem + 1)}
                   style={{backgroundColor: "#ed6d12", padding: 10, borderRadius: 8, elevation: 5, width: 180, borderColor: "black", borderWidth: 2}}>
                    <Text
                    style={{textAlign: "center",
                        color: "#fff", 
                        fontSize: 20
                    }}>Próximo</Text>
                   </Pressable>
                   }
            </View>
        </View>
    )



}