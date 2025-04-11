import { StyleSheet, Text, TouchableOpacity } from "react-native";

type TButton = {
  type: "fill" | "transparent";
  text: string;
};

export default function Button(props: TButton) {
  const { type, text } = props;
  return (
    <TouchableOpacity
      style={type === "fill" ? styles.cardButton : styles.cardButtonTransparent}
    >
      <Text
        style={
          type === "fill"
            ? styles.cardButtonText
            : styles.cardButtonTextTransparent
        }
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardButton: {
    backgroundColor: "#fff",
    paddingHorizontal: 14,
    borderRadius: 68,
    height: 36,
    justifyContent: "center",
  },
  cardButtonTransparent: {
    paddingHorizontal: 14,
    height: 36,
    borderWidth: 1,
    borderColor: "#FFFFFF52",
    borderRadius: 68,
    justifyContent: "center",
  },
  cardButtonText: {
    fontSize: 13,
    fontWeight: "400",
  },
  cardButtonTextTransparent: {
    fontSize: 13,
    fontWeight: "400",
    color: "#fff",
  },
});
