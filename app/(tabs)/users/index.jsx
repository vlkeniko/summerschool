import React, { useEffect, useState } from "react";
import { StyleSheet, SectionList, Text, View, Platform } from "react-native";
import User from "../../../components/User";
import { Colors } from "@/constants/ThemeVariables";

export default function Users() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/cederdorff/race/master/data/expo-users.json"
    )
      .then((response) => response.json())
      .then((data) => {
        // Group users by title
        const groupedData = data.reduce((acc, user) => {
          const section = acc.find((section) => section.title === user.title);
          if (section) {
            section.data.push(user);
          } else {
            acc.push({ title: user.title, data: [user] });
          }
          return acc;
        }, []);
        setSections(groupedData);
      });
  }, []);

  function renderUser({ item }) {
    return <User user={item} />;
  }

  function renderSectionHeader({ section: { title } }) {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    );
  }

  return (
    <View style={styles.safeArea}>
      <SectionList
        sections={sections}
        keyExtractor={(user) => user.id}
        renderItem={renderUser}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.container}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background ,
  },
  container: {
    alignItems: "stretch",
    justifyContent: "center",
    width: "95%",
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto"
  },
  header: {
    backgroundColor: Colors.secondary,
    padding: 10,
    width: "100%",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
