import { View, useColorScheme, Text } from "react-native"

import { router } from "expo-router"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DayPicker } from "@/components/dayPicker"
import { HomeTasks } from "@/components/homeTasks"

import { colors } from "@/styles/theme"

export default function Home() {
  const colorScheme = useColorScheme()
  const backgroundStyle = colorScheme === 'light' ? colors.logo.background : colors.logo.darkBackground

  const handleDateSelect = (date: string) => {
    console.log("Data selecionada:", date)
    // Aqui, você pode integrar a lógica da API para exibir as tarefas do dia.
  }

  return (
    <View style={{ flex: 1, backgroundColor: backgroundStyle }}>
      <Header />

      <View style={{ flex: 1 }}>
        <DayPicker onDateSelect={handleDateSelect} />
        <HomeTasks/>
      </View>

      <Footer />
    </View>
  )
}