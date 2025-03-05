import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '@/components/Button';
import Buttonicon from '@/components/Buttonicon';
import { useRouter } from 'expo-router';


const login = () => {
    const navigation = useRouter();
  return (
    <SafeAreaView style={tw`flex-1 bg-black px-4`}> 
        <View>
            <View style={tw`pt-20`}>
                <Image source={require('@/assets/images/Tech.png')} style={tw`w-39 h-10`}/>
            </View>

            <View style={tw`pt-7`} >
                <TextInput style={tw`rounded-lg border border-white p-4 `} placeholderTextColor={'white'} placeholder='Masukan Nama Lengkap'></TextInput>
                <TextInput style={tw`rounded-lg border border-white p-4 mt-4`} placeholderTextColor={'white'} placeholder='Masukan Email'></TextInput>
                <TextInput style={tw`rounded-lg border border-white p-4 mt-4`} placeholderTextColor={'white'} placeholder='Masukan Password'></TextInput>
                <TextInput style={tw`rounded-lg border border-white p-4 mt-4`} placeholderTextColor={'white'} placeholder='Konfirmasi Password'></TextInput>
            </View>

            <View style={tw`flex-row justify-between`}>
                <Text style={tw`text-white text-sm pt-2`} >ingat aku ya</Text>
                <Text style={tw`text-blue-800 text-sm pt-2`}>Lupa Password?</Text>
            </View>

            <View style={tw`pt-3`}> 
                <Button title='Masuk' bgBtn='blue-400' bgText='white ' rute='/auth/survey' /> 
            </View>

            <View style={tw`flex-row justify-center pt-3 gap-1`}>
                <Text style={tw`text-white text-sm`}>Belum punya akun?</Text>
                <Text style={tw`text-blue-400 text-sm font-bold`}  onPress={() => navigation.navigate("/auth/login")}>Masuk Aja!</Text>
            </View>

            <View style={tw`pt-11`}>
                <Text style={tw`text-white text-center text-sm pt-3`}>Atau mau masuk melalui?</Text>
                <Text style={tw`rounded-lg bg-gray-800 h-1 `}></Text>

                <View style={tw`pt-2`}>
                    <Buttonicon  icon='google' text='Masuk Dengan Google'/>
                    <View style={tw`pt-2`}>
                        <Buttonicon  icon='facebook-square' text='Masuk Dengan Facebook'/>
                    </View>    
                </View> 
            </View>

        </View>

    </SafeAreaView>
    
  )
}


export default login