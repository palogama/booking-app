import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Summary from "../components/summary";

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
    <View style={styles.container}>
      <Text style={styles.text}>You have booked:</Text>
      <Summary site={site} slot={slot} motive={motive} />
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 18 },
  slot: { fontSize: 22, fontWeight: "bold", marginVertical: 10 },
});
