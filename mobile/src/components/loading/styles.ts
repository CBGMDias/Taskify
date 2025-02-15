import { StyleSheet } from "react-native"
import { colors } from "@/styles/theme"

export const s = StyleSheet.create({
  containerLight: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.logo.background
  },
  containerDark: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.logo.darkBackground
  }
})