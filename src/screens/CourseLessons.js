import React from "react";
import { View, Text, Image } from "react-native";
import TelasGerais from "../components/TelasGerais";
import LessonsNavigations from "../components/LessonsNavigation";
export default function CourseLessons(props){

    const {id, infos} = props.route.params;

    return (

        <TelasGerais>
            {infos.map((item, index) => {

                if (item.id == id)  {
                    
                    return (
                        <View key={index}>
                            <LessonsNavigations imagens={item.imagens} navegacao={props.navigation}/>         
                        </View>
                        

                    )            
             }
            })}
        </TelasGerais>
    )
}