import Ionicons from "@expo/vector-icons/Ionicons";
import { PropsWithChildren, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export function Collapsible({
  children,
  title,
}: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemedView>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}
      >
        <Ionicons
          name={isOpen ? "chevron-down" : "chevron-forward-outline"}
          size={18}
          color={"white"}
        />
        <ThemedText style={styles.title} type="defaultSemiBold">
          {title}
        </ThemedText>
      </TouchableOpacity>
      {isOpen && <ThemedView>{children}</ThemedView>}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  heading: {
    backgroundColor: "#A1CEDC",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    padding: 12,
  },
  title: {
    fontSize: 20,
    color: "#fff",
  },
});
