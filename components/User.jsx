import React from "react";
import { router } from "expo-router";
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  Colors,
  FontSizes,
  FontWeights,
  Spacing,
  BorderRadius,
} from "../constants/ThemeVariables";

export default function User({ user }) {
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "users/[id]",
          params: { id: user.id, userData: JSON.stringify(user) },
        })
      }
    >
      <View style={styles.userContainer}>
        <View style={styles.userImageContainer}>
          <Image style={styles.userImage} source={{ uri: user.image }} />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userTitle}>{user.title}</Text>
        </View>
        <Ionicons
          style={styles.chevron}
          name="chevron-forward-outline"
          size={28}
          color={Colors.primary}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: Spacing.medium,
    backgroundColor: Colors.background,
    borderRadius: BorderRadius.small,
    marginBottom: Spacing.small,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  userImageContainer: {
    marginRight: Spacing.medium,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: FontSizes.medium,
    fontWeight: FontWeights.bold,
    color: Colors.text,
  },
  userTitle: {
    fontSize: FontSizes.small,
    fontWeight: FontWeights.regular,
    color: Colors.text,
    marginTop: Spacing.small,
  },
  chevron: {
    marginLeft: Spacing.small,
  },
});
