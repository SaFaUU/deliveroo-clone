import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}>
            {/* Categories Card */}
            <CategoryCard imgUrl='https://links.papareact.com/wru' title="Testing"></CategoryCard>
            <CategoryCard imgUrl='https://links.papareact.com/wru' title="Testing"></CategoryCard>
            <CategoryCard imgUrl='https://links.papareact.com/wru' title="Testing"></CategoryCard>
        </ScrollView>
    )
}

export default Categories