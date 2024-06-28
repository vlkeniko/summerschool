import { Stack } from "expo-router";
import { Colors } from "../../../constants/ThemeVariables";
import { Platform } from "react-native"

export default function UsersLayout() {
    return (
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTintColor: Colors.primary,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          tabBarStyle: {
            backgroundColor: Colors.background,
          },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Users"}} />
      </Stack>
    );
}