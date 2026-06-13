import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface FooterProps {
  onFacebookPress?: () => void;
  onInstagramPress?: () => void;
  onYoutubePress?: () => void;
}

export default function Footer({
  onFacebookPress,
  onInstagramPress,
  onYoutubePress,
}: FooterProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>ADOPET</Text>

      <Text style={styles.tagline}>
        Conectando pets a famílias com amor e responsabilidade.
      </Text>

      <View style={styles.divider} />

      <View style={styles.socialRow}>
        <TouchableOpacity onPress={onFacebookPress} style={styles.socialIcon}>
          <FontAwesome name="facebook" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={onInstagramPress} style={styles.socialIcon}>
          <FontAwesome name="instagram" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={onYoutubePress} style={styles.socialIcon}>
          <FontAwesome name="youtube-play" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <Text style={styles.copyright}>© 2025 Adopet — Três Lagoas, MS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7B2FBE",
    paddingTop: 36,
    paddingBottom: 32,
    paddingHorizontal: 24,
    alignItems: "center",
    gap: 16,
  },
  logo: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "800",
    letterSpacing: 2,
  },
  tagline: {
    color: "rgba(255,255,255,0.75)",
    fontSize: 13,
    textAlign: "center",
    lineHeight: 20,
  },
  divider: {
    width: 48,
    height: 2,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 2,
  },
  socialRow: {
    flexDirection: "row",
    gap: 28,
    marginTop: 8,
  },
  socialIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(255,255,255,0.15)",
    alignItems: "center",
    justifyContent: "center",
  },
  copyright: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 11,
    marginTop: 8,
  },
});