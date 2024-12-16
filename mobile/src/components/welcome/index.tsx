import { Image, Text, View, Appearance, useColorScheme } from "react-native"

import { s } from "./styles"

export function Welcome() {
  const colorScheme = useColorScheme()
  const titleStyle = colorScheme === 'light' ? s.titleLight : s.titleDark
  const subtitleStyle = colorScheme === 'light' ? s.subtitleLight : s.subtitleDark

  return (
    <View>
      <Image source={require("@/assets/logo.png")} style={s.logo} />

      <Text style={titleStyle}>Boas vindas ao Taskify!</Text>

      <Text style={subtitleStyle}>
        Transforme sua rotina: planeje, organize e conquiste seus objetivos, um passo de cada vez.
      </Text>
    </View>
  )
}