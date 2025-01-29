import React, {useState, useEffect} from "react";
import { View, Image, FlatList, Text, Pressable } from "react-native";
import estilo from "../styles/estilo";

export default function Slider(props) {

    const [dados, setDados] = useState(props.data)
    const [composto, setComposto] = useState(false)

    useEffect(() => {

        {props.estado ? setComposto(props.estado) : null}

    }, [])

    const renderItem = ({ item }) => {
        return (
            <View style={props.estado ? estilo.sliderBox : {marginRight: 10}}>
                <Pressable onPress={() => props.navegacao.navigate("Details", {name: item.name, source: item.source, by: item.by, about: item.about, video: item.video ? item.video : null, topicos: item.topicos ? item.topicos : null, infos: item.Infos ? item.Infos : null, id: item.id})}>
                    <Image source={item.source} style={ props.estado ? {width: 250, height: 150, borderTopLeftRadius: 4, borderTopRightRadius:4 } : estilo.sliderImg}/>
                    {props.estado ? (
                        <View style={{padding: 10}}>
                        <Text style={{fontSize: 15, fontWeight: "bold"}}>{item.name}</Text>
                        <Text style={{color: "gray"}}>{item.lessons}</Text>
                    </View>
                    ) : null}  
                </Pressable>
            </View>
        );
    };

    return(
        <View>
            <Text style={estilo.sliderTexto}>{props.titulo}</Text>
             <FlatList
            data={dados}
            horizontal={true}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            />
        </View>
       
    )
}