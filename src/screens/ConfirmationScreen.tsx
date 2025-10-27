import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type ConfirmationScreenRouteProp = RouteProp<
  RootStackParamList,
  "Confirmation"
>;
type ConfirmationScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Confirmation"
>;

export default function ConfirmationScreen() {
  const route = useRoute<ConfirmationScreenRouteProp>();
  const navigation = useNavigation<ConfirmationScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You booked:</Text>
      <Text style={styles.slot}>{route.params.slot}</Text>
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
