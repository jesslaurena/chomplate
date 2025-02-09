import { Tabs } from "expo-router";
import { Image, Text, View } from "react-native";

export default function RootLayout() {
  return (
    
    <Tabs
      screenOptions={{headerShown: false, tabBarActiveTintColor: "#D24545", tabBarStyle:{backgroundColor: "#fff4ed"}}}
    >

    <Tabs.Screen
        name="test"
        options={{ href: null }}
        />

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/images/home.png')}
              style={{ width: 20, height: 20, tintColor: "#D24545" }}
            />
          ),
        }}
      />

    <Tabs.Screen
            name="newrecipe"
            options={{
              title: 'New Recipe',
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={require('../assets/images/add.png')}
                  style={{ width: 20, height: 20, tintColor: "#D24545" }}
                />
              ),
            }}
          />
1 
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/images/profile.png')}
              style={{ width: 20, height: 20, tintColor: "#D24545" }}
            />
          ),
        }}
        />

<Tabs.Screen
        name="home"
        options={{ href: null }}
        
        />

    </Tabs>
  );
}