import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Card = ({ image, title, description }: any) => {
  const navigation = useRouter();
  return (
    <TouchableOpacity style={tw`bg-gray-800 rounded-xl w-50 mb-4`}>
      <Image source={image} style={tw`w-full h-32`} />
      <View style={tw `p-4`}>
        <Text style={tw  `text-white text-lg font-bold`}>{title}</Text>
        <Text style={tw `text-gray-400 text-sm mt-1`}>{description}</Text>
        <View style={tw`flex-row gap-3`}>
          <Text style={tw `text-white mt-2 font-semibold`}>Mulai Belajar</Text>
          <AntDesign name='rightcircle' color={'white'} size={20} style={tw`mt-2`} onPress={() => navigation.navigate("/auth/lanjutakade")}/>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;