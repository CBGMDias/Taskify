import { StyleSheet } from "react-native"

import { colors } from "@/styles/theme"

export const s = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  dateList: {
    alignItems: "center",
  },
  dateContainer: {
    padding: 10,
    alignItems: "center",
    marginHorizontal: 5,
    borderRadius: 10,
  },
  selectedDate: {
    backgroundColor: colors.green[400],
  },
  dayText: {
    color: colors.gray[100],
    fontSize: 18,
  },
  dateText: {
    color: colors.gray[100],
    fontSize: 22,
    fontWeight: "bold",
  },
})
