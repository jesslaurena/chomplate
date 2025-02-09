import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProfilePage = () => {
  const user = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    phone: '123-456-7890',
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("@/assets/images/profile.png")}/>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.info}>{user.email}</Text>
      <Text style={styles.info}>{user.phone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff9f5',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 220,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ProfilePage;