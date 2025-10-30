import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { mock, Motive } from "../data/mock";
import { styles } from "../styles/global";
import NavigationButtons from "../components/NavigationButtons";
import StateWrapper from "../components/StateWrapper";

type MotivesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Motives"
>;

export default function MotivesScreen() {
  const navigation = useNavigation<MotivesScreenNavigationProp>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [motives, setMotives] = useState<Motive[]>([]);

  // Simulate API call
  useEffect(() => {
    setLoading(true);
    setError(null);

    try {
      setTimeout(() => {
        setMotives(mock.motives);
        setLoading(false);
      }, 500); // simulate network delay
    } catch (e) {
      setError("Failed to load motives");
      setLoading(false);
    }
  }, []);

  return (
    <StateWrapper
      loading={loading}
      error={error}
      data={motives}
      onRetry={() => {}}
    >
      <View style={styles.layout.container}>
        <Text style={styles.text.title}>Select your reason for visit</Text>

        <FlatList
          data={motives}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.layout.item}
              onPress={() => navigation.navigate("Sites", { motive: item })}
            >
              <Text style={styles.text.text}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />

        <View style={styles.layout.footer}>
          <NavigationButtons />
        </View>
      </View>
    </StateWrapper>
  );
}
