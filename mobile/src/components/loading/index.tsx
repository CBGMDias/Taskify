import { ActivityIndicator } from "react-native"
import { useColorScheme } from "react-native"

import { s } from "./styles"
import { colors } from "@/styles/theme"

export function Loading() {
    const colorScheme = useColorScheme()
    const loadingStyle = colorScheme === 'light' ? s.containerLight : s.containerDark

  return <ActivityIndicator color={colors.green[400]} style={loadingStyle} />
}