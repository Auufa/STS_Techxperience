import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '@/components/Button';



const index = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-black px-3`}>
    <View>
        <View style={tw`justify-center items-center pt-60`}>
            <Image source={require('@/assets/images/Tech.png')} style={tw`w-full h-18`}/>
        </View>
        <Text style={tw`text-center text-white text-2xl extra-Bold pt-23`}>Belajar Investasi {'\n'}& Keuangan Pribadi</Text>
       <Text style={tw`text-center text-white text-sm pt-2`}>Belajar di Techxperience ini kamu dapat belajar{'\n'}berbagai bidang teknologi seperti pemrograman, {'\n'}desain grafis, dan jaringan.</Text>   
    </View>

    <View style={tw`pt-27`}>
            <Button title='Mulai Belajar Sekarang' bgBtn='Black' bgText='white' rute=""/>
        <View style={tw`pt-3`}> 
            <Button title='Masuk' bgBtn='blue-400' bgText='white ' rute='/auth/login'/> 
        </View>

        <Text style={tw`text-center text-white text-3l pt-2`}>#Dari 1 Baris Pertama, Sampai 1 Project Pertama</Text>  
    </View>
</SafeAreaView>
  )
}

export default index