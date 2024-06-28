import { Text } from "react-native-web";

export default function Welcome({ name, mail }) {
  return (
    <Text>
      Hello, {name}, {mail}
    </Text>
  );
}
