import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface TopBarProps {
  onMenuPress?: () => void;
  onAdotarPress?: () => void;
}

export default function TopBar({ onMenuPress, onAdotarPress }: TopBarProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onMenuPress} style={styles.menuButton}>
        <Ionicons name="menu" size={28} color="#333" />
      </TouchableOpacity>

      <Text style={styles.logo}>ADOPET</Text>

      <TouchableOpacity onPress={onAdotarPress} style={styles.adotarButton}>
        <Text style={styles.adotarText}>Adotar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  menuButton: {
    padding: 4,
  },
  logo: {
    fontSize: 20,
    fontWeight: "800",
    color: "#7B2FBE",
    letterSpacing: 1.5,
  },
  adotarButton: {
    backgroundColor: "#1a1a1a",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 8,
  },
  adotarText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
});