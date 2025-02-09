import { Text, Button, View, StyleSheet, ScrollView, FlatList, RefreshControl, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import RecipeCard from '@/components/recipecard'
import RecipePage from "@/app/home/recipepage";
import useAppwrite from "@/lib/useAppwrite";

interface Recipe {
  title: string;
  ingredients: string;
  steps: string;
  image: string | null;
  $id: string;
}

const HomeScreen = () => {

  const { data: Entries, refetch } = useAppwrite();
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[...(Entries || [])].reverse()}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }: {item: Recipe}) => (
          <RecipeCard 
            recipeName={item.title} 
            ingredients={item.ingredients} 
            instructions={item.steps} 
            recipeImage={item.image} 
          />
        )}
        
        ListHeaderComponent={() => (
          <View style={styles.titleContainer}><Text style={styles.title}>🐊 Chomplate</Text></View>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.entries}>No entries</Text>
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
        
      />
          
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff9f5',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    margin: 16,
  },
  entries: {
    margin: 16,
    
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  title: {
    fontFamily: 'Chillen',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 20,
  }
});

export default HomeScreen;