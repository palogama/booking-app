import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import Summary from "../components/summary";
import CancelBookingButton from "../components/cancelBookingButton";
import { commonStyles as styles } from "../styles/global";

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

      <View style={styles.footerButtons}>
        <Button
          title="CONFIRM"
          onPress={() => navigation.navigate("Success", { slot, motive, site })}
        />
        <CancelBookingButton />
      </View>
    </View>
  );
}
