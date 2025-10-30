import { StyleSheet } from "react-native";


export const buttonStyles = StyleSheet.create({
   footerButtons: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom:50,
  },

   buttonBack: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "#f0f0f0"
  },
    startButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "#f394acff",
  },
  confirmButton: {
    marginTop: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "#f394acff",
  },
   text: {
    color: "white",
    fontSize: 16,
  },
   buttonCancel: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "#FD5353"
  },
   textBack: {
    color: "#88354A",
    fontSize: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },

});
