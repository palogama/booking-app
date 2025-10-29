import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Summary from "../components/summary";

type ConfirmBookingScreenRouteProp = RouteProp<
  RootStackParamList,
  "ConfirmBooking"
>;

type ConfirmBookingScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ConfirmBooking"
>;

export default function ConfirmBookingScreen() {
  const route = useRoute<ConfirmBookingScreenRouteProp>();
  const navigation = useNavigation<ConfirmBookingScreenNavigationProp>();
  const { site, slot, motive } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You're about to book:</Text>
      <Summary site={site} slot={slot} motive={motive} />

      <Button
        title="CONFIRM"
        onPress={() =>
          navigation.navigate("Success", {
            slot: route.params.slot,
            motive: route.params.motive,
            site: route.params.site,
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 18 },
  slot: { fontSize: 22, fontWeight: "bold", marginVertical: 10 },
});
