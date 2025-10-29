import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { mock } from "../data/mock";

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

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <ScrollView>
              {cities.map((city) => (
                <TouchableOpacity
                  key={city}
                  style={styles.modalItem}
                  onPress={() => {
                    setSelectedCity(city);
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.modalText}>{city}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity
              style={styles.modalClose}
              onPress={() => setModalVisible(false)}
            >
              <Text style={{ color: "white" }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 15 },
  item: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    marginVertical: 6,
    borderRadius: 10,
  },
  text: { fontSize: 18 },
  dropdownButton: {
    backgroundColor: "#e0e0e0",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  dropdownText: { fontSize: 16 },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    width: "80%",
    borderRadius: 10,
    paddingVertical: 10,
    maxHeight: "60%",
  },
  modalItem: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  modalText: { fontSize: 16 },
  modalClose: {
    backgroundColor: "#2196F3",
    margin: 15,
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
  },
});
