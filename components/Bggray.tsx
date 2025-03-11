import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc';

const Bggray = ({title,hour}: any) => {
  return (
    <View style={tw`flex-row gap-5 p-3`}>
      <View style={tw`rounded-lg bg-gray-500 w-14 h-13 `}></View>
      <View style={tw`flex-wrap`}>
        <Text style={tw`7-lg`}>{title}</Text>
        <Text style={tw`6-lg pt-2`}>{hour}</Text>
      </View>
    </View>
  )
}

export default Bggray