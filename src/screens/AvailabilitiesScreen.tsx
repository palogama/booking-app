import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";

const MOCK_AVAILABILITIES = [
  "2025-10-27 10:00",
  "2025-10-27 10:30",
  "2025-10-27 11:00",
  "2025-10-27 11:30",
];

type AvailabilitiesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Availabilities"
>;
type AvailabilitiesScreenRouteProp = RouteProp<
  RootStackParamList,
  "Availabilities"
>;

export default function AvailabilitiesScreen() {
  const navigation = useNavigation<AvailabilitiesScreenNavigationProp>();

  const route = useRoute<AvailabilitiesScreenRouteProp>();

  const { motive } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available slots for: {motive}</Text>

      <FlatList
        data={MOCK_AVAILABILITIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.slot}
            onPress={() =>
              navigation.navigate("Confirmation", {
                slot: item,
                motive,
              })
            }
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 10 },
  slot: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
});
