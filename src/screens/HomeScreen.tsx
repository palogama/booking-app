import React from "react";
import { View, Text, Button } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/global";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.layout.containerCenter}>
      <Text style={styles.text.mainTitle}>Book your appointment</Text>
      <Button
        title="Start booking"
        onPress={() => navigation.navigate("Motives")}
      />
    </View>
  );
}
