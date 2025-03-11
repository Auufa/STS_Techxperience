import { TouchableOpacity, Text } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const Duabutton = ({ label }: any) => {
  return (
    <TouchableOpacity style={tw `border border-white px-4 py-2 rounded-lg w-30`}>
      <Text style={tw `text-white font-bold text-center`}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Duabutton;