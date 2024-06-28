import { Image, StyleSheet, Platform } from "react-native";
import { Text, View } from "@/components/Themed";
import MapView, { Marker, Callout } from "react-native-maps";
import { useState, useEffect } from "react";
import { router } from "expo-router";
import * as Location from "expo-location";
import { Colors } from "../../../constants/ThemeVariables";

export default function Map() {
  const [posts, setPosts] = useState([]);
  const [location, setLocation] = useState(null); // Added state for location

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/cederdorff/race/master/data/expo-posts.json"
    )
      .then((response) => response.json())
      .then(setPosts);
  }, []);

  useEffect(() => {
    async function requestLocationPermission() {
      const { status } = await Location.requestBackgroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied by the user.");
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync();
      setLocation({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.15,
        longitudeDelta: 0.04,
      });
    }
    requestLocationPermission();
  }, []);

  if (!location) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={location} region={location}>
        <Marker
          coordinate={location}
          title="You are here"
          pinColor={Colors.primary}
        />
        {posts.map((post) => (
          <Marker key={post.id} coordinate={post.location}>
            <Callout
              onPress={() =>
                router.push({
                  pathname: "map/[id]",
                  params: { id: post.id, postData: JSON.stringify(post) },
                })
              }
            >
              <View style={styles.callOutView}>
                <Text>{post.caption}</Text>
                <Image source={{ uri: post.image }} style={styles.image} />
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  callOutView: {
    flex: 1,
  },
  image: {
    height: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
