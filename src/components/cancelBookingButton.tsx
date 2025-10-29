import React, { useState } from "react";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import CancelBookingModal from "./cancelBookingModal";
import { RootStackParamList } from "../../App";

const CancelBookingButton: React.FC<{
  buttonTitle?: string;
  buttonColor?: string;
}> = ({ buttonTitle = "Cancel booking", buttonColor = "#FF3B30" }) => {
  const [modalVisible, setModalVisible] = useState(false);

  // useNavigation directly inside the component
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <>
      <Button
        title={buttonTitle}
        color={buttonColor}
        onPress={() => setModalVisible(true)}
      />
      <CancelBookingModal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onConfirm={() => {
          setModalVisible(false);
          navigation.navigate("Home"); // always navigate to Home
        }}
      />
    </>
  );
};

export default CancelBookingButton;
