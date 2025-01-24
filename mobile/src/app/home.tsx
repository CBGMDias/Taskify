import { View, useColorScheme } from "react-native"

import { router } from "expo-router"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Steps } from "@/components/steps"
import { Button } from "@/components/button"
import { Welcome } from "@/components/welcome"

import { colors } from "@/styles/theme"

export default function Index() {
  const colorScheme = useColorScheme()
  const backgroundStyle = colorScheme === 'light' ? colors.logo.background : colors.logo.darkBackground

  return (
    <View style={{ flex: 1, backgroundColor: backgroundStyle }}>
      <Header />
      
      <View style={{ flex: 1 }} /> {}

      <Footer />
    </View>
  )
}