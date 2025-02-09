

import { Alert } from "react-native";
import { useEffect, useState } from "react";
import { Client, Account, Databases, ID } from 'react-native-appwrite';

// Appwrite Setup

const appwriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    projectId: "67a7b76f00146b02b340",
    databaseId: "67a7b7860032b9885de3",
    entriesId: "67a7b79f0001c09f39d9",
  };

const client = new Client();

  client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
  
  const account = new Account(client);
  const databases = new Databases(client);

async function getEntries(){
  try{
    const entries = await databases.listDocuments(appwriteConfig.databaseId, appwriteConfig.entriesId);
    console.log("Manually fetched recipes:", entries);
    return entries.documents;
  } catch (error) {
    throw new Error("Error: " + error);
  }
}

const useAppwrite = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await getEntries();
      setData(res);
    } catch (error) {
      Alert.alert("Error: ", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => fetchData();

  return { data, loading, refetch };
};

//function to publish recipe // add to database
export async function publish(recipeName, ingredients, instructions, image){
  try{
      if (!recipeName || !ingredients || !instructions || !image) {
          alert("Please fill in all fields before publishing.");
          return;
      }
      const newEntry = await databases.createDocument(
          appwriteConfig.databaseId,
          appwriteConfig.entriesId,
          ID.unique(),
          {
              title: recipeName,
              ingredients: ingredients,
              steps: instructions,
              image: image,
          }
      );
      alert("Recipe published successfully!");
      return newEntry;
  } catch (error) {
      console.log("Error: " + error)
      alert("Error: " + error.message);
  }   
}


export default useAppwrite;