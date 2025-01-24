import { StyleSheet } from "react-native"
import { colors, fontFamily } from "@/styles/theme"

export const s = StyleSheet.create({
  container: {
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    padding: 10, 
    width: 100, 
    height: 100
  },
  buttonText: {
    marginTop: 8,
    textAlign: "center",
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[100]
  },
})
