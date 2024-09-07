import { ShipsData } from "@/types";
import { StyleSheet, SafeAreaView, FlatList, StatusBar } from "react-native";
import { Ship } from "@/components/Ship";

export function ShipsList({ ships }: ShipsData) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={ships}
        renderItem={({ item }) => <Ship name={item.name} image={item.image} />}
        keyExtractor={(item) => item.id}
        numColumns={1}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
