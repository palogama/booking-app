import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  RouteProp,
  useNavigation,
  useRoute,
  CommonActions,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import Summary from "../components/Summary";
import { styles } from "../styles/global";
import NavigationButtons from "../components/NavigationButtons";

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

  const handleConfirm = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Success", params: { slot, motive, site } }],
      })
    );
  };

  return (
    <View style={styles.layout.container}>
      <Text style={styles.text.confirm}>
        You've been assigned a practitioner for your appointment.
      </Text>
      <Text style={styles.text.title}>You're about to book:</Text>
      <Summary site={site} slot={slot} motive={motive} />

      <TouchableOpacity
        style={[styles.button.confirmButton]}
        onPress={handleConfirm}
      >
        <Text style={styles.button.text}>Confirm</Text>
      </TouchableOpacity>

      <View style={styles.layout.footer}>
        <NavigationButtons />
      </View>
    </View>
  );
}
