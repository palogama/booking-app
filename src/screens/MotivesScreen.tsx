import React from "react";
import { View, Text, FlatList, TouchableOpacity, Button } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { mock } from "../data/mock";
import CancelBookingButton from "../components/cancelBookingButton";
import { styles } from "../styles/global";

type MotivesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Motives"
>;

export default function MotivesScreen() {
  const navigation = useNavigation<MotivesScreenNavigationProp>();

  return (
    <View style={styles.layout.container}>
      <Text style={styles.text.title}>Select your reason for visit</Text>

      <FlatList
        data={mock.motives}
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

      <View style={styles.button.footerButtons}>
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <CancelBookingButton />
      </View>
    </View>
  );
}
