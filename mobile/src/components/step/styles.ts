import { StyleSheet } from "react-native"
import { colors, fontFamily } from "@/styles/theme"

export const s = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    gap: 16,
  },
  details: {
    flex: 1,
  },
  titleLight: {
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
    color: colors.gray[600],
  },
  descriptionLight: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    marginTop: 4,
  },
  titleDark: {
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
    color: colors.gray[100],
  },
  descriptionDark: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[200],
    marginTop: 4,
  }
})