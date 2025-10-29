import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  ScrollView,
  Button,
} from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { mock } from "../data/mock";
import CancelBookingButton from "../components/cancelBookingButton";
import { commonStyles as styles } from "../styles/global";

type SitesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Sites"
>;
type SitesScreenRouteProp = RouteProp<RootStackParamList, "Sites">;

export default function SitesScreen() {
  const navigation = useNavigation<SitesScreenNavigationProp>();
  const route = useRoute<SitesScreenRouteProp>();
  const { motive } = route.params;

  const [selectedCity, setSelectedCity] = useState<string>("All");
  const [modalVisible, setModalVisible] = useState(false);

  // Unique list of cities
  const cities = useMemo(() => {
    const allCities = mock.consultationSites.map((site) => site.city);
    return ["All", ...Array.from(new Set(allCities))];
  }, []);

  // Filter sites based on selected city
  const filteredSites = useMemo(() => {
    if (selectedCity === "All") return mock.consultationSites;
    return mock.consultationSites.filter((site) => site.city === selectedCity);
  }, [selectedCity]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose your practice location</Text>

      {/* City filter dropdown */}
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.dropdownText}>City: {selectedCity}</Text>
      </TouchableOpacity>

      <FlatList
        data={filteredSites}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              navigation.navigate("Availabilities", { motive, site: item })
            }
          >
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.footerButtons}>
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <CancelBookingButton />
      </View>
    </View>
  );
}
