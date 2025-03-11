import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Video } from 'expo-av';

const reels = () => {

  const datavideo = [
    {id: '1', url: 'https://v1.pinimg.com/videos/mc/expMp4/24/cc/dd/24ccdd9497f6ecc236013198c8e22313_t1.mp4'},
    {id: '1', url: 'https://v1.pinimg.com/videos/mc/720p/a9/7f/74/a97f74e3519f7b7f4668e7c95226b843.mp4'}
  ]
  return (
    <SafeAreaView>
      <ScrollView>
        {datavideo.map((items) => (
          <Video source={{uri: items.url}} style={tw`w-full h-100`} shouldPlay/>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default reels