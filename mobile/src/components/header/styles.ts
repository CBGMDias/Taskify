import { StyleSheet } from "react-native"

export const s = StyleSheet.create({
  logo: {
    width: 150,
    height: 36,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 10,
  },
  button: {
    padding: 10, 
    width: 45, 
    height: 45
  }
})