import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const CategoryCard = ({ imgURL, title }) => {
    return (
        <View>
            <Text>{title}</Text>
        </View>
    )
}

export default CategoryCard