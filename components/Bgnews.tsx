import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc';

const Bgnews= ({title,hour}: any) => {
  return (
    <View style={tw`flex-row gap-5 pt-3`}>
      <View style={tw`bg-white w-17 h-17 `}></View>
      <View style={tw`flex-wrap`}>
        <Text style={tw`text-4-l text-blue-600 w-70`}>{title}</Text>
        <Text style={tw`6-lg pt-2 text-gray-400`}>{hour}</Text>
      </View>
    </View>
  )
}

export default Bgnews