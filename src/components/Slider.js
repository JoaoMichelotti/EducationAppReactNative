import React, {useState, useEffect} from "react";
import { View, Image, FlatList, Text } from "react-native";
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
                <Image source={item.source} style={ props.estado ? {width: 250, height: 150, borderTopLeftRadius: 4, borderTopRightRadius:4 } : estilo.sliderImg}/>
                {props.estado ? (
                    <View style={{padding: 10}}>
                    <Text style={{fontSize: 15, fontWeight: "bold"}}>Basic Python</Text>
                    <Text>15 aulas</Text>
                </View>
                ) : null}
                
            </View>
        );
    };

    return(
        <View >
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