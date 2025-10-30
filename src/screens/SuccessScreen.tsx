import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Summary from "../components/Summary";
import { styles } from "../styles/global";

type SuccessScreenRouteProp = RouteProp<RootStackParamList, "Success">;

type SuccessScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Success"
>;

export default function SuccessScreen() {
  const route = useRoute<SuccessScreenRouteProp>();
  const navigation = useNavigation<SuccessScreenNavigationProp>();
  const { site, slot, motive } = route.params;

  return (
    <View style={styles.layout.container}>
      <Text style={styles.text.title}>You have booked:</Text>

      <Summary site={site} slot={slot} motive={motive} />

      <TouchableOpacity
        style={[styles.button.confirmButton]}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.button.text}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}
