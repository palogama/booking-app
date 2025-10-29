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
import { styles } from "../styles/global";

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
    <View style={styles.layout.container}>
      <Text style={styles.text.title}>Choose your practice location</Text>

      {/* City filter dropdown */}
      <TouchableOpacity
        style={styles.modal.dropdownButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.modal.dropdownText}>City: {selectedCity}</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modal.modalOverlay}>
          <View style={styles.modal.modalContent}>
            <ScrollView>
              {cities.map((city) => (
                <TouchableOpacity
                  key={city}
                  style={styles.modal.modalItem}
                  onPress={() => {
                    setSelectedCity(city);
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.modal.modalText}>{city}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity
              style={styles.modal.modalClose}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modal.modalTextWhite}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <FlatList
        data={filteredSites}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.modal.item}
            onPress={() =>
              navigation.navigate("Availabilities", { motive, site: item })
            }
          >
            <Text style={styles.modal.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.button.footerButtons}>
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <CancelBookingButton />
      </View>
    </View>
  );
}
