import { ShipProps } from "@/types";
import { StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Collapsible } from "@/components/Collapsible";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export function Ship({ name, image }: Partial<ShipProps>) {
  return (
    <Collapsible title={name ?? "Unnamed Ship"}>
      <Image
        style={styles.image}
        source={image}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
    </Collapsible>
  );
}

const styles = StyleSheet.create({
  ship: {
    backgroundColor: "#A1CEDC",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
    backgroundColor: "#0553",
  },
});
