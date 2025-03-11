import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '@/components/Card';

const akademi = () => {
  const datacart = [
    {title: 'Fundamental Belajar Design', description: ' Belajar design tu ga langsung gambar aja tau ada dasar dasarnya, belajar disini', image: require('@/assets/images/nulis.jpg')},
    {title: 'Fundamental Belajar Mysql', description: ' Belajar design tu ga langsung gambar aja tau ada dasar dasarnya, belajar disini', image: require('@/assets/images/klik.jpg')},
    {title: 'Fundamental Belajar Jaringan', description: ' Belajar design tu ga langsung gambar aja tau ada dasar dasarnya, belajar disini', image: require('@/assets/images/koneksi.jpg')},
    {title: 'Fundamental Belajar frontend', description: ' Belajar design tu ga langsung gambar aja tau ada dasar dasarnya, belajar disini', image: require('@/assets/images/aplikasi.png')},
  ]
  return (
    <SafeAreaView style={tw`bg-black flex-1`}>
      <ScrollView>
      <View style={tw`pt-3`}>
        <Text style={tw`text-white font-bold text-10l`}>Akademi</Text>
      </View>
      <View style={tw`pt-2 flex-row flex-wrap justify-between`}>
            {datacart.map((items) => (
              <Card title={items.title} description={items.description} image={items.image}/>
            ))}
        </View>
      <View style={tw`pt-2 flex-row flex-wrap justify-between`}>
          {datacart.map((items) => (
            <Card title={items.title} description={items.description} image={items.image}/>
          ))}
      </View>   
      </ScrollView>
    </SafeAreaView>
    
  )
}

export default akademi