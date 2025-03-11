import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';

const Ship = ({image, title}: any) => {
  return (
    <View style={tw`flex-row gap-4 items-center pt-3 `}>
       <View style={tw`rounded-20 bg-white p-2`} >
            <Image source={image} style={tw`w-12 h-12 rounded-20`}/>
        </View> 

        <Text style={tw`text-4l w-72`}>{title}</Text>
    </View>
    
  )
}

export default Ship