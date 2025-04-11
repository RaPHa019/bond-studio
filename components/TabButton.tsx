import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import HomeIcon from "../assets/icons/HomeIcon";
import MagicIcon from "../assets/icons/MagicIcon";

export default function TabButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconWrapperActive}>
        <HomeIcon />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconWrapperInactive}>
        <MagicIcon />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    borderRadius: 60,
    flexDirection: "row",
    paddingHorizontal: 6,
    paddingVertical: 4,
    alignSelf: "center",
  },
  iconWrapperActive: {
    backgroundColor: "#1A1A1A",
    borderRadius: 60,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 40,
  },
  iconWrapperInactive: {
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 40,
  },
});
