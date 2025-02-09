import { SetStateAction, useState } from 'react';
import { Text, Button, View, TextInput, TouchableOpacity, ScrollView, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import {publish} from "@/lib/useAppwrite";


const NewRecipe = () => {
    // variables for text inputs
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    // called when user types something
    const handleRecipeNameChange = (inputText: SetStateAction<string>) => {
        setRecipeName(inputText);
    };
    const handleIngredientsChange = (inputText: SetStateAction<string>) => {
        setIngredients(inputText);
    };
    const handleInstructionsChange = (inputText: SetStateAction<string>) => {
        setInstructions(inputText);
    };

    // variables for image uploading
    const [image, setImage] = useState('')
    // called when "select image" button is pressed
    const handleImagePickerPress = async() => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        })
    // checks if user cancels image uploading process
    if (!result.canceled) {
        setImage(result.assets[0].uri)
    }}

    const handlePublishPress = async () => {
        try{
            console.log(recipeName, ingredients, instructions, image);
            await publish(recipeName, ingredients, instructions, image);
            setIngredients('');
            setInstructions('');
            setRecipeName('');
            setImage('');
        } catch (error) {
            alert(error);
        }
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#fff9f5' }}>
                <Text style={{ marginTop: 100, fontSize: 40, fontWeight: 'bold', textAlign: 'left', marginLeft:15}}>✨ New Recipe</Text>
                <TextInput
                    style={{ backgroundColor: 'white', height: 40,  width:370, alignSelf: 'center', marginBottom: 10, fontSize: 18, paddingHorizontal: 10, marginLeft: 5, marginRight: 5, borderRadius: 10, marginTop: 25 }}
                    onChangeText={handleRecipeNameChange}
                    value={recipeName}
                    placeholder="Enter recipe name"
                />
                <TextInput
                    multiline
                    style={{ backgroundColor: 'white', height: 160, width:370, alignSelf: 'center', marginBottom: 10, fontSize: 18, paddingVertical: 10, paddingHorizontal: 10, borderRadius: 10, marginLeft: 5, marginRight: 5 }}
                    onChangeText={handleIngredientsChange}
                    value={ingredients}
                    placeholder="Enter ingredients list (Press enter after each ingredient)"
                />
                <TextInput
                    multiline
                    style={{ backgroundColor: 'white', height: 160, fontSize: 18, width:370, alignSelf: 'center', marginBottom: 10, paddingVertical: 10, paddingHorizontal: 10, borderRadius: 10, marginLeft: 5, marginRight: 5 }}
                    onChangeText={handleInstructionsChange}
                    value={instructions}
                    placeholder="Enter instructions (Press enter after each step)"
                />
                {/*<Text>You entered: {recipeName}</Text>*/}
                
                <TouchableOpacity style={{width: 200, height: 50, borderColor: 'lightgray', borderWidth: 1, paddingVertical: 12, paddingHorizontal: 10, borderRadius: 10, alignItems: 'center', alignSelf: 'flex-start', margin: 10}} onPress={handleImagePickerPress}>
                    <Text style={{color: "black", fontSize: 20, fontWeight: 'bold'}}>Upload Image</Text>
                </TouchableOpacity>
                {image ? (
                    <Image source={{ uri: image }} style={{height:100, width:100, alignSelf:'flex-end', marginRight: 20, marginTop: -60}} />
                ) : (
                    <Text></Text>
                )}

                <TouchableOpacity style={{marginTop: 30, marginBottom: 500, width: 200, height: 50, backgroundColor: "#E6BAA3", paddingVertical: 12, paddingHorizontal: 10, borderRadius: 10, alignItems: 'center', alignSelf: 'flex-end', margin: 10}} onPress={handlePublishPress}>
                    <Text style={{color: "white", fontSize: 20, fontWeight: 'bold'}}>Publish Recipe</Text>
                </TouchableOpacity>
        </ScrollView>
    )
}

export default NewRecipe
