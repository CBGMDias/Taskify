import { StyleSheet } from "react-native"

import { colors } from "@/styles/theme"

export const s = StyleSheet.create({
  container: {
    maxHeight: 120,
    backgroundColor: colors.gray[550],
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  buttonsContainer: {
    maxHeight: 120,
    flexDirection: "row",
    gap: 100,
  }
})