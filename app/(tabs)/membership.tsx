import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc';
import Ship from '@/components/Ship';
import { Title } from 'react-native-paper';
import Member from '@/components/Member';
import Button from '@/components/Button';

const Membership = () => {
  const datamember = [
    {image:  require('@/assets/images/tangan.png'), title: 'Akses ke Semua Modul Pembelajaran'},
    {image:  require('@/assets/images/tangan.png'), title: 'Jalur Pembelajaran yang dirancang oleh mentor'},
    {image:  require('@/assets/images/tangan.png'), title: 'Mentoring sebulan 4x pertemuan'},
    {image:  require('@/assets/images/tangan.png'), title: 'Mendapatkan sertifikat dan keuntungan lainnya'}
  ]
  const dataship = [
    {title: '12 Bulan', price: 'Rp 599.000,00', priceh: 'Rp 12.475,00 / minggu'},
    {title: '12 Bulan', price: 'Rp 599.000,00', priceh: 'Rp 12.475,00 / minggu'},
    {title: '12 Bulan', price: 'Rp 599.000,00', priceh: 'Rp 12.475,00 / minggu'}
  ]
  return (
    <SafeAreaView style={tw`bg-black flex-1`}>

      <View style={tw`items-center pt-6`}>
        <Text style={tw `text-white text-7l`}>Start Your 7-Free Trial Today!</Text>
        <Text style={tw`text-white`}>Buka Fitur Eksklusif dengan Techxperience Membership</Text>
      </View>

    <ScrollView>
      <View style={tw`bg-gray-300 h-500 rounded-10 mt-10 px-4`}>

        <View style={tw`items-center mt-8`}>
          <Text style={tw`font-bold text-5l`}>Kamu akan mendapatkan:</Text>
        </View>

        <View style={tw`mt-3`}>   
          {datamember.map((items) => (
            <Ship image={items.image} title={items.title}/>
          ))}
        </View>

        <View style={tw`mt-6`}>
          {dataship.map((items) => (
            <Member title={items.title} price={items.price} priceh={items.priceh} />
          ))}
        </View>

        <View style={tw`pt-3`}> 
          <Button title='Ikut Kelas' bgBtn='blue-400' bgText='white ' rute='/(tabs)/akademi'/> 
      </View>

      <View style={tw`flex-row gap-2 items-center justify-center`}>
        <Text>Terms & Conditions </Text>
        <Text> Privacy Policy </Text>
      </View>

      </View>
    </ScrollView>
    </SafeAreaView>
    
  )
}

export default Membership