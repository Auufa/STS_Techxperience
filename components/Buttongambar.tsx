import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';

const Buttongambar = ({title, image}: any) => {
  return (
    <View style={tw`rounded-lg h-30 w-35  border-blue-500 border-r-8 justify-center items-center bg-neutral-800`}>
        <Image source={image} style={tw`w-20 h-20`} />
      <Text style={tw`text-white text-center`}>{title}</Text>
    </View>
  )
}

export default Buttongambar