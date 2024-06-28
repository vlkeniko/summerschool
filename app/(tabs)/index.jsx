import {  StyleSheet, FlatList } from "react-native";
import { Text, View } from "@/components/Themed";
import Post from "@/components/Post";
import { useState, useEffect } from "react";
import {
  Colors,
  Spacing,
} from "@/constants/ThemeVariables";

export default function TabOneScreen() {
  const [posts, setPosts] = useState([]);

  useEffect(() =>{
    fetch(
      "https://raw.githubusercontent.com/cederdorff/race/master/data/expo-posts.json"
    )
      .then((response) => response.json())
      .then(setPosts);
  }, [])

      function renderPost({ item }) {
        return <Post post={item}></Post>;
      }

  return (
    <View>
      <Text style={styles.title}>Home page</Text>

      <View
        style={styles.separator}
        lightColor={Colors.secondary}
        darkColor="rgba(255,255,255,0.1)"
      />

      <FlatList
        style={styles.container}
        data={posts}
        renderItem={renderPost}
        keyExtractor={(post) => post.id}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    padding: Spacing.medium,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  hello: {
    textShadow: "0 0 3px lightblue, 0 0 5px lightblue",
  },
});
