import { ShipProps } from "@/types";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export function Ship({ name, image }: Partial<ShipProps>) {
  return (
    <View style={styles.ship}>
      <Text style={styles.title}>{name}</Text>
      <Image
        style={styles.image}
        source={image}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ship: {
    backgroundColor: "#A1CEDC",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    marginVertical: 10,
    backgroundColor: "#0553",
  },
});
