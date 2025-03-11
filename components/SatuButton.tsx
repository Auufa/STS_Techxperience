import { View, Text, Image} from 'react-native'
import React from 'react'
import tw from 'twrnc';

const SatuButton = ({title, image}: any) => {
  return (
    <View style={tw`rounded-lg `}>
        <Image source={image} style={tw`w-70 h-32`} />
    </View>
  )
}

export default SatuButton