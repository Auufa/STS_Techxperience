import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc';
import { AntDesign, Entypo, Feather } from '@expo/vector-icons';
import KotakIcon from '@/components/KotakIcon';
import Card from '@/components/Card';
import SatuButton from '@/components/SatuButton';
import Duabutton from '@/components/Duabutton';
import Buttongambar from '@/components/Buttongambar';


const homescreen = () => {
  const dataCard = [
    {title: 'Modul Akademi', icon: 'graduation-cap'},
    {title: 'Community', icon: 'users'},
    {title: 'ticket', icon: 'users'},
    {title: 'Event', icon: 'chat'},
  ]
  const datacart = [
    {title: 'Fundamental Belajar Design', description: ' Belajar design tu ga langsung gambar aja tau ada dasar dasarnya, belajar disini', image: require('@/assets/images/nulis.jpg')},
    {title: 'Fundamental Belajar Design', description: ' Belajar design tu ga langsung gambar aja tau ada dasar dasarnya, belajar disini', image: require('@/assets/images/klik.jpg')},
    {title: 'Fundamental Belajar Design', description: ' Belajar design tu ga langsung gambar aja tau ada dasar dasarnya, belajar disini', image: require('@/assets/images/koneksi.jpg')},
    {title: 'Fundamental Belajar Design', description: ' Belajar design tu ga langsung gambar aja tau ada dasar dasarnya, belajar disini', image: require('@/assets/images/aplikasi.png')},
  ]

  const databutton = ["Hackaton", "Design Web", "Workshop", "Lomba"]

  const datagambar = [
    {image: require('@/assets/images/nulis.jpg')},
    {image: require('@/assets/images/nulis.jpg')},
  ]
  const datagambar1 = [
    {image: require('@/assets/images/nulis.jpg')},
    {image: require('@/assets/images/nulis.jpg')},
  ]
  const datatext = [
    {title: 'Techxperience', image: require('@/assets/images/tangan.png')},
    {title: 'Pengembangan Usaha', image: require('@/assets/images/transfer.png')},
    {title: 'Beasiswa Kuliah', image: require('@/assets/images/uang.png')},
    {title: 'Techxperience Roadmap', image: require('@/assets/images/kertas.png')}
  ]
  return (
    <SafeAreaView style={tw`bg-black flex-1`}>
      <ScrollView>
        <View style={tw`pt-3 flex-row gap-30`}>
            <View>
                <Image source={require('@/assets/images/Tech.png')} style={tw`w-40 h-9`}></Image>
            </View>
            <View style={tw`flex-row gap-7 pt-3`}>
                <AntDesign name='search1' color={'white'} size={22}></AntDesign>
                <Entypo name='bell' color={'white'} size={22}></Entypo>
                <AntDesign name='user' color={'white'} size={22}></AntDesign>
            </View>
        </View>

        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={tw`flex-row gap-3 pt-4`}>
              <Image source={require('@/assets/images/sahabatganjar.jpg')} style={tw`w-85 h-50 rounded-lg`} resizeMode='stretch'/>
              <Image source={require('@/assets/images/sahabatganjar.jpg')} style={tw`w-85 h-50 rounded-lg`} resizeMode='stretch'/>
            </View>
          </ScrollView>
        </View>

        <View style={tw`flex-row gap-6 pt-4 flex-wrap`}>
        {dataCard.map((items) => (
                <KotakIcon title={items.title} Icon={items.icon}/>
            ))}
        </View>

        <View style={tw`pt-7 flex-row gap-37`}>
          <Text style={tw`text-white font-bold text-5l `}>Mau belajar apa ini</Text>
          <Text style={tw`text-white font-bold pt-2 text-4l`}>Lihat semua</Text>
        </View>

        <View style={tw`pt-2 flex-row flex-wrap justify-between`}>
            {datacart.map((items) => (
              <Card title={items.title} description={items.description} image={items.image}/>
            ))}
        </View>

        <View style={tw`pt-7 flex-row gap-35`}>
          <Text style={tw`text-white font-bold text-5l `}>Ikuti Event Terdekat</Text>
          <Text style={tw`text-white font-bold pt-2 text-4l`}>Lihat semua</Text>
        </View>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={tw`flex-row gap-2 mt-2`}>
              {databutton.map((items) => (
                <Duabutton label={items}/>
              ))}
          </View>
        </ScrollView>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={tw`flex-row flex-wrap justify-between pt-4 gap-2`}>
            {datagambar.map((items) => (
              <SatuButton image={items.image}/>
            ))}
          </View>
        </ScrollView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={tw`flex-row flex-wrap justify-between pt-4 gap-2`}>
            {datagambar.map((items) => (
              <SatuButton image={items.image}/>
            ))}
          </View>
        </ScrollView>

        <View style={tw`pt-7 flex-row gap-25`}>
          <Text style={tw`text-white font-bold text-5l `}>Program Techxperience</Text>
          <Text style={tw`text-white font-bold pt-2 text-4l`}>Lihat semua</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={tw`flex-row gap-3 pt-2 mb-9`}>
              {datatext.map((items) => (
                <Buttongambar title={items.title} image={items.image} />
              ))}
            </View>
        </ScrollView>

        
        </ScrollView>
    </SafeAreaView>
    
  )
}

export default homescreen