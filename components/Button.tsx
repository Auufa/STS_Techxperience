import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { useRouter } from 'expo-router';

const Button = ({title, bgBtn, bgText, rute}: any) => {
    const navigation = useRouter();
  return (
    <TouchableOpacity style={tw`bg-${bgBtn} px-4 py-2 border-2 border-white rounded-lg mx-12`} onPress={() => navigation.navigate(rute)}> 
        <Text style={tw`text-${bgText} text-center`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button