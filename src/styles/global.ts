
import { StyleSheet } from "react-native";
import { layoutStyles } from "./layoutStyles";
import { textStyles } from "./textStyles";
import { modalStyles } from "./modalStyles";
import { buttonStyles } from "./buttonStyles";
import { availabilitiesStyles } from "./availabilitiesStyles";



export const styles = {
  layout: layoutStyles,
  text: textStyles,
  modal: modalStyles,
  button: buttonStyles,
  availabilities: availabilitiesStyles,
};

export const commonStyles = StyleSheet.create({
    


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
