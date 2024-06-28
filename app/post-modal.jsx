import { StatusBar } from "expo-status-bar";
import {
  Colors,
  FontSizes,
  FontWeights,
  Spacing,
  BorderRadius,
  Shadows,
} from "@/constants/ThemeVariables";

import {
  Platform,
  StyleSheet,
  Button,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { Text, View } from "@/components/Themed";
import { Stack, useRouter } from "expo-router";
import StyledButton from "@/components/StyledButton";

export default function PostModal() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <div style={styles.navcontainer}>
        <Stack.Screen
          options={{
            title: "Create Post",
            headerLeft: () => (
              <Button
                style={styles.buttons}
                title="Cancel"
                onPress={() => router.back()}
              />
            ),
            headerRight: () => <Button style={styles.buttons} title="Save" />,
          }}
        />
      </div>

      <Text style={styles.title}>Modal</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />

      <Text style={styles.subtitle}>Image</Text>
      <Image
        style={styles.image}
        source={{
          uri: "http://cederdorff.com/race/images/placeholder-image.webp",
        }}
      />
      <Text style={styles.subtitle}>Caption</Text>
      <TextInput title="Create Post" style={styles.input} />
      <Text style={styles.subtitle}>City</Text>
      <TextInput title="Add Location" style={styles.input} />
      <StyledButton title="Create Post" onPress={() => router.back()} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 20,
    borderRadius: 7,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: "70%",
  },

  image: {
    width: "100%",
    height: "100%",
    maxHeight: 450,
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    border: "0.5px solid black",
  },

  input: {
    width: "100%",
    height: 30,
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    padding: 5,
    border: "0.5px solid black",
  },

  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
  },

  buttons: {
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: Colors.background,
    color: Colors.primary,
  }
});
