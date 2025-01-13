import React, {useState, useEffect} from "react";
import dadosSlider from "../datas/dadosSlider"
import { View, Image, FlatList, Text } from "react-native";
import estilo from "../styles/estilo";
export default function Slider(props) {

    const [dados, setDados] = useState(dadosSlider)

    const renderItem = ({ item }) => {
        return (
            <View style={{marginRight: 10}}>
                <Image source={item.source} style={estilo.sliderImg}/>
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