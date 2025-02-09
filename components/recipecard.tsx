import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export interface Recipe {
    recipeName: string;
    ingredients: string;
    instructions: string;
    recipeImage: string | null;
}

const RecipeCard = ({ recipeName, ingredients, instructions, recipeImage }: Recipe) => {
    const router = useRouter();
    const handleCardPress = () => {
        router.push({
            pathname: '/home/recipepage',
            params: { recipeName, ingredients, instructions, recipeImage }
        });
    }

    return (
        <TouchableOpacity 
            style={styles.card}
            onPress={handleCardPress}>
        <View style={styles.card}>
            {recipeImage && <Image source={{ uri: recipeImage }} style={styles.image} />}
            <View style={styles.cardContent}>
                <Text style={styles.recipeName}>{recipeName}</Text>
                <Text>By: Jane Doe</Text>
            </View>
        </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        marginBottom: 15,
        marginHorizontal: 5,
        overflow: 'hidden',
      },
      image: {
        width: '100%',
        height: 200, // Adjust as needed
        resizeMode: 'cover', // Make sure image fits well inside the box
      },
      cardContent: {
        padding: 15,
      },
      recipeName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
      },
});

export default RecipeCard;