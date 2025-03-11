import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Entypo } from '@expo/vector-icons';

const KotakIcon = ({icon, title }: any) => {
  return (
    <View style={tw`border-l-8 border-blue-500 p-4 rounded-lg flex-row bg-neutral-900 gap-3 w-44`}>
      <Entypo name={icon} size={22} style={tw`text-white`} color="white" />
      <Text style={tw`text-white text-center`}>{title}</Text>
    </View>
  )
}

export default KotakIcon