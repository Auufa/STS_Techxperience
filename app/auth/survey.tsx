import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '@/components/Button';
import SurveyScreen from '@/components/SurveyScreen';

const survey = () => {
    const dataSurvey = ['Co-Founders', 'Instagram', 'Tiktok', 'Youtube', 'Website', 'Lainnya'];
  return (
    <SafeAreaView style={tw`px-8 bg-black flex-1`}>
        <Text style={tw`text-white mt-6`}>Bagaimana kamu tahu tentang Techxperience?</Text>
        
        <View style={tw `gap-3 mt-4 mb-80`}>
            {dataSurvey.map((items) => (
                <SurveyScreen text={items}></SurveyScreen>
            ))}
        </View>

        <View style={tw`pt-3`}> 
          <Button title='Selanjutnya' bgBtn='blue-400' bgText='white ' rute='/(tabs)/home'/> 
        </View>
    </SafeAreaView>
  )
}

export default survey