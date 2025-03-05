import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';

const Buttonicon = ({icon,  text}: any) => {
  return (
    <View style={tw`bg-white rounded-lg justify-center items-center py-4`}>
        <View style={tw`flex-row gap-2`}>
            <AntDesign name={icon} size={24} color="black" />
            <Text style={tw`text-black text-center text-4l `}>{text}</Text>
        </View>
       
    </View>
  )
}

export default Buttonicon