import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, Text, Image, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Colors } from "../../../constants/ThemeVariables";
import Post from "@/components/Post.jsx";
export default function UserDetails() {
  const { id, userData } = useLocalSearchParams();
  const user = JSON.parse(userData);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/cederdorff/race/master/data/expo-posts.json"
    )
      .then((response) => response.json())
      .then((data) => setPosts(data.sort((a, b) => b.createdAt - a.createdAt)));
  }, []);

  const postsByUser = posts.filter((post) => post.user.id === id);

  return (
      <ScrollView style={styles.container}>
        <View style={styles.profile}>
          <Image source={{ uri: user.image }} style={styles.image} />
          <Text style={styles.title}>{user.name}</Text>

          <Text style={styles.email}>{user.mail}</Text>
        </View>
        <View style={styles.posts}>
          {postsByUser.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.background,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    color: Colors.primary,
  },

  posts: {
    justifyContent: "center",
    alignItems: "stretch",
  },

  profile: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});
