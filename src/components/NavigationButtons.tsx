import React from "react";
import CancelBookingButton from "./CancelBookingButton";
import GoBackButton from "../components/GoBackButton";
import { View } from "react-native";
import { styles } from "../styles/global";

//Display with the 2 buttons that appear during the navigation: goBack and cancelBooking

const NavigationButtons = () => {
  return (
    <View style={styles.button.footerButtons}>
      <GoBackButton />
      <CancelBookingButton />
    </View>
  );
};

export default NavigationButtons;
