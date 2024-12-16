import { StyleSheet } from "react-native"
import { colors, fontFamily } from "@/styles/theme"

export const s = StyleSheet.create({
  container: {
    gap: 24,
    flex: 1,
  },
  titleLight: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
  },
  titleDark: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[100],
  },
})