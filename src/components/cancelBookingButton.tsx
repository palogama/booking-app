import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { styles } from "../styles/global";
import CancelBookingModal from "./CancelBookingModal";

const CancelBookingButton: React.FC<{
  buttonTitle?: string;
}> = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleConfirm = () => {
    setModalVisible(false);
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Home" }],
      })
    );
  };

  return (
    <>
      <TouchableOpacity
        style={[styles.button.buttonCancel]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.button.text}>Cancel booking</Text>
      </TouchableOpacity>

      <CancelBookingModal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onConfirm={handleConfirm}
      />
    </>
  );
};

export default CancelBookingButton;
