import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc';
import { EvilIcons } from '@expo/vector-icons';
import News from '@/components/News';
import Bgnews from '@/components/Bgnews';

const news = () => {
  const datapidato = [
    {image: require('@/assets/images/pidato.png'), desc: 'India sebar developernya keseluruh dunia, dengan bayaran murah', date: '23 Febuari 2025' },
    {image: require('@/assets/images/pidato.png'), desc: 'India sebar developernya keseluruh dunia, dengan bayaran murah', date: '23 Febuari 2025' }
  ]
  const datatext = [
    {title: 'inggris sebar developernya keseluruh dunia, dengan bayaran murah', hour: '23 Febuari 2025'},
    {title: 'inggris sebar developernya keseluruh dunia, dengan bayaran murah', hour: '23 Febuari 2025'},
    {title: 'inggris sebar developernya keseluruh dunia, dengan bayaran murah', hour: '23 Febuari 2025'},
    {title: 'inggris sebar developernya keseluruh dunia, dengan bayaran murah', hour: '23 Febuari 2025'},
  ]
  return (
    <SafeAreaView  style={tw`bg-black flex-1 px-3`}>

      <View>
        <Text style={tw`font-bold text-white text-8l`}>News</Text>
      </View>
      
      <View style={tw`rounded-lg border border-gray-600 p-3 mt-7`}>
        <View style={tw`flex-row gap-43`}>
          <Text style={tw`text-gray-300`}>Mau cari berita apa hari ini?</Text>
          <EvilIcons name='search' color={'white'} size={25} />
        </View>
      </View>
    
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={tw`flex-row gap-3 pt-4`}>
          {datapidato.map((items) => (
            <News image={items.image} desc={items.desc} date={items.date}/>
          ))}
        </View>
      </ScrollView>
    </View>
    
    <View style={tw`pt-4`}>
      {datatext.map((items) => (
        <Bgnews title={items.title} hour={items.hour} />
      ))}
    </View>

    </SafeAreaView>
    
  )
}

export default news