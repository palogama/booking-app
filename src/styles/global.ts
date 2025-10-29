
import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
  containerCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainTitle: {
    fontSize: 26,
    marginBottom: 20,
    textAlign: "center",
  },
   container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
    textAlign: "center",
  },
  item: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    marginVertical: 6,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
  },
  footerButtons: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  dropdownButton: {
  backgroundColor: "#e0e0e0",
  padding: 12,
  borderRadius: 8,
  marginBottom: 15,
},
dropdownText: { fontSize: 16 },
dayContainer: { marginBottom: 20 },
dayTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 8 },
slotsContainer: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
slot: {
  backgroundColor: "#d0f0d0",
  padding: 8,
  borderRadius: 6,
},
disabledSlot: {
  backgroundColor: "#f0f0f0",
  opacity: 0.5,
},
slotText: { fontSize: 14 },
});
