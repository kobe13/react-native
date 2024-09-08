import { ShipProps } from "@/types";
import { StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Collapsible } from "@/components/Collapsible";
import { ThemedText } from "@/components/ThemedText";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export function Ship({ id, name, image }: ShipProps) {
  return (
    <Collapsible title={name ?? "Unnamed Ship"}>
      <Image
        testID={"test-image-id"}
        style={styles.image}
        source={image}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      <ThemedText style={styles.id}>ID: {id}</ThemedText>
    </Collapsible>
  );
}

const styles = StyleSheet.create({
  id: {
    backgroundColor: "#A1CEDC",
    color: "#fff",
    padding: 20,
    fontStyle: "italic",
  },
  image: {
    width: "100%",
    height: 200,
    backgroundColor: "#0553",
  },
});
