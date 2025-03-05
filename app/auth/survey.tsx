import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc';

const survey = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-black px-4`}>
        <View>
            <Text style={tw`text-white text-4l pt-6`}>Bagaimana kamu tahu tentang Techxperience?</Text>
        </View>  
    </SafeAreaView>
    
  )
}

export default survey