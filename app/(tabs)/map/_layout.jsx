import { Stack } from "expo-router";
import { Colors } from "../../../constants/ThemeVariables";

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
      <Stack.Screen name="index" options={{ title: "Map" }} />
    </Stack>
  );
}
