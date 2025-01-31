import React from "react";
import TelasGerais from "../components/TelasGerais";
import { useVideoPlayer, VideoView } from 'expo-video';
import { View, Text, Image, Pressable } from "react-native";
import Navigation from "../components/Navigation";

export default function CourseDetails(props) {

    const {name, source, by, about, topicos, infos, id, video} = props.route.params;

    const videoSource = video ? 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' : null;

    const player = useVideoPlayer(videoSource, player => {
        player.play();
      });

    return (
        <TelasGerais>
            <Navigation navegacao={props.navigation}/>

            <View>
                <Text style={{fontSize: 25, marginTop: 10, fontWeight: "bold"}}>{name}</Text>
                <Text style={{color: "gray"}}>{by}</Text>

                {video ? 
                <VideoView style={{width: window.width, height: 275}} player={player} allowsFullscreen allowsPictureInPicture />
                :
                <Image source={source} style={{width: window.width, height: 225,
                    borderRadius: 10, marginTop: 10
                }}/>
            }
            </View>

            <Text style={{fontSize: 18, fontWeight: "bold",
                marginTop: 20
            }}>Sobre este curso</Text>
            <Text style={{textAlign: "justify", marginTop: 5 }}>{about}</Text>

            <View style={{marginTop: 50}}>

            {topicos ? <Text style={{fontSize: 18, fontWeight: "bold"}}>Conteudos do curso</Text> : null}
            
            {topicos ? topicos.map((item, index) => {
                console.log(item)
                return (
                    <Pressable key={index} onPress={() => props.navigation.navigate("Lessons", {infos: infos, id: id, itemID: item.id})}>
                        <Text style={{backgroundColor: "#fff", marginVertical: 8, fontSize: 16, padding: 10, borderRadius: 8, textAlign: "center", elevation: 5}}
                        >{item.topico}</Text>
                    </Pressable>
                )
            }) : null}
            </View>
        </TelasGerais>

    )
}