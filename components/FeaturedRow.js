import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import client from '../sanity'

const FeaturedRow = ({ id, title, description }) => {

    const [restaurants, setRestaurant] = useState([])
    useEffect(() => {
        client.fetch(`
        *[_type == "featured" && _id == $id]{
            ...,
              restaurants[]->{
                ...,
                dishes[]->,
                type->{
                  name
                }
                } }[0]
            
    `, { id: id })
            .then(data => setRestaurant(data?.restaurants))
    }, [id])
    // console.log(restaurants)

    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color="#00CCBB"></ArrowRightIcon>
            </View>
            <Text className="text-xs text-gray-400 px-4">{description}</Text>
            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                showsHorizontalScrollIndicator={false}
                className="pt-4"
            >
                {/* Restaurant Cards */}
                {
                    restaurants.map((restaurant, index) => {
                        return (
                            <RestaurantCard
                                key={restaurant._id}
                                id={restaurant._id}
                                imgUrl={restaurant.image}
                                title={restaurant.name}
                                rating={restaurant.rating}
                                genre={restaurant?.type?.name}
                                address={restaurant?.address}
                                short_description={restaurant?.short_description}
                                dishes={restaurant?.dishes}
                                long={restaurant?.long}
                                lat={restaurant?.lat}
                            ></RestaurantCard>)
                    })}
            </ScrollView>
        </View >
    )
}

export default FeaturedRow