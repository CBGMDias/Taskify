import { StyleSheet } from "react-native"

import { colors, fontFamily } from "@/styles/theme"

export const s = StyleSheet.create({
  titleLight: {
    fontSize: 20,
    fontFamily: fontFamily.bold,
    paddingLeft: 10,
    paddingTop: 15,
    color: colors.gray[600],
  },
  subtitleLight: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    marginTop: 200,
  },
  titleDark: {
    fontSize: 20,
    fontFamily: fontFamily.bold,
    paddingLeft: 10,
    paddingTop: 15,
    color: colors.gray[200],
  },
  subtitleDark: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[100],
    marginTop: 200,
  }
})