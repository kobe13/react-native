import { ShipProps } from "@/types";
import { StyleSheet, View, Text } from "react-native";

export function Ship({ name }: Partial<ShipProps>) {
  return (
    <View style={styles.ship}>
      <Text style={styles.title}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ship: {
    backgroundColor: "crimson",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
