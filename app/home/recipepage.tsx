import { Recipe } from "@/components/recipecard";
import { useLocalSearchParams } from "expo-router";
import { Text, View, Image, StyleSheet, ScrollView} from "react-native";

export default function RecipePage() {
    const { recipeName, ingredients, instructions, recipeImage } = useLocalSearchParams();

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {typeof recipeImage === 'string' && <Image source={{ uri: recipeImage }} style={styles.recipeImage} />}
            <Text style={styles.recipeName}>{recipeName}</Text>
            <Text style={styles.title}>Ingredients:</Text>
            <Text style={styles.ingredients}>{ingredients}</Text>
            <Text style={styles.title}>Instructions: </Text>
            <Text style={styles.instructions}>{instructions}</Text>
        </ScrollView>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff9f5',
    },
    scrollViewContent: {
        padding: 20,
        margin: 10,
        backgroundColor: '#fff9f5',
      },
      recipeImage: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
        borderRadius: 10,
        marginTop:50,
      },
      recipeName: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 15,
      },
      ingredients: {
        fontSize: 18,
        color: '#666',
        marginTop: 10,
        marginLeft: 5,
        
      },
      instructions: {
        fontSize: 18,
        color: '#666',
        marginTop: 10,
        marginLeft: 5,
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#666',
        marginTop: 10,
        marginLeft: 5,
      }
});