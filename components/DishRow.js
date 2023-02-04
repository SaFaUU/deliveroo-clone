import { View, Text, TouchableOpacity, Image } from 'react-native'
import Currency from "react-currency-formatter"
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, selectBasketItems } from '../features/basketSlice'

const DishRow = ({ id, name, description, price, image }) => {
    const [isPressed, setIsPressed] = useState(false)
    const items = useSelector(selectBasketItems)
    const dispatch = useDispatch()
    const addItemToBasket = () => {
        dispatch(addToBasket({ id, name, description, price, image }))
    }
    return (
        <>
            <TouchableOpacity onPress={() => setIsPressed(!isPressed)} className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}>
                <View className="flex-row">
                    <View className="flex-1 pr-2">
                        <Text className="text-lg mb-1">{name}</Text>
                        <Text className="text-gray-400 mt-2">{description}</Text>
                        <Text>
                            <Currency quantity={price} currency="BDT"> </Currency>
                        </Text>
                    </View>
                    <View>
                        <Image
                            style={{
                                borderWidth: 1,
                                borderColor: "#F3F3F4"
                            }}
                            source={{
                                uri: urlFor(image).url()
                            }}
                            className="h-20 w-20 bg-gray-300 p-4"
                        />
                    </View>
                </View>
                {isPressed && <View className="bg-white px-4">
                    <View className="flex-row items-center space-x-2 pb-3 mt-2">
                        <TouchableOpacity>
                            {/* <MinusCircleIcon
                                color={items.length > 0 ? "#00CCBB" : "gray"}
                            ></MinusCircleIcon> */}
                            <MinusCircleIcon
                                size={40}
                                color="#00ccbb"
                            ></MinusCircleIcon>
                        </TouchableOpacity>
                        <Text>{items.length}</Text>
                        <TouchableOpacity onPress={addItemToBasket}>
                            {/* <MinusCircleIcon
                                color={items.length > 0 ? "#00CCBB" : "gray"}
                            ></MinusCircleIcon> */}
                            <PlusCircleIcon
                                size={40}
                                color="#00ccbb"
                            >
                            </PlusCircleIcon>
                        </TouchableOpacity>
                    </View>
                </View>

                }
            </TouchableOpacity>
        </>
    )
}

export default DishRow