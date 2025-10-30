import { StyleSheet } from "react-native";


export const modalStyles = StyleSheet.create({

  dropdownButton: {
  backgroundColor: "#f394acff",
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
modalTextWhite: { fontSize: 16, color: "white" },
modalClose: {
  backgroundColor: "#88354A",
  margin: 15,
  borderRadius: 8,
  paddingVertical: 10,
  alignItems: "center",
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
 
});
