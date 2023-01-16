import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Platform, StatusBar } from "react-native";
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import Categories from '../components/Categories';



const HomeScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    const styles = StyleSheet.create({
        container: {
            paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
        },
    });
    return (
        <SafeAreaView
            style={styles.container}
            className="bg-white pt-5"
        >
            {/* Header */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2 mt-2">
                <Image
                    source={{
                        uri: "https://links.papareact.com/wru"
                    }}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />
                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs bg-gra">Deliver Now!</Text>
                    <Text className="font-bold text-xl">Current Location
                        <ChevronDownIcon size={20}
                            color="#00CCBB"></ChevronDownIcon>
                    </Text>
                </View>
                <UserIcon size={35} color="#00CCBB"></UserIcon>
            </View>
            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                {/* Search */}
                <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3 rounded-md'>
                    <MagnifyingGlassIcon color="gray"></MagnifyingGlassIcon>
                    <TextInput placeholder='Restaurants and Cuisines'
                        keyboardType='default'
                    ></TextInput>
                </View>
                <AdjustmentsVerticalIcon color="#00CCBB" />
            </View>
            {/* Body */}
            <ScrollView className="bg-gray-100"
                contentContainerStyle={{
                    paddingBottom: 100
                }}
            >
                {/* Categories */}
                <Categories></Categories>
                {/* Featured */}
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen