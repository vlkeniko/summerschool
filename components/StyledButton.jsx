import { Platform, Text, StyleSheet, Pressable } from "react-native-web";
import {
  Colors,
  FontSizes,
  FontWeights,
  Spacing,
  BorderRadius,
  Shadows,
} from "@/constants/ThemeVariables";

export default function StyledButton({ title, onPress }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    padding: 10,
    marginTop: 20,
    borderRadius: 7,
    borderWidth: 2,
  },

  text: {
    color: "black",
    fontSize: 18,
    textAlign: "center",
  },
});
