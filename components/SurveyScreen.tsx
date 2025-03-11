import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Checkbox } from 'react-native-paper'
import tw from 'twrnc'

const SurveyScreen = ({text}:any) => {
    const [checked, setChecked] = useState(false);
  return (
    <View style={tw `flex-row justify-between items-center bg-[#292929] p-2 rounded-md`}>
        <Text style={tw`text-white`}>{text}</Text>
        <Checkbox status={checked ? 'checked' : 'unchecked'} onPress={() => setChecked(!checked)} color='#0086FF'/>
    </View>
  )
}

export default SurveyScreen