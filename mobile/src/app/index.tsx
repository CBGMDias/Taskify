import { View, useColorScheme } from "react-native"

import { router } from "expo-router"

import { Steps } from "@/components/steps"
import { Button } from "@/components/button"
import { Welcome } from "@/components/welcome"

import { colors } from "@/styles/theme"

export default function Index() {
  const colorScheme = useColorScheme()
  const backgroundStyle = colorScheme === 'light' ? colors.logo.background : colors.logo.darkBackground

  return (
    <View style={{ flex: 1, padding: 40, gap: 40, backgroundColor: backgroundStyle}}>
      <Welcome />
      <Steps />

      <Button >
        <Button.Title>Começar</Button.Title>
      </Button>
    </View>
  )
}

// onPress={() => router.navigate("/home")}