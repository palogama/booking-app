import React from "react";
import CancelBookingButton from "./CancelBookingButton";
import GoBackButton from "../components/GoBackButton";
import { View } from "react-native";
import { styles } from "../styles/global";

const NavigationButtons = () => {
  return (
    <View style={styles.button.footerButtons}>
      <GoBackButton />
      <CancelBookingButton />
    </View>
  );
};

export default NavigationButtons;
