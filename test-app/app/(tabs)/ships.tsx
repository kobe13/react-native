import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, StatusBar } from "react-native";
import { useQuery, gql } from "@apollo/client";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ShipsList } from "@/components/ShipsList";
import { ShipsData } from "@/types";

const GET_SHIPS = gql`
  query Ships($limit: Int) {
    ships(limit: $limit) {
      id
      name
    }
  }
`;

export default function Ships() {
  const { data, loading, error } = useQuery<ShipsData>(GET_SHIPS, {
    variables: { limit: 5 },
  });

  return (
    <>
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
        headerImage={
          <Ionicons size={310} name="prism" style={styles.headerImage} />
        }
      >
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Ships</ThemedText>
        </ThemedView>
        {loading && <ThemedText>Loading...</ThemedText>}
        {error && <ThemedText>Error: {error.message}</ThemedText>}
      </ParallaxScrollView>
      <ShipsList ships={data?.ships} />
    </>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
