import React from "react";
import TelasGerais from "../components/TelasGerais";
import { View, Text, Image, Pressable } from "react-native";
import Navigation from "../components/Navigation";

export default function CourseDetails(props) {

    const {name, source, by, about, topicos, infos} = props.route.params;

    return (
        <TelasGerais>
            <Navigation navegacao={props.navigation}/>

            <View>
                <Text style={{fontSize: 25, marginTop: 10, fontWeight: "bold"}}>{name}</Text>
                <Text style={{color: "gray"}}>{by}</Text>
                <Image source={source} style={{width: window.width, height: 225,
                    borderRadius: 10, marginTop: 10
                }}/>
            </View>

            <Text style={{fontSize: 18, fontWeight: "bold",
                marginTop: 20
            }}>Sobre este curso</Text>
            <Text style={{textAlign: "justify", marginTop: 5 }}>{about}</Text>

            <View style={{marginTop: 50}}>

            <Text style={{fontSize: 18, fontWeight: "bold"}}>Conteudos do curso</Text>
            {topicos ? topicos.map((item, index) => {
                return (
                    <Pressable key={index} onPress={() => props.navigation.navigate("Lessons", {topico: item})}>
                        <Text style={{backgroundColor: "#fff", marginVertical: 8, fontSize: 16, padding: 10, borderRadius: 8, textAlign: "center", elevation: 5}}
                        >{item}</Text>
                    </Pressable>
                )
            }) : null}
            </View>


        </TelasGerais>

    )
}