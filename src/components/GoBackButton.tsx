import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { styles } from "../styles/global";

const GoBackButton: React.FC<{}> = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      style={[styles.button.buttonBack]}
      onPress={() => navigation.goBack()}
    >
      <Text style={styles.button.textBack}>Go back</Text>
    </TouchableOpacity>
  );
};

export default GoBackButton;
