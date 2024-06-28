
import { StyleSheet, ScrollView} from "react-native";
import { Colors } from "../../../constants/ThemeVariables";
import Post from "@/components/Post.jsx";
import { useLocalSearchParams, Stack } from "expo-router";

export default function UserDetails() {
const { id, postData } = useLocalSearchParams();
const post = JSON.parse(postData)

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen
      options={{
        title: post?.caption
      }}
      />
    </ScrollView>
  );
}

