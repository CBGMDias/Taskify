import { Text, View, useColorScheme } from "react-native"
import { IconProps } from "@tabler/icons-react-native"

import { colors } from "@/styles/theme"
import { s } from "./styles"

type Props = {
  title: string
  description: string
  icon: React.ComponentType<IconProps>
}

export function Step({ title, description, icon: Icon }: Props) {
  const colorScheme = useColorScheme()
  const titleStyle = colorScheme === 'light' ? s.titleLight : s.titleDark
  const descriptionStyle = colorScheme === 'light' ? s.descriptionLight : s.descriptionDark

  return (
    <View style={s.container}>
      {Icon && <Icon size={32} color={colors.green[500]}/>}

      <View style={s.details}>
        <Text style={titleStyle}>{title}</Text>
        <Text style={descriptionStyle}>{description}</Text>
      </View>
    </View>
  )
}