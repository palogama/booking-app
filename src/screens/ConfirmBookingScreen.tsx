import React from "react";
import { View, Text, Button } from "react-native";
import {
  RouteProp,
  useNavigation,
  useRoute,
  CommonActions,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import Summary from "../components/summary";
import CancelBookingButton from "../components/cancelBookingButton";
import { styles } from "../styles/global";

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
      <Text style={styles.text.title}>You're about to book:</Text>
      <Summary site={site} slot={slot} motive={motive} />

      <View style={styles.button.footerButtons}>
        <Button title="CONFIRM" onPress={handleConfirm} />
        <CancelBookingButton />
      </View>
    </View>
  );
}
