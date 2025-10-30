import React, { useState, useEffect } from "react";
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
import StateWrapper from "../components/StateWrapper";

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

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Simulate practitioner assignment delay
  useEffect(() => {
    const timer = setTimeout(() => {
      // simulate random error 10% of the time
      if (Math.random() < 0.1) {
        setError("Failed to assign practitioner. Please try again.");
      }
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleConfirm = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Success", params: { slot, motive, site } }],
      })
    );
  };

  return (
    <StateWrapper
      loading={loading}
      error={error}
      data={[{ site, slot, motive }]}
      onRetry={() => setLoading(true)}
    >
      <View style={styles.layout.container}>
        <Text style={styles.text.confirm}>
          You've been assigned a practitioner for your appointment.
        </Text>
        <Text style={styles.text.title}>You're about to book:</Text>
        <Summary site={site} slot={slot} motive={motive} />

        <TouchableOpacity
          style={styles.button.confirmButton}
          onPress={handleConfirm}
        >
          <Text style={styles.button.text}>Confirm</Text>
        </TouchableOpacity>

        <View style={styles.layout.footer}>
          <NavigationButtons />
        </View>
      </View>
    </StateWrapper>
  );
}
