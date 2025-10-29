import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ConsultationSite, Motive } from "../data/mock";

type SummaryProps = {
  site: ConsultationSite;
  slot: string;
  motive: Motive;
};

const Summary: React.FC<SummaryProps> = ({ site, slot, motive }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.slot}>{site.city}</Text>
      <Text style={styles.slot}>{site.name}</Text>
      <Text style={styles.slot}>{slot}</Text>
      <Text style={styles.slot}>{motive.name}</Text>
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  container: { padding: 10 },
  slot: { fontSize: 18, marginVertical: 2 },
});
