import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Footer from "../components/Footer";
import PetCard, { Pet } from "../components/PetCard";
import TopBar from "../components/TopbarTemp";

const { width } = Dimensions.get("window");
const CARD_WIDTH = 160;
const CARD_MARGIN = 12;
const SNAP_INTERVAL = CARD_WIDTH + CARD_MARGIN;

const PETS: Pet[] = [
  {
    id: "1",
    name: "Rai",
    age: "8 anos",
    location: "Três Lagoas, MS",
    imageUri: require("../../assets/images/rai.png"), // ← troque pelo nome do seu arquivo
  },
  {
    id: "2",
    name: "Sam",
    age: "3 meses",
    location: "Três Lagoas, MS",
    imageUri: require("../../assets/images/sam.png"), // ← troque pelo nome do seu arquivo
  },
  {
    id: "3",
    name: "Felix",
    age: "5 anos",
    location: "Três Lagoas, MS",
    imageUri: require("../../assets/images/felix.jpg"), // ← troque pelo nome do seu arquivo
  },
  {
    id: "4",
    name: "Luna",
    age: "1 ano",
    location: "Três Lagoas, MS",
    imageUri: require("../../assets/images/luna.png"), // ← troque pelo nome do seu arquivo
  },
];

export default function HomeScreen() {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const insets = useSafeAreaInsets();

  const scrollPrev = () => {
    const next = Math.max(0, currentIndex - 1);
    flatListRef.current?.scrollToIndex({ index: next, animated: true });
    setCurrentIndex(next);
  };

  const scrollNext = () => {
    const next = Math.min(PETS.length - 1, currentIndex + 1);
    flatListRef.current?.scrollToIndex({ index: next, animated: true });
    setCurrentIndex(next);
  };

  return (
    <View style={styles.screen}>
      {/* TopBar fora da safe area */}
      <View style={[styles.topBarWrapper, { paddingTop: insets.top }]}>
        <TopBar
          onMenuPress={() => console.log("Menu aberto")}
          onAdotarPress={() => console.log("Adotar pressionado")}
        />
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* ── Hero Banner ── */}
        <ImageBackground
          source={require("../../assets/images/banner.jpeg")} // ← troque pelo nome do seu arquivo
          style={styles.heroBanner}
          resizeMode="cover"
        >
          <View style={styles.heroPawDecor} />
          <View style={styles.heroContent}>
            <View style={styles.heroCatIcon}>
              <Ionicons name="paw" size={48} color="rgba(255,255,255,0.6)" />
            </View>
            <View style={styles.heroTextBlock}>
              <Text style={styles.heroTitle}>Bem vindo à</Text>
              <Text style={styles.heroTitle}>Adopet</Text>
            </View>
          </View>
          <View style={styles.heroPawsRight}>
            <Ionicons name="paw" size={36} color="rgba(255,255,255,0.25)" />
            <Ionicons name="paw" size={24} color="rgba(255,255,255,0.2)" style={{ marginTop: 8, marginLeft: 16 }} />
          </View>
        </ImageBackground>

        {/* ── Tagline ── */}
        <View style={styles.taglineSection}>
          <Text style={styles.taglineTitle}>Mude vidas!</Text>
          <Text style={styles.taglineSubtitle}>A sua e a deles</Text>
        </View>

        {/* ── Carrossel ── */}
        <View style={styles.carouselSection}>
          <View style={styles.carouselHeader}>
            <Text style={styles.carouselTitle}>Amigos que estão precisando de você</Text>
            <View style={styles.carouselArrows}>
              <TouchableOpacity
                style={[styles.arrowButton, currentIndex === 0 && styles.arrowDisabled]}
                onPress={scrollPrev}
                disabled={currentIndex === 0}
              >
                <Ionicons name="chevron-back-circle-outline" size={28} color={currentIndex === 0 ? "#ccc" : "#555"} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.arrowButton, currentIndex === PETS.length - 1 && styles.arrowDisabled]}
                onPress={scrollNext}
                disabled={currentIndex === PETS.length - 1}
              >
                <Ionicons name="chevron-forward-circle-outline" size={28} color={currentIndex === PETS.length - 1 ? "#ccc" : "#555"} />
              </TouchableOpacity>
            </View>
          </View>

          <FlatList
            ref={flatListRef}
            data={PETS}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <PetCard pet={item} onPress={(pet) => console.log("Pet:", pet.name)} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carouselList}
            snapToInterval={SNAP_INTERVAL}
            decelerationRate="fast"
            snapToAlignment="start"
            onMomentumScrollEnd={(e) => {
              const index = Math.round(e.nativeEvent.contentOffset.x / SNAP_INTERVAL);
              setCurrentIndex(index);
            }}
          />
        </View>

        {/* ── Seção Doação ── */}
        <View style={styles.doacaoSection}>
          <Text style={styles.doacaoTitle}>Valorize a adoção{"\n"}responsável</Text>

          <View style={styles.doacaoImagePlaceholder}>
            <Ionicons name="paw" size={56} color="#ccc" />
          </View>

          <TouchableOpacity style={styles.doacaoButton} onPress={() => console.log("Doar pet")}>
            <Text style={styles.doacaoButtonText}>Doar pet</Text>
          </TouchableOpacity>
        </View>

        {/* ── Footer no scroll ── */}
        <Footer />
        <View style={{ height: insets.bottom }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f8f7f9",
  },
  topBarWrapper: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },

  // ── Hero ──
  heroBanner: {
    minHeight: 140,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 24,
    overflow: "hidden",
  },
  heroPawDecor: {
    position: "absolute",
    bottom: -20,
    left: -20,
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "rgba(0,0,0,0.06)",
  },
  heroContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },
  heroCatIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  heroTextBlock: { flex: 1 },
  heroTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#fff",
    lineHeight: 28,
  },
  heroPawsRight: { alignItems: "flex-end" },

  // ── Tagline ──
  taglineSection: {
    alignItems: "center",
    paddingVertical: 24,
    backgroundColor: "#fff",
  },
  taglineTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#1a1a1a",
  },
  taglineSubtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1a1a1a",
    marginTop: 2,
  },

  // ── Carrossel ──
  carouselSection: {
    paddingTop: 16,
    paddingBottom: 24,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  carouselHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  carouselTitle: {
    fontSize: 13,
    color: "#444",
    fontWeight: "500",
    flex: 1,
    lineHeight: 18,
  },
  carouselArrows: {
    flexDirection: "row",
    gap: 4,
  },
  arrowButton: { padding: 4 },
  arrowDisabled: { opacity: 0.4 },
  carouselList: {
    paddingHorizontal: 16,
    paddingBottom: 4,
  },

  // ── Doação ──
  doacaoSection: {
    alignItems: "center",
    paddingVertical: 32,
    paddingHorizontal: 24,
    backgroundColor: "#f8f7f9",
    gap: 20,
  },
  doacaoTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#1a1a1a",
    textAlign: "center",
    lineHeight: 26,
  },
  doacaoImagePlaceholder: {
    width: 160,
    height: 160,
    borderRadius: 16,
    backgroundColor: "#e8e8e8",
    alignItems: "center",
    justifyContent: "center",
  },
  doacaoButton: {
    backgroundColor: "#7B2FBE",
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 30,
  },
  doacaoButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});