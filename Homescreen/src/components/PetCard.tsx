import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface Pet {
  id: string;
  name: string;
  age: string;
  location: string;
  imageUri: string | number;
}

interface PetCardProps {
  pet: Pet;
  onPress?: (pet: Pet) => void;
}

export default function PetCard({ pet, onPress }: PetCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress?.(pet)} activeOpacity={0.85}>
      <Image
        source={typeof pet.imageUri === "string" ? { uri: pet.imageUri } : pet.imageUri}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text style={styles.name}>{pet.name}</Text>
        <Text style={styles.age}>{pet.age}</Text>
        <Text style={styles.location}>{pet.location}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    marginRight: 12,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  image: {
    width: 160,
    height: 140,
    backgroundColor: "#e0e0e0",
  },
  info: {
    paddingTop: 6,
    paddingHorizontal: 2,
  },
  name: {
    fontSize: 15,
    fontWeight: "700",
    color: "#E07B00",
  },
  age: {
    fontSize: 13,
    color: "#333",
    fontWeight: "600",
  },
  location: {
    fontSize: 12,
    color: "#666",
    marginTop: 1,
  },
});