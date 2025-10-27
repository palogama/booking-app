import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../App";

const MOCK_MOTIVES = ["Sick", "Revision", "Specialist", "Other"];

type MotivesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Motives"
>;

export default function MotivesScreen() {
  const navigation = useNavigation<MotivesScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select your reason for visit</Text>

      <FlatList
        data={MOCK_MOTIVES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              navigation.navigate("Availabilities", { motive: item })
            }
          >
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 15 },
  item: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    marginVertical: 6,
    borderRadius: 10,
  },
  text: { fontSize: 18 },
});
