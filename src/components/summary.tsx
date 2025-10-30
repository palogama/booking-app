import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ConsultationSite, Motive } from "../data/mock";
import { styles } from "../styles/global";

type SummaryProps = {
  site: ConsultationSite;
  slot: string;
  motive: Motive;
};

const Summary: React.FC<SummaryProps> = ({ site, slot, motive }) => {
  const [practitioner] = useState(() => {
    const index = Math.floor(Math.random() * site.practitioners.length);
    return site.practitioners[index].name;
  });

  return (
    <View style={styles.layout.summary}>
      <Text style={styles.text.label}>Practitioner:</Text>
      <Text style={styles.text.text}>{practitioner}</Text>
      <Text style={styles.text.label}>Site:</Text>
      <Text style={styles.text.text}>{site.city}</Text>
      <Text style={styles.text.text}>{site.name}</Text>
      <Text style={styles.text.label}>Date and time:</Text>
      <Text style={styles.text.text}>{slot}</Text>
      <Text style={styles.text.label}>Motive:</Text>
      <Text style={styles.text.text}>{motive.name}</Text>
    </View>
  );
};

export default Summary;
