import { StyleSheet } from "react-native"
import { colors, fontFamily } from "@/styles/theme"

export const s = StyleSheet.create({
  logo: {
    width: 200,
    height: 48,
    marginTop: 24,
    marginBottom: 28,
  },
  titleLight: {
    fontSize: 24,
    fontFamily: fontFamily.bold,
    color: colors.gray[600],
  },
  subtitleLight: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    marginTop: 12,
  },
  titleDark: {
    fontSize: 24,
    fontFamily: fontFamily.bold,
    color: colors.gray[200],
  },
  subtitleDark: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[100],
    marginTop: 12,
  }
})