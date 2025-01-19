import React from "react";
import TelasGerais from "../components/TelasGerais";
import { View, Text, Image } from "react-native";
import Navigation from "../components/Navigation";

export default function CourseDetails(props) {

    const {name, source} = props.route.params;

    return (
        <TelasGerais>
            <Navigation navegacao={props.navigation}/>

            <View>
                <Text style={{fontSize: 25, marginTop: 10, fontWeight: "bold"}}>{name}</Text>
                <Image source={source} style={{width: window.width, height: 225,
                    borderRadius: 10, marginTop: 10
                }}/>
            </View>

            <Text style={{fontSize: 16, fontWeight: "bold",
                marginVertical: 10
            }}>Sobre este curso</Text>



        </TelasGerais>

    )
}