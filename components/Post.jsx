// components/Post.jsx

import React from "react";
import { Platform, View, Text, StyleSheet, Image } from "react-native";
import {
  Colors,
  FontSizes,
  FontWeights,
  Spacing,
  BorderRadius,
  Shadows,
} from "../constants/ThemeVariables";

export default function Post ({ post }) {
    function formatDate(timestamp) {
        const createdAt = new Date(timestamp);
        return createdAt.toLocaleDateString();
    }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {/* <Avatar user={posts.user} /> */}
      </View>
      <Text style={styles.title}>{post.caption}</Text>
      <Image source={{ uri: post.image }} style={styles.content} />
      <View style={styles.footer}>
        <Text style={styles.city}>
            {post.location?.city}, {post.location?.country}
        </Text>
        <Text style={styles.author}>{post.uid}</Text>
        <Text style={styles.date}>{formatDate(post.createdAt)}</Text>
      </View>
    </View>
  );

};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    padding: Spacing.medium,
    borderRadius: BorderRadius.medium,
    boxShadow: Shadows.light,
    marginVertical: Spacing.small,
  },
  title: {
    fontSize: FontSizes.large,
    fontWeight: FontWeights.bold,
    color: Colors.text,
    marginBottom: Spacing.small,
  },
   content: {
    width: '100%',
    height: 200,
    borderRadius: BorderRadius.medium,
    marginBottom: Spacing.medium,
   },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  author: {
    fontSize: FontSizes.small,
    fontWeight: FontWeights.regular,
    color: Colors.text,
  },
  date: {
    fontSize: FontSizes.small,
    fontWeight: FontWeights.regular,
    color: Colors.text,
  },
});
