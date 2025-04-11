import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import TabButton from "./TabButton";

const { width } = Dimensions.get("window");

const FooterSection = () => {
  return (
    <View style={styles.wrapper}>
      <Image
        source={require("../assets/images/brands.png")}
        style={styles.imageBackground}
      />
      <LinearGradient
        colors={["#FAF8F600", "#FAF8F6B3", "#FAF8F6"]}
        locations={[0, 0.7, 1]}
        style={styles.gradientOverlay}
      />
      <View style={styles.buttonWrapper}>
        <TabButton />
      </View>
    </View>
  );
};

export default FooterSection;

const styles = StyleSheet.create({
  wrapper: {
    width: width,
    height: 127,
    position: "absolute",
    bottom: -25,
  },
  imageBackground: {
    zIndex: 0,
  },
  gradientOverlay: {
    width: width,
    height: 148,
    zIndex: 5,
    top: -45,
    position: "absolute",
  },
  buttonWrapper: {
    position: "absolute",
    top: 10,
    alignSelf: "center",
    zIndex: 10,
  },
});
