import React from "react";
import { View, Text, FlatList, TouchableOpacity, Button } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { mock } from "../data/mock";
import CancelBookingButton from "../components/cancelBookingButton";
import { commonStyles as styles } from "../styles/global"; // ⬅️ centralized styles

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

      <View style={styles.footerButtons}>
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <CancelBookingButton />
      </View>
    </View>
  );
}
