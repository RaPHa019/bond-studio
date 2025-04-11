import React from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Card from "../components/Card";
import FooterSection from "../components/FooterSection";
const backgroundImg = require("../assets/images/texture.png");

const DATA = [
  {
    id: "1",
    title: "Harvest",
    description: "Bold design meets timeless beauty",
    image: require("../assets/images/bond1.jpg"),
  },
  {
    id: "2",
    title: "Stoneworks",
    description: "Bold design meets timeless beauty",
    image: require("../assets/images/bond2.png"),
  },
  {
    id: "3",
    title: "Alabaster",
    description: "Bold design meets timeless beauty",
    image: require("../assets/images/bond3.png"),
  },
];

export default function HomeScreen() {
  return (
    <ImageBackground
      source={backgroundImg}
      resizeMode="cover"
      style={styles.container}
    >
      <View style={styles.header}>
        <ImageBackground
          source={require("../assets/images/avatar-efect.png")}
          style={styles.avatarEfect}
        >
          <Image
            source={require("../assets/images/Avery.png")}
            style={styles.avatar}
          />
        </ImageBackground>

        <View>
          <Text style={styles.headerTitle}>Georgia</Text>
          <Text style={styles.headerText}>Let's start designing</Text>
        </View>
      </View>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Card item={item} />}
      />

      <FooterSection />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 122,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 36,
    marginLeft: 24,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 7,
    marginRight: 18,
  },
  avatarEfect: {
    width: 67,
    height: 67,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "300",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "300",
    color: "#848280",
  },
});
