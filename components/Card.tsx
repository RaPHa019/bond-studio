import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Button from "./Button";

type TCard = {
  id: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
};

type TCardProps = {
  item: TCard;
};

const { width } = Dimensions.get("window");

const CARD_WIDTH = width * 0.95;

export default function Card({ item }: TCardProps) {
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.overlay} />
      <View style={styles.cardTextContainer}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
        <View style={styles.buttonRow}>
          <Button type="fill" text="Apply to my room" />
          <Button type="transparent" text="Details" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: 494,
    marginRight: 3,
    overflow: "hidden",
    backgroundColor: "#000",
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  cardTextContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "300",
  },
  cardDescription: {
    color: "#fff",
    fontSize: 16,
    marginTop: 2,
    marginBottom: 22,
    fontWeight: "300",
  },
  buttonRow: {
    flexDirection: "row",
    gap: 10,
  },
});
