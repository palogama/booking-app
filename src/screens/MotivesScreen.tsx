import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { mock } from "../data/mock";

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
        data={mock.motives}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("Sites", { motive: item })}
          >
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 5 },
  item: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    marginVertical: 6,
    borderRadius: 10,
  },
  text: { fontSize: 18 },
});
