import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc';

const Member = ({title, price, priceh}: any) => {
  return (
    <View>
        <View style={tw`rounded-lg bg-white px-3 h-15 justify-center w-97 mt-2`}>
            <Text style={tw`text-5l font-bold`}>{title}</Text>
            <View style={tw`flex-row gap-30`}>
                <Text style={tw`text-gray-600 text-4l `}>{price}</Text>
                <Text style={tw`text-gray-600 `}>{priceh}</Text>
            </View>
        </View>  
    </View>
    
  )
}

export default Member