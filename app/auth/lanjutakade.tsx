import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Button from '@/components/Button';
import Bggray from '@/components/Bggray';
import YoutubePlayer from 'react-native-youtube-iframe';

const lanjutakade = () => {

  const [playing, setPlaying] = useState(false);
  const videoId = "Ou5urp_wuOY";

  const databutton = [
    {title: 'Fundamental for Frontent Dev', hour: '30 minutes'},
    {title: 'Crafting the Perfect Web With HTML CSS ', hour: '1 hour 20 minutes'},
    {title: 'Using JavaScript for Interaction Website', hour: '45 minutes'},
    {title: 'Using framework for build website SPAs', hour: '1 hour 3 minutes'}
  ]
   const navigation = useRouter();
  return (
    <SafeAreaView style={tw`bg-black flex-1`}>

      <View style={tw`items-center pt-3 flex-row gap-38`}>
        <AntDesign name='arrowleft' color={'white'} size={26} onPress={() => navigation.navigate("/(tabs)/akademi")} />
        <Text style={tw`text-white font-bold text-5l`}>Details</Text>
      </View>

      <View style={tw`w-full aspect-video mt-6 rounded-lg overflow-hidden`}>
        <YoutubePlayer height={230} play={playing} videoId={videoId} onChangeState={(state) => {
            if (state === "ended") setPlaying(false);
          }}
        />
      </View>

    <View style={tw`px-4 pt-2`}>
      <View>
        <Text style={tw`font-bold text-blue-500 text-5l `}>Mahir Menjadi Frontend Dev</Text>
        <Text style={tw`text-white pt-2`}>Bergabung dengan kelar mahir menjadi frontend dev, maka kamu sudah mendapatkan fundamental menjadi seorang programmer, dan pada kelas ini kamu akan mendalami itu. </Text>
        <View style={tw`flex-row gap-4 pt-3`}>
          <Text style={tw`text-gray-400`}>⭐ 4.5 (823)</Text>
          <Text style={tw`text-gray-400`}>4 Module</Text>
          <Text style={tw`text-gray-400`}>Programmer</Text>
        </View>
      </View>

      <View style={tw`bg-gray-300 rounded-lg h-87 mt-6`}>
        <View>
          {databutton.map((items) => (
            <Bggray title={items.title} hour={items.hour} />
          ))}
        </View>
      </View>

      <View style={tw`pt-3`}> 
          <Button title='Ikut Kelas' bgBtn='blue-400' bgText='white ' rute='/(tabs)/akademi'/> 
      </View>
    </View>
    </SafeAreaView>
    
  )
}

export default lanjutakade