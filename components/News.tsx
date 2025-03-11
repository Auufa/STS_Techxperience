import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';

const News = ({image, desc, date}: any) => {
  return (
    <View>
      <Image source={image} style={tw`w-95 h-60`} resizeMode='stretch'/>
      <Text style={tw`text-blue-700 text-5l w-100 `}>{desc}</Text>
      <Text style={tw`text-gray-600`}>{date}</Text>
    </View>
  )
}

export default News